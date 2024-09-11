export function setWithExpiry(key, value, ttl) {
    const now = new Date();
  
    // Das Item, das gespeichert wird, besteht aus dem Wert und dem Ablaufzeitpunkt (in Millisekunden)
    const item = {
      value: value,
      expiry: now.getTime() + ttl, // ttl ist die Zeit in Millisekunden (z.B. 60000 für 1 Minute)
    };
  
    sessionStorage.setItem(key, JSON.stringify(item));
  }
  export function getWithExpiry(key) {
    const itemStr = sessionStorage.getItem(key);
  
    // Wenn das Item nicht existiert, gibt es `null` zurück
    if (!itemStr) {
      return null;
    }
  
    const item = JSON.parse(itemStr);
    const now = new Date();
  
    // Wenn das Zeitlimit abgelaufen ist, lösche das Item und gib `null` zurück
    if (now.getTime() > item.expiry) {
      sessionStorage.removeItem(key);
      return null;
    }
  
    return item.value;
  }
  