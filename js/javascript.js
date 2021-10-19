

// recupero gli elementi dove mettere le celle, e gli elementi button e la selezione della difficoltà

const container = document.querySelector(".conatiner");
const selectDifficulty = document.getElementById("select-difficulty");
const buttonPlay = document.getElementById("btn");

// creo un eventslistener per scegliere la difficoltà sul button

selectDifficulty.addEventListener("click", function(){
    
    // qui l´utente sceglie il livello di difficoltà
    const level = selectDifficulty.value

    // qui recupero il numero delle celle in base alla difficoltà
    const numberOfCells = getNumberOfcells(level)

    // 
    generategrid(numberOfCells)

});

// creo una funziona che in base al livello di difficoltà scelto, mi genera il numero di celle necessarie
function getNumberOfcells(level){

    let result;

    switch (parseInt(level)){

        case 1:
            result = 100;
            break;
        
        case 2:
            
            result = 81;
            break;
        case 3:
            result = 49;
            break;
            
    }

    return result;

}

