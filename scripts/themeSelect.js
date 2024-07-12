export function changeTheme(theme, logo) {
    document.getElementById('themeStylesheet').setAttribute('href', theme);
    document.getElementById('logo').setAttribute('src', logo);
}