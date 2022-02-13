import { Realm, Endpoints } from "enums";

function fetchFromTauri<T, U>(url: Endpoints, params: T) {
  return fetch(
    "v1/?apikey=" + process.env.REACT_APP_APIKEY,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        url,
        secret: process.env.REACT_APP_APISECRET,
        r: Realm.Mistblade,
        ...params
      })
    }
  )
    .then(response => response.json() as Promise<U>)
    .catch(console.error);
}

export default fetchFromTauri;
