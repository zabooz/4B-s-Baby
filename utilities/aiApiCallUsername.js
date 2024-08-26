


export async function aiApiCallUsername(userContent, sysContent) {
  const baseUrl = "https://kgg8gggo0c08oc8wcw0oco00.coolify.machma.app/";
  const [adj1, adj2, noun] = userContent
  const urlPara = `${baseUrl}apiCallUsername?adj1=${encodeURIComponent(
  adj1
)}&adj2=${encodeURIComponent(adj2)}&noun=${encodeURIComponent(
  noun
)}&sysContent=${encodeURIComponent(sysContent)}`;

  try {
    const response = await fetch(urlPara);
    if (!response.ok) {
      if (response.status === 429) {
        console.warn("Rate limit exceeded. No body returned.");
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    }
    let result = await response.text();
    return result

  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
}
