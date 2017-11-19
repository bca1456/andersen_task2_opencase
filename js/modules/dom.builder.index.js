var domBuilderIndex = (function(){
    var openCaseBtn;

    var outputDropText;
    var outputDropRarityText;
    var chancesInfoText;

    var caseImg;

    let droppedGun;


    function init() {
        initControls();
        caseImg.src = imgCase;
        initListeners();
    }

    function initControls() {
        openCaseBtn = document.getElementById(openCaseBtnId);
        
        outputDropText = document.getElementById(outputDropId);
        outputDropRarityText = document.getElementById(outputDropRarityId);
        chancesInfoText = document.getElementById(chancesInfoId);
        
        caseImg = document.getElementById(imgCaseId);
    }

    function initListeners() {
        openCaseBtn.addEventListener(eventTypeClick, openCase); 
    }

    function openCase(){
        randomValues();
        caseImg.className += " shake";
        droppedGun = new Weapon(dropNameNumber, dropRarityNumber);
        console.log(droppedGun.getWeaponName() + "   " + droppedGun.getImageUrl() + "    " + droppedGun.getWeaponRarity());      
        setTimeout(setNewValues, 2000);//2sec
        setTimeout(reset, 4000); //4sec
    }

    function setNewValues(){
        caseImg.src = droppedGun.getImageUrl();
        caseImg.className = "my-img animated";
        outputDropText.innerHTML = droppedGun.getWeaponName();
        outputDropRarityText.innerHTML = droppedGun.getWeaponRarity();
        openCaseBtn.style.visibility = "hidden";
        chancesInfoText.style.visibility = "hidden";
    }

    function reset(){
        window.location.href=window.location.href
    }

    return {
        init: init
    };
})();