import { reset } from './chaos.js';


export function changeTheme(theme, logo) {
    const burgerBtn = document.getElementById('burgerBtn');
    const burgerContent = document.getElementById('burgerContent');
    burgerContent.classList.remove('active');
    burgerBtn.textContent = '☰';
    reset();
    document.getElementById('themeStylesheet').setAttribute('href', theme);
    document.getElementById('logo').setAttribute('src', logo);
    document.getElementById('logoFooter').setAttribute('src', logo);
}