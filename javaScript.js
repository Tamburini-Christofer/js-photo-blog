//Colleghiamo javaScript a html prendendo gli elementi 
//Prendiamo il contenitore dove andranno le Card
const contenitoreCard = document.getElementById("contenitoreMain");
//Prendiamo tutte le carte
const immagine = document.querySelectorAll(".card img");
//Prendiamo il contenitore che conterrà l'overplay
const overlayDisplay = document.getElementById("immagineOver");
//Prendiamo l'immagine in OverPlay
const overlayImg = document.getElementById("overlayImg"); 
//Prendiamo il bottone reset
const bottone = document.getElementById("reset");

//Chiamiamo l'API 
axios.get("https://lanciweb.github.io/demo/api/pictures/")
     .then((response) => {
        //Creiamo una variabile per salvare le Cards
        const cards = response.data;
        //Creiamo una variabile che possa contenere tutta la card
        let post = "";
        //Facciamo un ciclo per creare le Card
        cards.forEach(card => {
            post += `
             <div class="card">     
                      <img class="pin" src="img/pin.svg" alt="pinBaccheca">
                        <div class="img"> 
                      <img src=" ${card.url}" alt=" ${card.title}"> 
                  </div>
                  <div> 
                         <h4> ${card.title} </h4> 
                      <span> ${card.date} </span>
                  </div>
              </div>`
        })

        //Scriviamo in post le card
        contenitoreCard.innerHTML = post;

        //Creiamo un ForEach che possa ciclare le immagini per selezionarle
        immagine.forEach(card => {
          //Aggiungiamo un evento click alle card
          card.addEventListener("click", () => {
            //Associamo le sorgenti di card alle sorgenti dell'overplay
            overlayImg.src = card.src; 
            overlayImg.alt = card.alt; 
             //Il contenitore Overplay diventa Flex
            overlayDisplay.style.display = "flex";
            });
        });
         //Al click del bottone diventa none
        bottone.addEventListener("click", () => {
            overlayDisplay.style.display = "none";
        });
});