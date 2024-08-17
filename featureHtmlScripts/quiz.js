const config = {
  pic1: "../img/psyTest/pic1.jpg",
  pic2: "../img/psyTest/pic2.jpg",
  pic3: "../img/psyTest/pic3.jpg",
  pic4: "../img/psyTest/pic4.jpg",
  pic5: "../img/psyTest/pic5.jpg",
  pic6: "../img/psyTest/pic6.jpg",

  frage1: {
    frage: "Welche Lebensmittelgruppe spricht Sie am meisten an?",
    antworten: [
      "Früchte & Gemüse",
      "Getränke",
      "Desserts",
      "Essen im Allgemeinen",
    ],
  },
  frage2: {
    frage: "Welche Aktivität mögen Sie am meisten?",
    antworten: [
      "Zeichnen",
      "Arbeiten mit den Händen",
      "Schauspielern",
      "Musik",
    ],
  },
  frage3: {
    frage: "Was ist Ihnen am wichtigsten?",
    antworten: [
      "Eine angenehme Temperatur",
      "Bequemlichkeit",
      "Selbstkenntnis",
      "Zeit",
    ],
  },
  frage4: {
    frage: "Was bevorzugen Sie?",
    antworten: ["Instrumente", "Blumen", "Fahrzeuge", "Werkzeuge"],
  },
  frage5: {
    frage: "Was interessiert Sie am meisten?",
    antworten: ["Tiere", "Fantasiewesen", "Fantasierassen", "Nichts davon"],
  },
  letzteFolie: {
    frage: "Vielen Dank für Ihre Teilnahme!",
    antwort: "Bitte klicken Sie auf den Button, um Ihre Antworten zu senden.",
  },
};

const quiz = (config) => {
  return `<div id="questionCarousel" class="carousel slide w-100 mx-auto mt-5">
      <div class="carousel-inner">
          <!-- Erste Folie -->
          <div class="carousel-item active">
              <img src="${config.pic1}" class="d-block w-100" alt="Frage 1">
              <div class="carousel-caption d-none d-md-block">
                  <h5>Frage 1: ${config.frage1.frage}</h5>
                  ${config.frage1.antworten
                    .map(
                      (antwort, index) => `
                      <div class="form-check">
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
          <!-- Zweite Folie -->
          <div class="carousel-item">
              <img src="${config.pic2}" class="d-block w-100" alt="Frage 2">
              <div class="carousel-caption d-none d-md-block">
                  <h5>Frage 2: ${config.frage2.frage}</h5>
                  ${config.frage2.antworten
                    .map(
                      (antwort, index) => `
                      <div class="form-check">
                          <input class="form-check-input" type="radio" name="question2" id="q2a${
                            index + 1
                          }">
                          <label class="form-check-label" for="q2a${
                            index + 1
                          }">${antwort}</label>
                      </div>
                  `
                    )
                    .join("")}
              </div>
          </div>
          <!-- Dritte Folie -->
          <div class="carousel-item">
              <img src="${config.pic3}" class="d-block w-100" alt="Frage 3">
              <div class="carousel-caption d-none d-md-block">
                  <h5>Frage 3: ${config.frage3.frage}</h5>
                  ${config.frage3.antworten
                    .map(
                      (antwort, index) => `
                      <div class="form-check">
                          <input class="form-check-input" type="radio" name="question3" id="q3a${
                            index + 1
                          }">
                          <label class="form-check-label" for="q3a${
                            index + 1
                          }">${antwort}</label>
                      </div>
                  `
                    )
                    .join("")}
              </div>
          </div>
          <!-- Vierte Folie -->
          <div class="carousel-item">
              <img src="${config.pic4}" class="d-block w-100" alt="Frage 4">
              <div class="carousel-caption d-none d-md-block">
                  <h5>Frage 4: ${config.frage4.frage}</h5>
                  ${config.frage4.antworten
                    .map(
                      (antwort, index) => `
                      <div class="form-check">
                          <input class="form-check-input" type="radio" name="question4" id="q4a${
                            index + 1
                          }">
                          <label class="form-check-label" for="q4a${
                            index + 1
                          }">${antwort}</label>
                      </div>
                  `
                    )
                    .join("")}
              </div>
          </div>
          <!-- Fünfte Folie -->
          <div class="carousel-item">
              <img src="${config.pic5}" class="d-block w-100" alt="Frage 5">
              <div class="carousel-caption d-none d-md-block">
                  <h5>Frage 5: ${config.frage5.frage}</h5>
                  ${config.frage5.antworten
                    .map(
                      (antwort, index) => `
                      <div class="form-check">
                          <input class="form-check-input" type="radio" name="question5" id="q5a${
                            index + 1
                          }">
                          <label class="form-check-label" for="q5a${
                            index + 1
                          }">${antwort}</label>
                      </div>
                  `
                    )
                    .join("")}
              </div>
          </div>
          <!-- Letzte Folie mit Absenden-Button -->
          <div class="carousel-item">
              <img src="${config.pic6}" class="d-block w-100" alt="Danke">
              <div class="carousel-caption d-none d-md-block">
                  <h5>${config.letzteFolie.frage}</h5>
                  <p>${config.letzteFolie.antwort}</p>
                  <button class="btn btn-primary" id="submitButton">Antworten absenden</button>
              </div>
          </div>
      </div>
      <!-- Steuerungselemente -->
      <button class="carousel-control-prev" type="button" data-bs-target="#questionCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Zurück</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#questionCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Weiter</span>
      </button>
  </div>`;
};

document.getElementById("quiz").innerHTML = quiz(config);
