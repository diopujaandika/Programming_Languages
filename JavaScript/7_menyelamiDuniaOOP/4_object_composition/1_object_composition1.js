/**
 * Object Composition (OC)
 * Object Composition adalah cara yang digunakan sebagai solusi untuk masalah pewarisan yang kompleks.
 */

//Contoh karakter game (monster, wizard, dan guardian)

class Character{
    constructor(name, health, position){
        this.name = name;
        this.health = health;
        this.position = position;
    }

    canMove(){
        console.log(`${this.name} moves to another position!`);
    }
}

function canAttack(character){
    return{
        attack: () => {
            console.log(`${character} attacks with a weapon!`);
        }
    }
}

function canDefend(character){
    return{
        defend: () => {
            console.log(`${character} defends with a shield!`);
        }
    }
}

function canCastSpell(character){
    return{
        castSpell: () => {
            console.log(`${character} casts a spell!`);
        }
    }
}

// Object.assign() => method statis untuk menyalin semua property dari satu atau lebih object target. Object.assign() akan mengembabalikan object target yang dimodifikasi.
function createMonster(name){
    const character = new Character(name, 100, 0);
    return Object.assign(character, canAttack(name));
}

function createGuardian(name){
    const character = new Character(name, 100, 0);
    return Object.assign(character, canDefend(name));
}

function createWizard(name){
    const character = new Character(name, 100, 0);
    return Object.assign(character, canCastSpell(name));
}

function createWarrior(name){
    const character = new Character(name, 100, 0);
    return Object.assign(character, canAttack(character), canDefend(character));
}

const monster = createMonster('Monster');
monster.canMove();
monster.attack();

const guardian = createGuardian('Guardian');
guardian.canMove();
guardian.defend();
 
const wizard = createWizard('Wizard');
wizard.canMove();
wizard.castSpell();
 
const warrior = createWarrior('Warrior');
warrior.canMove();
warrior.attack();
warrior.defend();