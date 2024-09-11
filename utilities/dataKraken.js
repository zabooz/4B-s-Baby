import { data } from "../data/data.js";

const baseUrl = data.baseUrl;

export async function dataKrakenTakes(data) {
  try {
    const response = await fetch(`${baseUrl}/dataKrakenTakes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const result = await response.json();
      console.log("Daten erfolgreich gesendet:", result);
    } else {
      console.error("Fehler beim Senden der Daten:", await response.text());
    }
  } catch (error) {
    console.error("Fehler beim Senden der Anfrage:", error);
  }
}

export async function dataKrakenGives() {
  let data;
  const token = localStorage.getItem("passwordplayground");

  try {
    const response = await fetch(`${baseUrl}/dataKrakenGives`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    });

    if (response.ok) {
      data = await response.json();
    }
  } catch (error) {
    console.error("Fehler beim Senden der Anfrage:", error);
  }

  return data;
}

export async function dataKrakenTrades(key, value,) {
  let data;
  const token = localStorage.getItem("passwordplayground");

  try {
    const response = await fetch(`${baseUrl}/dataKrakenTrades`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ key: key, value: value }),
    });

    if (response.ok) {
      data = await response.json();
    }
  } catch (error) {
    console.error("Fehler beim Senden der Anfrage:", error);
  }

  return data;
}

export const dataKrakenBestow = async () => {
  const token = localStorage.getItem("passwordplayground");
  try {
    const response = await fetch(`${baseUrl}/dataKrakenBestow`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${token}`,
      }
    });


    if (response.ok) {
      const result = await response.json();
      return result
    } else {
      console.error("Fehler beim Senden der Daten:", await response.text());
    }

  } catch (error) {
    console.error("Fehler beim Senden der Anfrage:", error);
  }

};