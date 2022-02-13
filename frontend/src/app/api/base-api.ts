import { Endpoints } from "enums";

function fetchFromTauri<U>(url: Endpoints, params: string): Promise<U> {
  return fetch(`${url}/${params}`).then(
    response => response.json() as Promise<U>
  );
}

export default fetchFromTauri;
