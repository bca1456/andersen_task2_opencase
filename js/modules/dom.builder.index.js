var domBuilderIndex = (function(){
    var openCaseBtn;
    //var tryAgainBtn;

    var outputDropText;
    var outputDropRarityText;

    var caseImg;


    function init() {
        initControls();
        caseImg.src = imgCase;
        initListeners();
    }

    function initControls() {
        openCaseBtn = document.getElementById(openCaseBtnId);
        //tryAgainBtn = document.getElementById(tryAgainBtnId);
        outputDropText = document.getElementById(outputDropId);
        outputDropRarityText = document.getElementById(outputDropRarityId);
        caseImg = document.getElementById(imgCaseId);
    }

    function initListeners() {
        openCaseBtn.addEventListener(eventTypeClick, openCase);
        //tryAgainBtn.addEventListener(eventTypeClick, reset); 
    }

    function openCase(){
        randomValues();
        let droppedGun = new Weapon(dropNameNumber, dropRarityNumber);
        console.log(droppedGun.getWeaponName() + "   " + droppedGun.getImageUrl() + "    " + droppedGun.getWeaponRarity());      
        caseImg.src = droppedGun.getImageUrl();
        outputDropText.innerHTML = droppedGun.getWeaponName();
        outputDropRarityText.innerHTML = droppedGun.getWeaponRarity();
    }


    /*function reset(){
        window.location.href=window.location.href
    }*/

    return {
        init: init
    };
})();