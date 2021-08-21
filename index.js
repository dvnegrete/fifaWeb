const baseUrl =  "https://www.easports.com/fifa/ultimate-team/api/fut/item";

const appNode = document.querySelector("#mainPrincipal");


//web api
//conectarnos al server
window
    .fetch(baseUrl)
    //procesar la respuesta y convertirla en JSON    
    .then((respuesta) => respuesta.json())
    //JSON -> DATA -> Renderizar info browser
    .then((responseJSON) => {
        //const todosLosItems = [];
        responseJSON.data.items[0].forEach((element) => {            
            //crear y agregar imagen
            const imagen = document.createElement("img");
            imagen.src = `${baseUrl}${element.image}`;

            //crear y agregar titulo
            const commonName = document.createElement("h4");
            commonName.textContent = element.commonName;
                        
            //crear y agregar precio
            const price = document.createElement("div");
            price.textContent = formatPrice(element.price);
            //price.textContent = element.price;
            
            
            const container = document.createElement("div");
            container.append(imagen, title, price);
            //asi agregamos todos dentro de un contenedor

            todosLosItems.push(container);
        
        });

        appNode.append(...todosLosItems);
            //este contenedor que entre en el body container
    });
