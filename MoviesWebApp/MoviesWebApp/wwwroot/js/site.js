/** Loads the common navbar and footer partials into the DOM and handles active link states. */
export function loadNavbarFooter() {
    fetch("partials/navbar.html").then(r => r.text()).then(html => {
        const navbarContainer = document.getElementById("navbar"); navbarContainer.innerHTML = html;

        const page = window.location.pathname.split("/").pop();
        if (page.includes("movie")) document.getElementById("nav-movies")?.classList.add("active");

        const toggler = navbarContainer.querySelector('.navbar-toggler');
        const collapseEl = navbarContainer.querySelector('#navbarMovies');

        if (toggler && collapseEl) {
            const bsCollapse = new bootstrap.Collapse(collapseEl, { toggle: false });
            toggler.addEventListener('click', () => {
                bsCollapse.toggle();
            });
        }
    })
    .catch(err => console.error("Failed to load navbar:", err));

    fetch("partials/footer.html")
        .then(r => r.text())
        .then(html => document.getElementById("footer").innerHTML = html)
        .catch(err => console.error("Failed to load footer:", err));
}

/** Wrapper for fetch that injects JWT headers and handles automatic token refresh logic. */
export async function apiFetch(url, options = {}, retry = true) {
    if (!TokenManager.token) await TokenManager.init();
    const headers = { "Content-Type": "application/json", ...TokenManager.getAuthHeaders(), ...(options.headers || {}) };
    const response = await fetch(url, { ...options, headers });

    if (response.status === 401 && retry) {
        await TokenManager.refreshToken();
        return apiFetch(url, options, false);
    }

    return response;
}

/** Manages JWT authentication tokens, storage persistence, and retrieval from the API. */
export const TokenManager = {
    token: null,
    tokenKey: "movie_api_token",
    get tokenUrl() { return `${AUTO_BASE_URL}/token`; },

    async init() {
        this.token = localStorage.getItem(this.tokenKey);
        if (!this.token) await this.refreshToken();
    },

    async refreshToken() {
        const response = await fetch(this.tokenUrl);
        if (!response.ok) { this.token = null; return; }
        const data = await response.json();
        this.token = data.token;
        localStorage.setItem(this.tokenKey, this.token);
    },

    getAuthHeaders() {
        return this.token ? { "Authorization": "Bearer " + this.token } : {};
    }
};

/** Converts a string to a float with comma-to-dot replacement, defaulting to 0. */
export function parseNumber(value) {
    if (!value) return 0;
    const num = parseFloat(value.replace(",", "."));
    return isNaN(num) ? 0 : num;
}

/** Converts a string to an integer, defaulting to 0 on failure. */
export function parseIntOrZero(value) {
    if (!value) return 0;
    const num = parseInt(value);
    return isNaN(num) ? 0 : num;
}

/** Dynamic base URL detection for the API based on the hosting environment. */
const AUTO_BASE_URL = window.location.hostname.includes("localhost")
    ? "https://localhost:7242/api/v2"
    : "https://moviesapi-rd.azurewebsites.net/api/v2";

/** Global API configuration object for endpoint management. */
export const API_CONFIG = {
    baseUrl: AUTO_BASE_URL,
    movieEndpoint: "/movie"
};

/** Constructs a full movie API URL using the global configuration and an optional ID. */
export function getMovieUrl(id = "") {
    return `${API_CONFIG.baseUrl}${API_CONFIG.movieEndpoint}${id ? "/" + id : ""}`;
}