import { apiFetch, getMovieUrl, loadNavbarFooter } from "./site.js";

/** Initializes navigation components and triggers movie metadata fetching. */
document.addEventListener("DOMContentLoaded", async () => {
    loadNavbarFooter();
    await loadMovieDetails();
});

/** Retrieves the 'id' parameter from the current URL query string. */
function getMovieIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
}

/** Fetches and renders the details of a specific movie into the DOM. */
async function loadMovieDetails() {
    const container = document.getElementById("movieDetails");
    const id = getMovieIdFromUrl();

    // Early return if no ID is found in the query string
    if (!id) {
        container.innerHTML = "<div class='text-danger'>No movie ID specified.</div>";
        return;
    }

    container.innerHTML = "<div>Loading...</div>";

    try {
        const response = await apiFetch(getMovieUrl(id));
        const errorDiv = document.getElementById("message-error");

        if (!response.ok) {
            const errorText = await response.text();
            let errorMessage = `Failed to load movie (Error ${response.status})`;
            try {
                const errorObj = JSON.parse(errorText);
                if (errorObj.message) errorMessage = errorObj.message;
            } catch (e) {
                // Fallback to the default status-based error message
            }

            errorDiv.textContent = errorMessage;
            errorDiv.classList.remove("d-none");
            setTimeout(() => errorDiv.classList.add("d-none"), 10000);

            return;
        }

        const movie = await response.json();

        /** Maps movie object properties to HTML elements including conditional formatting. */
        container.innerHTML = `
            <h3>${movie.title}</h3>
            <p><strong>Year:</strong> ${movie.year}</p>
            <p><strong>Rating:</strong> ${movie.rating}</p>
            <p><strong>Length:</strong> ${movie.length} minutes</p>
            <p><strong>Trailer:</strong> ${movie.trailerLink ? `<a href="${movie.trailerLink}" target="_blank">Watch</a>` : "N/A"}</p>
            <p><strong>Synopsis:</strong> ${movie.sypnosis || "N/A"}</p>
            <p><strong>Styles:</strong> ${movie.styles.length ? movie.styles.join(", ") : "N/A"}</p>
            <p><strong>Realisators:</strong> ${movie.realisators.length ? movie.realisators.join(", ") : "N/A"}</p>
            <p><strong>Scenarists:</strong> ${movie.scenarists.length ? movie.scenarists.join(", ") : "N/A"}</p>
            <p><strong>Actors:</strong> ${movie.actors.length ? movie.actors.join(", ") : "N/A"}</p>
            <p><strong>Producers:</strong> ${movie.producers.length ? movie.producers.join(", ") : "N/A"}</p>
        `;
    } catch (err) {
        container.innerHTML = `<div class="text-danger">Error loading movie: ${err}</div>`;
    }
}