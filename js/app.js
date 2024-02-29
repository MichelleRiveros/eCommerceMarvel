

const ContainerMarvel = document.getElementById('containerMarvel');


//Al metodo "addEventListener le pasamos como parametro el tipo de elemento 
//"DOMContentLoaded", que es tipo de evento que se dispara cuando el navegador
//ha terminado de cargar el HTML y ha construido el árbol DOM, pero antes de que 
//se carguen todos los recursos externos, como imágenes y scripts. 
//Una vez que el evento 'DOMContentLoaded' se dispara, es decir, cuando el navegador
//ha terminado de construir el árbol DOM, la función anónima que es asincrona (async)
//se ejecutará.

//Una promesa representa un valor que puede estar disponible ahora, en el futuro, o nunca.
//Cuando una función es declarada como async, significa que esa función 
//automáticamente devuelve una promesa.

document.addEventListener('DOMContentLoaded',  async function() { 

    try {
  
      //fetch() es una función integrada en JavaScript que se utiliza para 
      //realizar solicitudes de red y obtener recursos de forma asíncrona.
      //Puede hacer solicitudes a recursos en la web, como archivos JSON, imágenes, 
      //archivos de texto, etc.
  
  
      //Espere a que se adquiera los datos del json y luego metalo en la variable "response".
      const response = await fetch('data/marvel.json');
      
      //Una vez tenemos los datos en la variable, lo pasamos a convertir en un arvicho.json.
      const data = await response.json();
  
      
  
      //itera sobre cada elemento del arreglo data, y para cada elemento, 
      //ejecuta el código definido dentro de la función de flecha. 
      data.forEach(cardData => {
  
        const card = document.createElement('div'); //Creamos el contenedor de cada card
        card.classList.add('card'); //le añadimos el nombre de la clase al contenedor div.
  
        const img = document.createElement('img'); //Agregamos la imagen al contenedor
        img.src = cardData.picture;
  
        const cardInfo = document.createElement('div');//Creamos un contenedor para el name y button
        cardInfo.classList.add('cardInfo');
        
        const name = document.createElement('p'); //Agregamos el nombre
        name.textContent = cardData.name;
      
        const button = document.createElement('button');//Agregamos el boton
        button.textContent = cardData.button;
          
        button.addEventListener('click', function() { //Le aladimos funcionalidad al boton
          modal.style.display = modal.style.display === 'none' ? 'block' : 'none';
              //Para el display de descripcionContainer: Si descripcionContainer es igual a none entonces "display: block", si no "display: none"
          });
  
  
          //CREACION DEL MODAL
  
          const modal = document.createElement('div');
          modal.classList.add('description-container');
  
    
          const descriptionContainer = document.createElement('div');
          descriptionContainer.classList.add('description-Container');
  
          const descriptionPersonaje = document.createElement('p');
          descriptionPersonaje.textContent = cardData.description;
  
          descriptionContainer.appendChild(name);
          descriptionContainer.appendChild(descriptionPersonaje);
  
          modal.appendChild(img);
          modal.appendChild(descriptionContainer);
  
  
          modal.style.display = 'none';
  
          //TERMINACION DE LA CREACION DEL MODAL
      
          card.appendChild(img);
          card.appendChild(cardInfo);
  
          cardInfo.appendChild(modal);
          
          cardInfo.appendChild(name);
          cardInfo.appendChild(button);
  
          cardscontenedorMarvel.appendChild(card);
          ContainerMarvel.appendChild(cardscontenedorMarvel);

          ContainerMarvel.appendChild(modal);
      
      
      });
  
  } catch (error) {
      console.log('Hubo un error al obtener los datos:', error);
    }
  });