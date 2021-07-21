var cardSwain = {
    name: "Imperador de Noxus",
    imagem: "https://noticias.maisesports.com.br/wp-content/uploads/2020/04/Legends-of-Runeterra-Swain.png",
    atributos: {
        ataque:20,
        defesa:50,
        magia:100,  
    }
}

var cardCaitlyn = {
    name: "Xerife de Piltover",
    imagem: "https://c4.wallpaperflare.com/wallpaper/1021/574/358/league-of-legends-caitlyn-rifle-hat-wallpaper-preview.jpg",
    atributos: {
        ataque:90,
        defesa:20,
        magia:0,    
    }
}

var cardMalphite = {
    name: "A montanha viva",
    imagem: "https://i.pinimg.com/originals/84/24/c8/8424c8ab5d349ab39f66d15623bb916c.jpg",
    atributos: {
        ataque:25,
        defesa:90,
        magia:50,    
    }
}

var cardMachine
var cardPlayer
var cards = [cardSwain, cardCaitlyn, cardMalphite]

function rollCards(){
    var cardMachineNumber = parseInt(Math.random() * 3);
    cardMachine = cards[cardMachineNumber];

    var cardPlayerNumber = parseInt(Math.random() * 3);
    while(cardPlayerNumber == cardMachineNumber){
        cardPlayerNumber = parseInt(Math.random() * 3);
    }

    cardPlayer = cards[cardPlayerNumber]
    console.log(cardPlayer)

    document.getElementById('btnRoll').disabled = true;
    document.getElementById('btnPlay').disabled = false;
    
    showCardPlayer();
}
 
function showCardPlayer() {
    var divCardPlayer = document.getElementById("card-player");
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCardPlayer.style.backgroundImage = `url(${cardPlayer.imagem})`;
    var name = `<p class="card-subtitle">${cardPlayer.name}</p>`
    var optionsText = "";

    for (var atributo in cardPlayer.atributos){
        optionsText += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cardPlayer.atributos[atributo] + "<br>";
    }

    var html = "<div id='options' class='card-status'>"

    divCardPlayer.innerHTML = moldura + name + html + optionsText + '</div>';
}

function chosenAtributes() {
    var radioAtributes = document.getElementsByName('atributo');
    for(var i = 0; i < radioAtributes.length; i++){
        if(radioAtributes[i].checked) {
            return radioAtributes[i].value
        }
    }
}


function play() {
    var divResult = document.getElementById("result")
    var selectedAtributes = chosenAtributes();

    if(cardPlayer.atributos[selectedAtributes] > cardMachine.atributos[selectedAtributes]){
        hmtlResult = '<p class="result-final">Venceu</p>'
    }else if(cardPlayer.atributos[selectedAtributes] < cardMachine.atributos[selectedAtributes]){
        hmtlResult = '<p class="result-final">Perdeu</p>'
    }else {
        hmtlResult = '<p class="result-final">Empatou</p>'
    }

    divResult.innerHTML = hmtlResult
    showCardMachine()
}

function showCardMachine() {
    var divCardMachine = document.getElementById("card-machine");
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCardMachine.style.backgroundImage = `url(${cardMachine.imagem})`;
    var name = `<p class="card-subtitle">${cardMachine.name}</p>`
    var optionsText = "";

    for (var atributo in cardMachine.atributos){
        optionsText += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cardMachine.atributos[atributo] + "<br>";
    }

    var html = "<div id='options' class='card-status'>"

    divCardMachine.innerHTML = moldura + name + html + optionsText + '</div>';
}