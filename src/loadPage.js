import { renderHome } from "./home";
import { renderMenuHeader } from "./menuHeader";

export const renderPage = () => {
    const content = document.getElementById('content');
    const tab = document.querySelectorAll('tab');
    tab.forEach(element => {
        element.addEventListener('click', )
    });
    content.appendChild(renderHome());
    content.appendChild(renderMenuHeader());
};