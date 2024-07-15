import { reset } from './chaos.js';


export function changeTheme(theme, logo) {
    reset();
    document.getElementById('themeStylesheet').setAttribute('href', theme);
    document.getElementById('logo').setAttribute('src', logo);
}