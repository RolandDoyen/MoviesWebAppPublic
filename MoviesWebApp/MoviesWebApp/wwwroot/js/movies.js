import { apiFetch, getMovieUrl, loadNavbarFooter } from "./site.js";

/** Main entry point for the movie catalog page. */
document.addEventListener("DOMContentLoaded", async () => {
    loadNavbarFooter();
    await loadMovies();
});

/** Fetches the movie collection and renders it using a standardized error system. */
async function loadMovies() {
    const container = document.getElementById("movieList");
    if (!container) return;

    // Friendly notification for potentially slow initial API response
    container.innerHTML = "<div>Waking up API... Please be patient</div>";

    try {
        const response = await apiFetch(getMovieUrl());

        if (!response.ok) {
            const errorText = await response.text();
            let errorMessage = `Error ${response.status}: `;
            try {
                const errorObj = await response.json();
                if (errorObj.errors) {
                    errorMessage += Object.values(errorObj.errors).flat().join(" | ");
                }
                else if (errorObj.message) {
                    errorMessage += errorObj.message;
                }
                else {
                    errorMessage += "An unexpected error occurred.";
                }
            } catch (e) {
                errorMessage += response.statusText || "Communication failed with the server.";
            }

            container.innerHTML = `<div class="text-danger">${errorMessage}</div>`;
            return;
        }

        const movies = await response.json();

        if (!movies || movies.length === 0) {
            container.innerHTML = "<div>No movies found.</div>";
            return;
        }

        container.innerHTML = "";

        /** Iterates through the movie list to generate dynamic UI items and links. */
        movies.forEach(movie => {
            const item = document.createElement("div");
            item.className = "list-group-item d-flex justify-content-between align-items-center";

            const titleLink = document.createElement("a");
            titleLink.href = `details.html?id=${movie.id}`;
            titleLink.textContent = movie.title;
            titleLink.className = "fw-bold";

            const actions = document.createElement("div");

            const editBtn = document.createElement("a");
            editBtn.href = `edit.html?id=${movie.id}`;
            editBtn.className = "btn btn-sm btn-secondary ms-2";
            editBtn.textContent = "Edit";

            actions.appendChild(editBtn);
            item.appendChild(titleLink);
            item.appendChild(actions);

            container.appendChild(item);
        });
    } catch (err) {
        container.innerHTML = `<div class="text-danger">Error loading movies: ${err}</div>`;
    }
}