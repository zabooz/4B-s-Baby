import { passwordEncoder } from "../scripts/encoder.js";


export async function aiApiCall(userContent,
    sysContent) {
  const url = "http://localhost:3001/";
  const [encodedPwd, key] = passwordEncoder(userContent);
  const content = sysContent;
  const urlPara = `${url}apiCall?pwd=${encodedPwd}&key=${key}&sysContent=${content}`;

  try {
    const response = await fetch(urlPara);
    if (!response.ok) {
      if (response.status === 429) {
        console.warn('Rate limit exceeded. No body returned.');
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    }
    let result =  await response.text();

    let formattedResult = result
    .split('. ') // split by period and space to keep sentences intact
    .map(sentence => `<p>${sentence.trim()}.</p>`) // wrap each sentence in a <p> tag
    .join(''); // join back into a single string

    return formattedResult;

  } catch (error) {
    console.error('Fetch error:', error);
    throw error; // Fehler weitergeben, damit der Aufrufer ihn verarbeiten kann
  }
}