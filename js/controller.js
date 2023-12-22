class photo{

    loadContent= async () =>{
        console.log("loaded")

        const results = await fetch("https://picsum.photos/v2/list?page=2&limit=100",{
            cache: 'no-cache'
        })

        const data = await results.json()
        const parent = document.querySelector("section")
     

        /* itération pour l'affichage des noms */

        for(const index of data){
            parent.innerHTML+= `<ul id="collection">
            <img src="${index.download_url}" alt="${index.author}">
            <li>Author: ${index.author}</li>
            <li>${index.width} x ${index.height}</li>
            <li><a href="${index.url}" >photo</a></li>
            </ul>`;

            
            
                            
        }
    }
}

export const newPhoto = new photo();

 