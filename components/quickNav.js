import { clipBoard } from "./clipBoard.js";

export const configQuickNavIndex = {
  ai: {
    img: "./img/quickNav/ai.webp",
    text: "Ai-Assistant",
  },
  clippy: {
    img: "./img/quickNav/Clippy.jpeg",
    text: "Clippy",
  },
};
export const configQuickNavFeature = {
  ai: {
    img: "../img/icons/_sanchez.jpeg",
    text: "Sanchez",
  },
  clippy: {
    img: "../img/icons/copyCat1.jpeg",
    text: "Clippy",
  },
};

const quickNav = (config) => {
  return `

    <div id="quickNav" class="d-sm-flex d-none flex-column gap-1 ">

    <button class="btn btn-primary d-md-flex d-none align-items-center gap-2" id="aiAssistant" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
        <img src = ${config.ai.img}  alt="Ai-Assistant">
        <p class="mb-0">${config.ai.text}
            </button>

        <button type="button" class="btn btn-primary btn btn-primary d-md-flex d-none align-items-center gap-2" data-bs-toggle="offcanvas" data-bs-target="#clippy" role="button" aria-controls="clippy"  >
                    <img    id="clippyNav" src=${config.clippy.img} alt="Clippy">
        <p class="mb-0">${config.clippy.text}
        </button>

    </div>


    `;
};

export const createQuickNav = (id, config) => {
  const target = document.querySelector(id);
  target.innerHTML += quickNav(config);
};
