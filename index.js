var DOMParser = require('xmldom').DOMParser;
const fs = require('fs');

var doc = new DOMParser().parseFromString(
    fs.readFileSync('Sumario_es.rss').toString()
    ,'text/xml');

var channels = doc.getElementsByTagName("channel");

for (let i = 0; i < channels.length; i++) {
    var items = channels[i].getElementsByTagName("item");
    for (let j = 0; j < items.length; j++) {
        const noticia = items[j];
        
        const title = noticia.getElementsByTagName("title")[0];
        if (title) {
            console.log(title.textContent);
        }

        const link = noticia.getElementsByTagName("link")[0];
        if (link) {
            console.log(link.textContent);
        }
    }
}

