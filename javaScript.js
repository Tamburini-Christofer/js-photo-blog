//Colleghiamo javaScript a html prendendo gli elementi 
//Prendiamo il contenitore dove andranno le Card
const contenitoreCard = document.getElementById("contenitoreMain");

//Chiamiamo l'API 
axios.get("https://lanciweb.github.io/demo/api/pictures/").then((response) => {
        //Creiamo una variabile per salvare le Cards
        const cards = response.data;
        console.log()
        //Creiamo una variabile che possa contenere tutta la card
        let post = "";
        //Facciamo un ciclo per creare le Card
        cards.forEach(card => {
            post += `<div class="card">     
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
});