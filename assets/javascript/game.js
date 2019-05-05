/*Character list initialization with base stats.
Name: <name>
Health: health points, when drained to 0, the character is dead
base: Their base attack
attack: the amount the character attacks for (friendly heroes only)
counter: the amount a character will retaliate for (enemy heroes only)
*/
var characters = {
    char0 : {
        name : "Captain",
        health : 100,
        base: 20,
        attack : 20,
        counter : 15,
        img: "assets/images/Captain.png",
    },

    char1 : {
        name : "Commando",
        health : 180,
        base: 8,
        attack : 8,
        counter : 30,
        img: "assets/images/Commando.png",
    },

    char2 : {
        name : "Huntress",
        health : 60,
        base : 30,
        attack : 30,
        counter : 10,
        img: "assets/images/Huntress.png",
    },

    char3 : {
        name : "Engineer",
        health : 120,
        base : 10,
        attack : 10,
        counter : 20,
        img: "assets/images/Engineer.png",
    }
}

var char_list = [characters.char0, characters.char1, characters.char2, characters.char3];


//Populate html dynamically with hero cards
for (char_index = 0; char_index < char_list.length; char_index++){
    console.log(char_index);
    $('#character-select').append('<div id = "card-' + char_index + '" class = "col-md-2">');
    $('#card-' + char_index + '.col-md-2').append('<div id = "' + char_list[char_index].name + '" class = "herocard neutral">');
    $('#' + char_list[char_index].name + '.herocard').append('<h6>' + char_list[char_index].name + '</h6>');
    $('#' + char_list[char_index].name + '.herocard').append('<img id= "' + 'char' + char_index + '" class= "portrait" ' + 'src = ' + char_list[char_index].img + '>');

}

$('#character-select').append('<button type= "button" class= "btn btn-danger" onclick = "attack(characters.char1, characters.char4)">Attack</button>')

//function for actions relating to clicking on character, mainly selection/delegation
$('.portrait').click(function (e){
    //Checks if heroes are neutral and delegates them to proper team
    if (e.target.parentElement.classList.contains("neutral")){
        console.log(characters[e.target.id]);
        e.target.parentElement.classList.replace("neutral", "chosen");

        var neutrals = document.getElementsByClassName("neutral");

        for (var i = neutrals.length; i > 0; i--) {
            neutrals[0].classList.replace("neutral", "enemy");
            console.log(neutrals);
            console.log(i);
          }
    }

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


