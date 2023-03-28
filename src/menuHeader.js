import { renderBurger } from "./burger";
import { renderTacos } from "./tacos";
import { renderPizza } from "./pizza";

const replaceRender = (menu, newRender) => {
    const menuItem = menu.querySelector(".menu");
    menu.replaceChild(newRender, menuItem);
  };
  
  export const renderMenuHeader = () => {
    const menu = document.createElement("section");
    menu.classList.add("menuwrapper");
    menu.innerHTML = `
      <div class="menutitles">
          <p>MENU</p>
          <nav class="title-flex">
            <li class='title'>Hamburguesas</li>
            <li class='title'>Pizzas</li>
            <li class='title'>Tacos</li>
          </nav>
        </div> 
      `;
    let render = renderBurger();
    menu.appendChild(render);
  
    const titles = menu.querySelectorAll(".title");
    titles.forEach((title) => {
      title.addEventListener("click", () => {
        if (title.textContent === "Pizzas") {
          replaceRender(menu, renderPizza());
        } else if (title.textContent === "Tacos") {
          replaceRender(menu, renderTacos());
        } else {
          replaceRender(menu, renderBurger());
        }
      });
    });
    
    return menu;
  };
  
