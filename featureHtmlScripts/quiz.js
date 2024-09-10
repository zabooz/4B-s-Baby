const config = {
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
  return `<div id="questionCarousel" class="carousel slide w-100">
        <div class="carousel-inner d-flex">
            <!-- Erste Folie -->
            <div class="carousel-item firstSlide rounded active">
                <div class="carousel-caption d-flex flex-column align-items-center">
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
            ${[config.frage2, config.frage3, config.frage4, config.frage5]
              .map(
                (frage, i) => `
            <div class="carousel-item">
                <div class="carousel-caption d-flex flex-column bg align-items-center">
                    <h5>Frage ${i + 2}: ${frage.frage}</h5>
                    <div class="p-2 d-flex flex-column gap-2">
                        ${frage.antworten
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
            <div class="carousel-item">
                <div id="lastCaption" class="carousel-caption d-flex flex-column align-items-center">
                    <h5 id="captionH">${config.letzteFolie.frage}</h5>
                    <p id="captionPUsername">${config.letzteFolie.antwort}</p>
                    <button class="btn btn-primary mb-4" id="submitButton">Antworten absenden</button>
                </div>
            </div>
        </div>
        <!-- Steuerungselemente -->
         <button id="prevBtn" class="carousel-control-prev" type="button" data-bs-target="#questionCarousel" data-bs-slide="prev" style="display: none;">
          <span class="carousel-control-prev-icon custom-arrow" aria-hidden="true"></span>
          <span class="visually-hidden">Zurück</span>
      </button>
      <button id="nextBtn" class="carousel-control-next" type="button" data-bs-target="#questionCarousel" data-bs-slide="next" style="display: none;">
          <span class="carousel-control-next-icon custom-arrow" aria-hidden="true"></span>
          <span class="visually-hidden">Weiter</span>
      </button>
    </div>
`;
};

export const createQuiz = () => {


document.getElementById("quiz").innerHTML += quiz(config);

}
