'use strict';

class Weapon{
    
    constructor(dropNameNumber, dropRarityNumber){
        if (dropNameNumber >= 0 && dropNameNumber <= 500){
            this.weaponName = "PISTOL";
            this.imageUrl = imgPistol;
        } else if (dropNameNumber > 500 && dropNameNumber <= 800){
            this.weaponName = "RIFLE";
            this.imageUrl = imgRifle;
        } else if (dropNameNumber > 800 && dropNameNumber <= 940){
            this.weaponName = "AWP";
            this.imageUrl = imgAwp;
        } else if (dropNameNumber > 940 && dropNameNumber <= 1000){
            this.weaponName = "KNIFE";
            this.imageUrl = imgKnife;
        }
        
        switch(dropRarityNumber){
            case 1:
                this.weaponRarity = "Battle-Scarred";
                break;
            case 2: 
                this.weaponRarity = "Well-Worn";
                break;
            case 3: 
                this.weaponRarity = "Field-Tested";
                break;
            case 4: 
                this.weaponRarity = "Minimal Wear";
                break;
            case 5: 
                this.weaponRarity = "Factory New";
                break;
        }
    }

    getWeaponName(){
        return this.weaponName;
    }

    setWeaponName(newWeaponName){
        this.weaponName = newWeaponName;
    }

    getWeaponRarity(){
        return this.weaponRarity;
    }

    setWeaponRarity(newWeaponRarity){
        this.weaponRarity = newWeaponRarity;
    }

    getImageUrl(){
        return this.imageUrl;
    }

    setImageUrl(newImageUrl){
        this.imageUrl = newImageUrl;
    }
}