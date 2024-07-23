// translations.js

export async function loadTranslations() {
    try {
        const response = await fetch('../data/translations.json'); // Replace with your actual path
        if (!response.ok) {
            throw new Error('Failed to load translations');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error loading translations:', error);
        return null;
    }
}

export function getUserLanguage() {
    const language = navigator.language || navigator.userLanguage;
    return language.split('-')[0]; // Extract the primary language code (e.g., 'en' from 'en-US')
}

export function translatePage(translations, language) {
    // Navbar
    document.getElementById('go-to-top').textContent = translations.navbar.home[language];
    document.getElementById('go-to-test').textContent = translations.navbar.test[language];
    document.getElementById('go-to-convert').textContent = translations.navbar.convert[language];
    document.getElementById('go-to-generate').textContent = translations.navbar.generate[language];
    // document.getElementById('flag').className = "flag-icon " + language + "-icon";
    // Header
    document.querySelector('#headerText h1').textContent = translations.header.title[language];
    document.querySelector('#headerText p').textContent = translations.header.description[language];

    // Password Safety Heading
    document.querySelector('#passwordSafetyHeading h2').textContent = translations.passwordSafetyHeading.title[language];
    document.querySelector('#passwordSafetyHeading p').textContent = translations.passwordSafetyHeading.description[language];
    document.querySelector('#passwordSafetyHeading h4:nth-of-type(1)').textContent = translations.passwordSafetyHeading.testingTitle[language];
    document.querySelector('#passwordSafetyHeading p:nth-of-type(2)').textContent = translations.passwordSafetyHeading.testingDescription[language];
    document.querySelector('#passwordSafetyHeading h4:nth-of-type(2)').textContent = translations.passwordSafetyHeading.excaliburTitle[language];
    document.querySelector('#passwordSafetyHeading p:nth-of-type(3)').textContent = translations.passwordSafetyHeading.excaliburDescription[language];
    document.querySelector('#passwordSafetyHeading h4:nth-of-type(3)').textContent = translations.passwordSafetyHeading.importanceTitle[language];
    document.querySelector('#passwordSafetyHeading p:nth-of-type(4)').textContent = translations.passwordSafetyHeading.importanceDescription[language];

    // Brute Force App
    document.querySelector('#bruteForceApp h3').textContent = translations.bruteForceApp.title[language];
    document.querySelector('#bruteForceApp p:nth-of-type(1)').textContent = translations.bruteForceApp.description1[language];
    document.querySelector('#bruteForceApp p:nth-of-type(2)').textContent = translations.bruteForceApp.description2[language];
    document.getElementById('userPwdInput').placeholder = translations.bruteForceApp.placeholder[language];
    document.querySelector('#bruteMode option[value="simple"]').textContent = translations.bruteForceApp.simpleMode[language];
    document.querySelector('#bruteMode option[value="library"]').textContent = translations.bruteForceApp.libraryMode[language];
    document.querySelector('#bruteMode option[value="hybrid"]').textContent = translations.bruteForceApp.hybridMode[language];
    document.getElementById('startBrute').textContent = translations.bruteForceApp.startButton[language];
    document.getElementById('stopBrute').textContent = translations.bruteForceApp.stopButton[language];
    document.querySelector('#statsHeading th:nth-of-type(1)').textContent = translations.bruteForceApp.statsHeading.password[language];
    document.querySelector('#statsHeading th:nth-of-type(2)').textContent = translations.bruteForceApp.statsHeading.attempts[language];
    document.querySelector('#statsHeading th:nth-of-type(3)').textContent = translations.bruteForceApp.statsHeading.mode[language];
    document.querySelector('#statsHeading th:nth-of-type(4)').textContent = translations.bruteForceApp.statsHeading.time[language];

    // Password Excalibur
    document.querySelector('#passwordStrengthCalc h3').textContent = translations.passwordStrengthCalc.title[language];
    document.querySelector('#passwordStrengthCalc p:nth-of-type(1)').textContent = translations.passwordStrengthCalc.description1[language];
    document.querySelector('#passwordStrengthCalc p:nth-of-type(2)').textContent = translations.passwordStrengthCalc.description2[language];
    document.getElementById('strengthInput').placeholder = translations.passwordStrengthCalc.placeholder[language];
    document.getElementById('calcStrengthBtn').textContent = translations.passwordStrengthCalc.testButton[language];
    document.getElementById('strengthResult').textContent = translations.passwordStrengthCalc.result[language];

    // Password Creation Heading
    document.querySelector('#passwordCreationHeading h2').textContent = translations.passwordCreationHeading.title[language];
    document.querySelector('#passwordCreationHeading p').textContent = translations.passwordCreationHeading.description[language];
    document.querySelector('#passwordCreationHeading h3:nth-of-type(1)').textContent = translations.passwordCreationHeading.characteristicsTitle[language];
    document.querySelector('#passwordCreationHeading p:nth-of-type(2)').textContent = translations.passwordCreationHeading.characteristicsDescription[language];
    document.querySelector('#passwordCreationHeading h3:nth-of-type(2)').textContent = translations.passwordCreationHeading.stepsTitle[language];
    document.querySelector('#passwordCreationHeading p:nth-of-type(3)').textContent = translations.passwordCreationHeading.stepsDescription[language];
    document.querySelector('#passwordCreationHeading h3:nth-of-type(3)').textContent = translations.passwordCreationHeading.managementTitle[language];
    document.querySelector('#passwordCreationHeading p:nth-of-type(4)').textContent = translations.passwordCreationHeading.managementDescription[language];

    // Rune Translator
    document.querySelector('#converterSelector h3').textContent = translations.runeTranslatorApp.title[language];
    document.querySelector('#converterSelector p:nth-of-type(1)').textContent = translations.runeTranslatorApp.description1[language];
    document.querySelector('#converterSelector p:nth-of-type(2)').textContent = translations.runeTranslatorApp.description2[language];
    document.getElementById('passwordInput').placeholder = translations.runeTranslatorApp.placeholder[language];
    document.querySelector('#converterSelect option[value="leetSimple"]').textContent = translations.runeTranslatorApp.simpleLeet[language];
    document.querySelector('#converterSelect option[value="leetAdvanced"]').textContent = translations.runeTranslatorApp.advancedLeet[language];
    document.querySelector('#converterSelect option[value="leetComplicated"]').textContent = translations.runeTranslatorApp.complicatedLeet[language];
    document.getElementById('convertBtn').textContent = translations.runeTranslatorApp.convertButton[language];
    document.getElementById('newPassword').textContent = translations.runeTranslatorApp.runeword[language];

    // Picture Magic
    document.querySelector('#pictureMagic h3').textContent = translations.pictureMagicApp.title[language];
    document.querySelector('#pictureMagic p:nth-of-type(1)').textContent = translations.pictureMagicApp.description1[language];
    document.querySelector('#pictureMagic p:nth-of-type(2)').textContent = translations.pictureMagicApp.description2[language];
    document.getElementById('uploadLabel').textContent = translations.pictureMagicApp.uploadLabel[language];
    document.getElementById('pictureConvertBtn').textContent = translations.pictureMagicApp.convertButton[language];
    document.getElementById('picResult').textContent = translations.pictureMagicApp.result[language];

    // Username Creation Heading
    document.querySelector('#usernameCreationHeading h2').textContent = translations.usernameCreationHeading.title[language];
    document.querySelector('#usernameCreationHeading p').textContent = translations.usernameCreationHeading.description[language];
    document.querySelector('#usernameCreationHeading h3:nth-of-type(1)').textContent = translations.usernameCreationHeading.tipsTitle[language];
    document.querySelector('#usernameCreationHeading p:nth-of-type(2)').textContent = translations.usernameCreationHeading.tipsDescription[language];
    document.querySelector('#usernameCreationHeading h3:nth-of-type(2)').textContent = translations.usernameCreationHeading.generatorsTitle[language];
    document.querySelector('#usernameCreationHeading p:nth-of-type(3)').textContent = translations.usernameCreationHeading.generatorsDescription[language];

    // Identity Wizardry
    document.querySelector('#pwdGenDiv h3').textContent = translations.identityWizardryApp.title[language];
    document.querySelector('#pwdGenDiv p:nth-of-type(1)').textContent = translations.identityWizardryApp.description1[language];
    document.querySelector('#pwdGenDiv p:nth-of-type(2)').textContent = translations.identityWizardryApp.description2[language];
    document.querySelector('#wizardInput2 label:nth-of-type(1)').textContent = translations.identityWizardryApp.firstAdjectiveLabel[language];
    document.querySelector('#wizardInput2 label:nth-of-type(2)').textContent = translations.identityWizardryApp.secondAdjectiveLabel[language];
    document.querySelector('#wizardInput3 label:nth-of-type(1)').textContent = translations.identityWizardryApp.nounLabel[language];
    document.querySelector('#adjective1 option[value="random"]').textContent = translations.identityWizardryApp.random[language];
    document.querySelector('#adjective1 option[value="shapes"]').textContent = translations.identityWizardryApp.shapes[language];
    document.querySelector('#adjective1 option[value="colors"]').textContent = translations.identityWizardryApp.colors[language];
    document.querySelector('#adjective1 option[value="textures"]').textContent = translations.identityWizardryApp.textures[language];
    document.querySelector('#adjective1 option[value="sizes"]').textContent = translations.identityWizardryApp.sizes[language];
    document.querySelector('#adjective1 option[value="tastes"]').textContent = translations.identityWizardryApp.tastes[language];
    document.querySelector('#adjective1 option[value="emotions"]').textContent = translations.identityWizardryApp.emotions[language];
    document.querySelector('#adjective1 option[value="sounds"]').textContent = translations.identityWizardryApp.sounds[language];
    document.querySelector('#adjective1 option[value="temperatures"]').textContent = translations.identityWizardryApp.temperatures[language];
    document.querySelector('#adjective1 option[value="speeds"]').textContent = translations.identityWizardryApp.speeds[language];
    document.querySelector('#adjective1 option[value="qualities"]').textContent = translations.identityWizardryApp.qualities[language];
    document.querySelector('#adjective1 option[value="weatherTypes"]').textContent = translations.identityWizardryApp.weatherTypes[language];
    document.querySelector('#adjective2 option[value="random"]').textContent = translations.identityWizardryApp.random[language];
    document.querySelector('#adjective2 option[value="shapes"]').textContent = translations.identityWizardryApp.shapes[language];
    document.querySelector('#adjective2 option[value="colors"]').textContent = translations.identityWizardryApp.colors[language];
    document.querySelector('#adjective2 option[value="textures"]').textContent = translations.identityWizardryApp.textures[language];
    document.querySelector('#adjective2 option[value="sizes"]').textContent = translations.identityWizardryApp.sizes[language];
    document.querySelector('#adjective2 option[value="tastes"]').textContent = translations.identityWizardryApp.tastes[language];
    document.querySelector('#adjective2 option[value="emotions"]').textContent = translations.identityWizardryApp.emotions[language];
    document.querySelector('#adjective2 option[value="sounds"]').textContent = translations.identityWizardryApp.sounds[language];
    document.querySelector('#adjective2 option[value="temperatures"]').textContent = translations.identityWizardryApp.temperatures[language];
    document.querySelector('#adjective2 option[value="speeds"]').textContent = translations.identityWizardryApp.speeds[language];
    document.querySelector('#adjective2 option[value="qualities"]').textContent = translations.identityWizardryApp.qualities[language];
    document.querySelector('#adjective2 option[value="weatherTypes"]').textContent = translations.identityWizardryApp.weatherTypes[language];
    document.querySelector('#noun option[value="random"]').textContent = translations.identityWizardryApp.random[language];
    document.querySelector('#noun option[value="instruments"]').textContent = translations.identityWizardryApp.instruments[language];
    document.querySelector('#noun option[value="fruits"]').textContent = translations.identityWizardryApp.fruits[language];
    document.querySelector('#noun option[value="vegetables"]').textContent = translations.identityWizardryApp.vegetables[language];
    document.querySelector('#noun option[value="animals"]').textContent = translations.identityWizardryApp.animals[language];
    document.querySelector('#noun option[value="fantasyCreatures"]').textContent = translations.identityWizardryApp.fantasyCreatures[language];
    document.querySelector('#noun option[value="rpgClasses"]').textContent = translations.identityWizardryApp.rpgClasses[language];
    document.querySelector('#noun option[value="fantasyRaces"]').textContent = translations.identityWizardryApp.fantasyRaces[language];
    document.querySelector('#noun option[value="occupations"]').textContent = translations.identityWizardryApp.occupations[language];
    document.querySelector('#noun option[value="vehicles"]').textContent = translations.identityWizardryApp.vehicles[language];
    document.querySelector('#noun option[value="food"]').textContent = translations.identityWizardryApp.food[language];
    document.querySelector('#noun option[value="tools"]').textContent = translations.identityWizardryApp.tools[language];
    document.querySelector('#noun option[value="beverages"]').textContent = translations.identityWizardryApp.beverages[language];
    document.querySelector('#noun option[value="clothingItems"]').textContent = translations.identityWizardryApp.clothingItems[language];
    document.querySelector('#noun option[value="bodyParts"]').textContent = translations.identityWizardryApp.bodyParts[language];
    document.querySelector('#noun option[value="flowers"]').textContent = translations.identityWizardryApp.flowers[language];
    document.querySelector('#noun option[value="desserts"]').textContent = translations.identityWizardryApp.desserts[language];
    document.getElementById('userGeneratorBtn').textContent = translations.identityWizardryApp.generateButton[language];
    document.getElementById('newUser').textContent = translations.identityWizardryApp.newUsername[language];

    // Glyph Sorcery
    document.querySelector('#glyphSorcery h3').textContent = translations.glyphSorceryApp.title[language];
    document.querySelector('#glyphSorcery p').textContent = translations.glyphSorceryApp.description[language];
    document.querySelector('#startPwGenDiv label').textContent = translations.glyphSorceryApp.lengthLabel[language];
    document.getElementById('rdmPwdBtn').textContent = translations.glyphSorceryApp.generateButton[language];
    document.getElementById('generatedPassword').textContent = translations.glyphSorceryApp.result[language];
}

export async function initTranslation() {
    const translations = await loadTranslations();
    const language = getUserLanguage();
    translatePage(translations, language);
    // Add event listener for language switcher
    const languageSwitcherDiv = document.getElementById('languageSwitcherDiv');
    languageSwitcherDiv.addEventListener('change', (event) => {
     
        const selectedLanguage = event.target.value;
        translatePage(translations, selectedLanguage);
    });
}


export const translations = await loadTranslations();