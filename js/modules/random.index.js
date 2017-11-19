function randomValues(){
    dropNameNumber = Math.floor((Math.random() * 1000) + 1);
    dropRarityNumber = Math.floor((Math.random() * 5) + 1);
    console.log(dropNameNumber + "    " + dropRarityNumber);
}