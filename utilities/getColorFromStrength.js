export function getColorFromStrength(strength) {
    // Begrenzungen für den Stärke-Wert
    const minStrength = 0; // Minimum Stärke-Wert
    const maxStrength = 100; // Maximum Stärke-Wert (z.B. maximal 100 Punkte)
  
    // Berechne den Prozentsatz
    const percentage = (strength - minStrength) / (maxStrength - minStrength);
    
    // Stelle sicher, dass der Prozentsatz im Bereich von 0 bis 1 liegt
    const clampedPercentage = Math.max(0, Math.min(1, percentage));
  
    // Berechne den Rot- und Grün-Wert
    const red = Math.round(255 * (1 - clampedPercentage));
    const green = Math.round(255 * clampedPercentage);
  
    // Erzeuge die Farbe im Hex-Format
    return `rgb(${red}, ${green}, 0)`; // Rot zu Grün, kein Blau
  }
  