import fetch from "node-fetch";
import { Realm, Endpoints } from "../../enums";
import { ApiResponse } from "api-response";

function fetchFromTauri<T, U>(url: Endpoints, params: T) {
  return fetch(
    "https://characters-api.stormforge.gg/v1/?apikey=" + process.env.APIKEY,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        url,
        secret: process.env.APISECRET,
        params: {
          r: Realm.Mistblade,
          ...params
        }
      })
    }
  )
    .then(response => response.json() as Promise<ApiResponse<U>>)
    .then(result => result.response)
    .catch(console.error);
}

export default fetchFromTauri;
