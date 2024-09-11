export function getColorFromStrength(strength) {
  // Begrenzungen für den Stärke-Wert
  const minStrength = 0; // Minimum Stärke-Wert
  const maxStrength = 100; // Maximum Stärke-Wert

  // Berechne den Prozentsatz
  const percentage = (strength - minStrength) / (maxStrength - minStrength);

  // Stelle sicher, dass der Prozentsatz im Bereich von 0 bis 1 liegt
  const clampedPercentage = Math.max(0, Math.min(1, percentage));

  // Definiere die Farben in der Reihenfolge des Farbverlaufs
  const colors = [
    { r: 91, g: 0, b: 25 }, // #5b0019
    { r: 115, g: 51, b: 12 }, // #73330c
    { r: 120, g: 97, b: 10 }, // #78610a
    { r: 105, g: 142, b: 55 }, // #698e37
    { r: 50, g: 186, b: 128 }, // #32ba80
  ];

  // Berechne den Index der aktuellen Farbbereiche
  const colorIndex = clampedPercentage * (colors.length - 1);
  const lowerIndex = Math.floor(colorIndex);
  const upperIndex = Math.ceil(colorIndex);

  // Wenn genau am Anfang oder Ende, gib die entsprechende Farbe zurück
  if (lowerIndex === upperIndex) {
    const color = colors[lowerIndex];
    return `rgb(${color.r}, ${color.g}, ${color.b})`;
  }

  // Interpoliere die Farben zwischen den beiden Indizes
  const lowerColor = colors[lowerIndex];
  const upperColor = colors[upperIndex];
  const mix = colorIndex - lowerIndex;

  const r = Math.round(lowerColor.r + (upperColor.r - lowerColor.r) * mix);
  const g = Math.round(lowerColor.g + (upperColor.g - lowerColor.g) * mix);
  const b = Math.round(lowerColor.b + (upperColor.b - lowerColor.b) * mix);

  return `rgb(${r}, ${g}, ${b})`;
}
