import { apiFetch, getMovieUrl, loadNavbarFooter, parseIntOrZero, parseNumber } from "./site.js";

/** Initializes the movie creation page components and form submission logic. */
document.addEventListener("DOMContentLoaded", () => {
    loadNavbarFooter();

    const form = document.getElementById("createForm");
    if (!form) return;

    const successDiv = document.getElementById("message-success");
    const errorDiv = document.getElementById("message-error");

    /** Handles form submission by collecting data and coordinating the API POST request. */
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const movie = {
            title: document.getElementById("title").value,
            sypnosis: document.getElementById("sypnosis")?.value || "",
            rating: parseNumber(document.getElementById("rating")?.value),
            year: parseInt(document.getElementById("year")?.value),
            length: parseIntOrZero(document.getElementById("length")?.value),
            trailerLink: document.getElementById("trailer")?.value || "",
            styles: document.getElementById("styles")?.value.split(",").map(x => x.trim()).filter(x => x) || [],
            realisators: document.getElementById("realisators")?.value.split(",").map(x => x.trim()).filter(x => x) || [],
            scenarists: document.getElementById("scenarists")?.value.split(",").map(x => x.trim()).filter(x => x) || [],
            actors: document.getElementById("actors")?.value.split(",").map(x => x.trim()).filter(x => x) || [],
            producers: document.getElementById("producers")?.value.split(",").map(x => x.trim()).filter(x => x) || []
        };

        try {
            const response = await apiFetch(getMovieUrl(), {
                method: "POST",
                body: JSON.stringify(movie)
            });

            if (response.ok) {
                successDiv.textContent = "Movie created successfully!";
                successDiv.classList.remove("d-none");
                setTimeout(() => successDiv.classList.add("d-none"), 3000);
                form.reset();
            }
            else {
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

                errorDiv.textContent = errorMessage;
                errorDiv.classList.remove("d-none");
                setTimeout(() => errorDiv.classList.add("d-none"), 10000);
            }
        } catch (err) {
            errorDiv.textContent = "Error: " + err;
            errorDiv.classList.remove("d-none");
            setTimeout(() => errorDiv.classList.add("d-none"), 10000);
        }
    });
});