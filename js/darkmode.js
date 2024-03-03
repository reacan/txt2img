// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    const mainStylesheet = document.getElementById('main-stylesheet');
    const darkStylesheet = document.getElementById('dark-stylesheet');

    // Toggle the dark-mode class on the body
    body.classList.toggle('dark-mode');

    // Update the user's preference in local storage
    const darkModeEnabled = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', darkModeEnabled);

    // Toggle between the main and dark stylesheets
    mainStylesheet.disabled = darkModeEnabled;
    darkStylesheet.disabled = !darkModeEnabled;

    // Update image sources based on dark mode
    updateImageSources(darkModeEnabled);
}

// Function to check and apply user's dark mode preference
function applyUserPreference() {
    const darkModeEnabled = localStorage.getItem('darkMode') === 'true';
    const body = document.body;
    const mainStylesheet = document.getElementById('main-stylesheet');
    const darkStylesheet = document.getElementById('dark-stylesheet');

    // Apply dark mode preference
    if (darkModeEnabled) {
        body.classList.add('dark-mode');
    }

    // Toggle between the main and dark stylesheets based on the preference
    mainStylesheet.disabled = darkModeEnabled;
    darkStylesheet.disabled = !darkModeEnabled;

    // Update image sources based on dark mode
    updateImageSources(darkModeEnabled);
}

// Apply user's dark mode preference when the page loads
document.addEventListener('DOMContentLoaded', applyUserPreference);

// Apply dark mode when the page loads based on user's preference and media query
document.addEventListener('DOMContentLoaded', function () {
    applyUserPreference();

    // Check and apply dark mode based on media query
    if (darkModeMediaQuery.matches) {
        toggleDarkMode();
    }
});
