const url = 'https://5fb23d0b87ed490016ea8a3e.mockapi.io/api/v1/media';

export async function getMedia() {

    try {
        let response = await fetch(url);
        let json = await response.json();
        return json.docs;

    } catch (error) {
        console.error(error);
    }
}