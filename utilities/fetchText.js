export const fetchText = async () => {
    try {
        const response = await fetch('../data/text.json');
        if (!response.ok) {
            throw new Error('Netzwerkantwort war nicht ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Fehler beim Laden der JSON-Daten:', error);
    }
  };