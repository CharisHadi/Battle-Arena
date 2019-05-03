/*Character list initialization with base stats.
Name: <name>
Health: health points, when drained to 0, the character is dead
base: Their base attack
attack: the amount the character attacks for (friendly heroes only)
counter: the amount a character will retaliate for (enemy heroes only)
alignment: Dictates whether a character is neutral(0), friendly (1), or enemy (-1)
*/
var characters = {
    char1 : {
        name : "guy one",
        health : 100,
        base: 20,
        attack : 20,
        counter : 15,
        alignment : 0,
    },

    char2 : {
        name : "guy two",
        health : 180,
        base: 8,
        attack : 8,
        counter : 30,
        alignment : 0,
    },

    char3 : {
        name : "guy three",
        health : 60,
        base : 30,
        attack : 30,
        counter : 10,
        alignment : 0,
    },

    char4 : {
        name : "guy four",
        health : 120,
        base : 10,
        attack : 10,
        counter : 20,
        alignment : 0,

    }
}


//function for selecting your hero and delegating enemy status to other characters
$(".hero").click(function (e){
    var selected = {...characters[e.target.id]};
    console.log(selected);
    //console.log(e);
});


//recalculates hp and att points after a combat phase has been done
function attack(friendly, enemy){
    enemy.health -= friendly.attack;

    console.log(friendly.name + " attacked " + enemy.name + " for " + friendly.attack + " damage!");

    friendly.attack += friendly.base;

    console.log(enemy.name + "'s health is now " + enemy.health);
    console.log(friendly.name + "'s attack is now " + friendly.attack);

    if(enemy.health > 0){
    friendly.health -= enemy.counter;
    }
    console.log(friendly.name + "'s health is now " + friendly.health);

    console.log("_____________________________attack!_____________________________");
}


