import { eventBinding } from "../index.js";
import { landingPageScripts } from "../contentScripts/landingPageScripts.js";

const  landingPage = () => {


            return `
            
    <header class="w-100 d-flex flex-column pt-0 pt-lg-3 justify-content-center align-items-center">

      <div id="landingPage" class="d-flex flex-column flex-lg-row pt-lg-5 pt-0 w-100 align-items-center justify-content-center">
        <img  id="padlockLogoTop" src="./img/landingPage/padlock.svg" class=" d-lg-none" alt="padlock Logo">
        <div id="landingLeftSide" class=" w-50 d-flex flex-column  justify-content-around gap-3 gap-lg-4">
          <div id="siteName" class="montserrat-font-header  text-center text-lg-start " >
            <p id="siteNameTextTop" class="notranslate" >Password</p>
            <p id="siteNameTextBottom" class="notranslate">Playground</p>
          </div>
          <div class=" mb-1 mb-lg-5 d-flex flex-column justify-content-between gap-4 text-center text-lg-start">
            <p id="leadText" class="leadFont">Mach Schluss mit langweiligen Passwörtern und Namen!</p>
            <p id="subText" class="subText text-muted">Optimiere mit unseren Tools deine Passwörter und Benutzernamen. Teste ihre Stärke, erschaffe neue und sichere Optionen und finde den perfekten Online-Namen.</p>
          </div>
          <p id="exploreText" class="text-muted">Entdecke jetzt, wie einfach es ist, deine Sicherheit zu erhöhen!</p>
        </div>
        <div id="landingRightSide" class="d-none d-lg-block"  >
          <img  id="padlockLogo" src="./img/landingPage/padlock.svg" alt="padlock Logo">
        </div>
      </div>
      <div id="scrollArrowBox" class="mt-3">
        <button  id="scrollIntoViewBtn" >
          <img id="scrollArrow" src="./img/landingPage/arrow-pointing.svg" alt="scrollArrow" class="img-fluid mb-4 ">
      </button>

      </div>




    </header>
    <div id="scrollIntoView" ></div>

    <main class="w-100 d-flex  pt-5 mt-5 pt-lg-0 mt-lg-0 justify-content-center align-items-center" id="langingPageMain">
      <section  class=" w-100 bounceScroll">
        <div class="row mt-0 row-cols-1 row-cols-lg-3 g-5 g-xl-5 ">
          <div class="col mt-5 mt-lg-0 ">
            <div class="card mx-auto box-shadow p-4">
              <img
                src="./img/landingPage/password.jpg"
                class="card-img-top"
                alt="picture Password Generating"
              />
              <div class="card-body pb-0 d-flex flex-column ">
                <h5 class="card-title text-center mb-3 ">ERSTELLE</h5>
                <h6 class="card-subtitle text-center mb-4">
                  ein sicheres Passwort
                </h6>
                <p class="card-text mb-5">
                  Nutze unsere drei Tools, um das ideale Passwort zu generieren:
                  <span><b>Picture Magic</b></span> verwandelt Bilder in
                  Passwörter, <span><b>Rune Translator</b></span> konvertiert
                  Texte in Leetspeak und
                  <span><b>GlyphSorcery</b></span> erstellt zufällige, sichere
                  Passwörter.
                </p>
<button class="btn btn-primary mt-auto mb-3 mx-auto subText border-0 w-75" href="#" data-function="createPasswordGeneratingHTML">Erstelle Passwort</button>

              </div>
            </div>
          </div>
          <div class="col mt-5 mt-lg-0">
            <div class="card mx-auto box-shadow p-4">
              <img
                src="./img/landingPage/bruteforce.jpg"
                class="card-img-top"
                alt="picture testing"
              />
              <div class="card-body pb-0 d-flex flex-column">
                <h5 class="card-title text-center mb-3">TESTE</h5>
                <h6 class="card-subtitle text-center mb-4 ">
                  die Stärke deines Passworts
                </h6>
                <p class="card-text s mb-5">
                  Verwende unser Bewertungstool <span><b>Excalibur</b></span
                  >, um die Stärke deines Passworts zu testen und simuliere
                  Brute-Force-Angriffe mit <span><b>Mojo</b></span
                  >, um zu sehen, wie lange es dauern würde, bis dein Passwort
                  geknackt wird.
                </p>
<button class="btn btn-primary subText mt-auto mb-3 mx-auto btn-lg border-0 w-75" data-function="createTestingPasswordHTML">Teste Passwort</button>

              </div>
            </div>
          </div>
          <div class="col mt-5 mt-lg-0">
            <div class="card mx-auto box-shadow p-4">
              <img
                src="./img/landingPage/username.jpg"
                class="card-img-top"
                alt="picture username"
              />
              <div class="card-body d-flex flex-column">
                <h5 class="card-title text-center mb-3">ERFINDE</h5>
                <h6 class="card-subtitle text-center mb-4  ">
                  deinen Online-Namen
                </h6>
                <p class="card-text  mb-5">
                  Nutze unsere beiden Tools, um den perfekten Benutzernamen zu
                  erstellen: <span><b>Identity Wizardry</b></span> generiert
                  zufällige Benutzernamen basierend auf deinen Parametern, und
                  <span><b>Mind Maestro</b></span> erstellt kreative Namen durch
                  ein unterhaltsames Quiz.
                </p>
<Button class="btn btn-primary subText mt-auto mb-3 mx-auto btn-lg border-0 w-75"  data-function="createUserGeneratingHTML">Erstelle Username</Button>

                
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
                     
            `;

}

export const createLandingPageHTML = (contentBox,style) => {

    const styleSheet = "../styles/indexStyle.css";
    style.setAttribute("href", styleSheet);
    sessionStorage.setItem("content","createLandingPageHTML")

    if(sessionStorage.getItem("landingPage")){
      contentBox.innerHTML = sessionStorage.getItem("landingPage")
    }else{
      contentBox.innerHTML = landingPage()
      sessionStorage.setItem("landingPage",contentBox.innerHTML)
    }
    eventBinding()
    landingPageScripts("scrollIntoViewBtn","scrollIntoView")
}