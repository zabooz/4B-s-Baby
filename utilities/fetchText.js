export const fetchText = async (path) => {


    try {
        const response = await fetch(path);
        if (!response.ok) {
            throw new Error('Netzwerkantwort war nicht ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Fehler beim Laden der JSON-Daten:', error);
    }
  };