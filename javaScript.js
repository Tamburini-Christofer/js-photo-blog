//Colleghiamo javaScript a html prendendo gli elementi 
//Prendiamo il contenitore dove andranno le Card
const contenitoreCard = document.getElementById("contenitoreMain");

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
        contenitoreCard.innerHTML = post;

        const immagine = document.querySelectorAll(".card");
        const overlayDisplay = document.getElementById("immagineOver");
        const bottone = document.getElementById("reset");
        const overlayImg = document.getElementById("overlayImg"); 

        immagine.forEach(card => {
          card.addEventListener("click", () => {
            overlayImg.src = img.src; 
            overlayImg.alt = img.alt; 
          overlayDisplay.style.display = "flex";
            });
        });

        bottone.addEventListener("click", () => {
            overlayDisplay.style.display = "none";
        });
});