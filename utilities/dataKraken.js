import { data } from "../data/data.js";

const baseUrl = data.baseUrl;

export async function dataKrakenTakes(data) {
  if(!localStorage.getItem("passwordplayground")) return
  try {
    const response = await fetch(`${baseUrl}/dataKrakenTakes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${localStorage.getItem("passwordplayground")}`,
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      // hier könnte was stehen
    } else {
      console.error("Fehler beim Senden der Daten:", await response.text());
    }
  } catch (error) {
    console.error("Fehler beim Senden der Anfrage:", error);
  }
}

export async function dataKrakenGives(col) {
  if(!localStorage.getItem("passwordplayground")) return
  let data;


  try {
    const response = await fetch(`${baseUrl}/dataKrakenGives?col=${col}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${localStorage.getItem("passwordplayground")}`,
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
  if(!localStorage.getItem("passwordplayground")) return
  let data;


  try {
    const response = await fetch(`${baseUrl}/dataKrakenTrades`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("passwordplayground")}`,
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

export const dataKrakenBestow = async (col) => {

  try {
    const response = await fetch(`${baseUrl}/dataKrakenBestow?col=${col}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${localStorage.getItem("passwordplayground")}`,
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