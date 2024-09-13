import { createQuiz } from "../featureHtmlScripts/quiz.js";
import { createQuickNav } from "../components/quickNav.js";
import { userGeneratingScripts } from "../contentScripts/userGeneratingsScripts.js";
const createUserGenerating = () => {
  return ` <main id="userGenerating">
      <section id="sectionContainer" class="d-flex justify-content-center flex-column p-5 pb-1">
        <div
          id="identityWizard"
          class="card">
          <img src="../img/createName/identityWizard/backgroundImg.jpg" class="card-img" alt="Backgroundimage">
          <div class="card-img-overlay">
              <h3 class="card-title">Identity Wizard</h3>
          <p class="card-text">
            Erstelle einen einzigartigen Benutzernamen, indem du bis zu zwei
            Gruppen von Adjektiven und eine Gruppe von Substantiven auswählst,
            oder lass den Generator eine zufällige Kombination für dich
            erstellen.
          <br></br>
            Du kannst bis zu drei neue Namen in der Liste belassen. Pro-Tipp:
            Speichere die Namen, die dir besonders gut gefallen, mit Clippy!
          </p>
          <div
            id="wizardDiv"
            class="d-flex justify-content-center">
            <div id="wizardInput5">
            <div id="wizardInput1" class="gap-2">
              <label>Wähle bis  zu zwei Eigenschaften...</label>
              <select id="adjective1" class="form-control">
                <option value="random">Zufällig</option>
                <option value="shapes">Form</option>
                <option value="colors">Farbe</option>
                <option value="textures">Textur</option>
                <option value="sizes">Größe</option>
                <option value="ages">Alter</option>
                <option value="intensities">Intensität</option>
                <option value="tastes">Geschmack</option>
                <option value="emotions">Emotion</option>
                <option value="sounds">Klang</option>
                <option value="temperatures">Temperatur</option>
                <option value="speeds">Geschwindigkeit</option>
                <option value="qualities">Qualität</option>
                <option value="weatherTypes">Wetter</option>
                <option value="">-Keine-</option>
              </select>
              <select id="adjective2" class="form-control">
                <option value="random">Zufällig</option>
                <option value="shapes">Form</option>
                <option value="colors">Farbe</option>
                <option value="textures">Textur</option>
                <option value="sizes">Größe</option>
                <option value="ages">Alter</option>
                <option value="intensities">Intensität</option>
                <option value="tastes">Geschmack</option>
                <option value="emotions">Emotion</option>
                <option value="sounds">Klang</option>
                <option value="temperatures">Temperatur</option>
                <option value="speeds">Geschwindigkeit</option>
                <option value="qualities">Qualität</option>
                <option value="weatherTypes">Wetter</option>
                <option value="">-Keine-</option>
              </select>
            <label>...und einen Begriff:</label>
            <select name="pwdGen" id="noun" class="form-control">
              <option value="random">Zufällig</option>
              <option value="instruments">Instrument</option>
              <option value="fruits">Frucht</option>
              <option value="vegetables">Gemüse</option>
              <option value="animals">Tier</option>
              <option value="fantasyCreatures">Fantasiewesen</option>
              <option value="rpgClasses">Fantasy-Charakter</option>
              <option value="fantasyRaces">Fantasie-Volk</option>
              <option value="occupations">Beruf</option>
              <option value="vehicles">Fahrzeug</option>
              <option value="food">Essen</option>
              <option value="tools">Werkzeug</option>
              <option value="beverages">Getränk</option>
              <option value="clothingItems">Kleidungsstück</option>
              <option value="bodyParts">Körperteil</option>
              <option value="flowers">Blume</option>
              <option value="desserts">Dessert</option>
            </select>
              <button id="userGeneratorBtn" class="btn btn-primary">
                Los geht's!
              </button>
              <button id="aiUserGenBtn" class="btn btn-primary" style="display: none;">
                Überrasch mich!
              </button>
              <div class="form-check form-switch">
                <input
                  class="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="germanAiToggle"
                  style="display:none;"
                />
                <label
                  class="form-check-label"
                  for="germanAiToggle"
                  style="display:none;"
                  >Deutsch (Beta)</label
                >
              </div>
            </div>
          </div>
          <div id="wizardInput6">          
            <table id="stats">
              <tbody id="statsBody" class="w-100 text-start">
                <tr id="statsBodyRow0" style="display: none">
                  <td id="statsBodyArray0" class="text-start"></td>
                </tr>
                <tr id="statsBodyRow1" style="display: none">
                  <td id="statsBodyUsername0" class="text-start"></td>
                </tr>
                <tr id="statsBodyRow2" style="display: none">
                  <td id="statsBodyArray1" class="text-start"></td>
                </tr>
                 <tr id="statsBodyRow3" style="display: none">
                 <td id="statsBodyUsername1" class="text-start"></td>
                </tr>
                <tr id="statsBodyRow4" style="display: none">
                 <td id="statsBodyArray2" class="text-start"></td>
                </tr>
                <tr id="statsBodyRow5" style="display: none">
                 <td id="statsBodyUsername2" class="text-start"></td>
                </tr>
                <tr id="statsBodyRow6" style="display: none">
                 <td id="statsBodyArray3" class="text-start"></td>
                </tr>
                <tr id="statsBodyRow7" style="display: none">
                 <td id="statsBodyUsername3" class="text-start"></td>
                </tr>
              </tbody>
            </table>
            <button id="deleteTableBtn" class="btn btn-primary">Alle Löschen</button>
          </div>
        </div>
      </div>
    </div>
        <div id="mindMaestro" class="card">
          <img src="../img/createName/identityWizard/backgroundImg.jpg" class="card-img" alt="Backgroundimage">
          <div class="card-img-overlay">

          <h3 class="card-title">Mind Maestro</h3>
          <p class="card-text">
            Erstelle einen einzigartigen Benutzernamen, indem du bis zu zwei
            Gruppen von Eigenschaften und eine Gruppe von Begriffen auswählst
            oder lass den Generator eine zufällige Kombination für dich
            erstellen.
          </p>
          <div
            id="quiz"
            class="d-flex w-100 justify-content-center flex-column align-items-center"
          ></div>
          </div>
        </div>
      </section>

    </main>
    <div class="quickNav"></div>
  
    `;
};

export const createUserGeneratingHTML = (contentBox, style) => {
  const styleSheet = "./styles/userGenerating.css";
  style.setAttribute("href", styleSheet);
  sessionStorage.setItem("content", "createUserGeneratingHTML");

  if (sessionStorage.getItem("userGenerating")) {
    contentBox.innerHTML = sessionStorage.getItem("userGenerating");
  } else {
    contentBox.innerHTML = createUserGenerating();
    createQuiz();
    createQuickNav(".quickNav");
    sessionStorage.setItem("userGenerating", contentBox.innerHTML);
  }

  userGeneratingScripts();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
