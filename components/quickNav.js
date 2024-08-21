export const configQuickNavIndex = {
  ai: {
    img: "./img/quickNav/ai.webp",
    text: "Ai-Assistant",
  },
  clippy: {
    img: "./img/quickNav/clippy.jpeg",
    text: "Clippy",
  },
};
export const configQuickNavFeature = {
  ai: {
    img: "../img/quickNav/ai.webp",
    text: "Ai-Assistant",
  },
  clippy: {
    img: "../img/quickNav/clippy.jpeg",
    text: "Clippy",
  },
};

const quickNav = (config) => {
  return `

    <div id="quickNav" class="d-flex flex-column gap-1">

    <button class="btn btn-primary d-flex align-items-center gap-2" id="aiAssistant" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
        <img src = ${config.ai.img} >
        <p class="mb-0">${config.ai.text}
            </button>

        <button type="button" class="btn btn-primary btn btn-primary d-flex align-items-center gap-2" data-bs-toggle="modal" data-bs-target="#exampleModal" id="clipBoardBtn">
                    <img src = ${config.clippy.img}>
        <p class="mb-0">${config.clippy.text}
        </button

    </div>


    `;
};

export const createQuickNav = (id,config) => {
  const target = document.querySelector(id);

  target.innerHTML += quickNav(config);
};
