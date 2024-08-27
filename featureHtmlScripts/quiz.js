const config = {
  pic1: "../img/psyTest/pic3.jpg",
  pic2: "../img/psyTest/pic2.jpg",
  pic3: "../img/psyTest/pic1.jpg",
  pic4: "../img/psyTest/pic4.jpg",
  pic5: "../img/psyTest/pic5.jpg",
  pic6: "../img/psyTest/pic6.jpg",

  frage1: {
    frage: "Was ist dir am wichtigsten?",
    antworten: [
      "Eine angenehme Temperatur",
      "Bequemlichkeit",
      "Selbstkenntnis",
      "Zeit",
    ],
  },
  frage2: {
    frage: "Welche Aktivität magst du am meisten?",
    antworten: [
      "Zeichnen",
      "Arbeiten mit den Händen",
      "Schauspielern",
      "Musik",
    ],
  },
  frage3: {
    frage: "Welche Lebensmittelgruppe spricht dich am meisten an?",
    antworten: [
      "Früchte & Gemüse",
      "Getränke",
      "Desserts",
      "Essen im Allgemeinen",
    ],
  },
  frage4: {
    frage: "Was bevorzugst du?",
    antworten: ["Instrumente", "Blumen", "Fahrzeuge", "Werkzeuge"],
  },
  frage5: {
    frage: "Was spricht dich am meisten an?",
    antworten: [
      "Hunde und Katzen",
      "Drachen und Einhörner",
      "Elfen und Zwerge",
      "Nichts davon",
    ],
  },
  letzteFolie: {
    frage: "Vielen Dank für deine Teilnahme!",
    antwort: "Bitte klick auf den Button, um deine Antworten zu senden.",
  },
};

const quiz = (config) => {
  return `<div id="questionCarousel" class="carousel slide w-100 mx-auto mt-5">
        <div class="carousel-indicators custom-indicators">
            <button type="button" data-bs-target="#questionCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#questionCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#questionCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#questionCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#questionCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#questionCarousel" data-bs-slide-to="5" aria-label="Slide 6"></button>
        </div>
        <div class="carousel-inner">
            <!-- Erste Folie -->
            <div class="carousel-item firstSlide active">
                <img src="${config.pic1}" class="d-block w-100" alt="Frage 1">
                <div class="carousel-caption d-flex flex-column bg align-items-center">
                    <h5>Frage 1: ${config.frage1.frage}</h5>
                    <div class="p-2 d-flex flex-column gap-2">
                        ${config.frage1.antworten
                          .map(
                            (antwort, index) => `
                            <div class="form-check d-flex gap-2">
                                <input class="form-check-input" type="radio" name="question1" id="q1a${
                                  index + 1
                                }">
                                <label class="form-check-label" for="q1a${
                                  index + 1
                                }">${antwort}</label>
                            </div>
                        `
                          )
                          .join("")}
                    </div>
                </div>
            </div>
            <!-- Zweite bis fünfte Folie -->
            ${[config.pic2, config.pic3, config.pic4, config.pic5]
              .map(
                (pic, i) => `
            <div class="carousel-item">
                <img src="${pic}" class="d-block w-100" alt="Frage ${i + 2}">
                <div class="carousel-caption d-flex flex-column bg align-items-center">
                    <h5>Frage ${i + 2}: ${config[`frage${i + 2}`].frage}</h5>
                    <div class="p-2 d-flex flex-column gap-2">
                        ${config[`frage${i + 2}`].antworten
                          .map(
                            (antwort, index) => `
                            <div class="form-check d-flex gap-2">
                                <input class="form-check-input" type="radio" name="question${
                                  i + 2
                                }" id="q${i + 2}a${index + 1}">
                                <label class="form-check-label" for="q${
                                  i + 2
                                }a${index + 1}">${antwort}</label>
                            </div>
                        `
                          )
                          .join("")}
                    </div>
                </div>
            </div>`
              )
              .join("")}
            <!-- Letzte Folie -->
            <div class="carousel-item ">
                <img src="${config.pic6}" class="d-block w-100" alt="Danke">
                <div class="carousel-caption d-flex flex-column gap-4 align-items-center">
                    <h5>${config.letzteFolie.frage}</h5>
                    <p>${config.letzteFolie.antwort}</p>
                    <button class="btn btn-primary mb-4" id="submitButton">Antworten absenden</button>
                </div>
            </div>
        </div>
        <!-- Steuerungselemente -->
         <button id="prevBtn" class="carousel-control-prev" type="button" data-bs-target="#questionCarousel" data-bs-slide="prev" style="display: none;">
          <span class="carousel-control-prev-icon custom-arrow" aria-hidden="true"></span>
          <span class="visually-hidden">Zurück</span>
      </button>
      <button id="nextBtn" class="carousel-control-next " type="button" data-bs-target="#questionCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon custom-arrow" aria-hidden="true"></span>
          <span class="visually-hidden">Weiter</span>
      </button>
    </div>
      <div class="tableWrapper w-75">
    <table class="table mt-2" id="stats1">
      <thead>
        <tr>
          <th scope="col" class="text-center">#</th>
          <th scope="col"class="text-center">Username</th>
          <th scope="col" class="text-center">Begriff</th>
          <th scope="col" class="text-center">Eigenschaften</th>
        </tr>
      </thead>
      <tbody id="statsBody1" class="text-center" ></tbody>
    </table>
  </div>`;
};

document.getElementById("quiz").innerHTML += quiz(config);
