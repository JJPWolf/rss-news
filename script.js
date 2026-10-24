const rssUrl = 'https://www.20minutes.fr/feeds/rss-une.xml';

fetch(rssUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
        }
        return response.text();
    })
    .then(str => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(str, 'text/xml');

        // Exemple pour afficher les titres
        const items = xmlDoc.querySelectorAll('item');
        items.forEach(item => {
            console.log(item.querySelector('title').textContent);
        });
    })
    .catch(error => console.error('Erreur :', error));