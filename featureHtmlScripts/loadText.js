// Funktion zum Einfügen von Text in ein HTML-Element
const loadText = (id, text) => {
    const ele = document.getElementById(id);
    if (ele) {
        ele.innerHTML = text;
    }
};

// Funktion zum Laden der JSON-Daten
const fetchBruteForceText = async () => {
    try {
        const response = await fetch('/data/bruteforceText.json');
        if (!response.ok) {
            throw new Error('Netzwerkantwort war nicht ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Fehler beim Laden der JSON-Daten:', error);
    }
};

// JSON-Daten laden und in das <div> Element einfügen

export const start  = (id,text) => {
    
    fetchBruteForceText().then(data => {

        const content =  data[text]

        if (data) {
            loadText(id, `
                <p>${content.replace(/\n/g, '<br>')}</p>
            `);
        }
    });



}