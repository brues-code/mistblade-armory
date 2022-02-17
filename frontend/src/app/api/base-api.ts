import { Endpoints } from 'enums';

function fetchFromTauri<U>(url: Endpoints, params: string): Promise<U> {
    return fetch(`${url}/${params}`).then(response => {
        if (response.ok) {
            return response.json() as Promise<U>;
        }
        throw response.statusText;
    });
}

export default fetchFromTauri;
