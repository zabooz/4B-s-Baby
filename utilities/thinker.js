


export const thinker = (target) => {
  const randomIndex = Math.floor(Math.random() * thinkWords.length);
  const verb = thinkWords[randomIndex];

  const content = `
                <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                <span role="status">${verb}</span>`;

  target.innerHTML = content;
};

export const thinkWords = [
  "denken",
  "rechnen",
  "überlegen",
  "analysieren",
  "planen",
  "abstrahieren",
  "interpretieren",
  "kalkulieren",
  "schätzen",
  "kombinieren",
  "spekulieren",
  "ermitteln",
  "nachdenken",
  "ableiten",
  "schlussfolgern",
  "reflektieren",
  "synthesieren",
];
