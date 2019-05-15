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
        health : 120,
        base : 10,
        attack : 10,
        counter : 20,
        img: "assets/images/Captain.png",
    },

    char1 : {
        name : "Huntress",
        health : 100,
        base: 15,
        attack : 15,
        counter : 15,
        img: "assets/images/Huntress.png",
    },

    char2 : {
        name : "Commando",
        health : 60,
        base : 30,
        attack : 30,
        counter : 10,
        img: "assets/images/Commando.png",
    },

    char3 : {
        name : "Engineer",
        health : 180,
        base: 8,
        attack : 8,
        counter : 30,
        img: "assets/images/Engineer.png",
    },
    //I made a new character to see if my Character pool could be dynamically generated into the Array and its Card. It works!!! :))
/*     char4 : {
        name : "Raptor",
        health : 300,
        base : 1,
        attack : 2,
        counter: 10,
        img: "assets/images/Raptor.png"
    }, */
}

//Populates array dynamically for Card Population reference
var char_list = [];
var index = 0;
    $.each(characters, function(char, stats){
        char_list[index] = stats;
        index += 1;
    });

//Populate html dynamically with hero cards
for (char_index = 0; char_index < char_list.length; char_index++){
    $('#character-select').append('<div id = "card-' + char_index + '" class = "col-xs-3 col-sm-3 col-md-2 col-lg-1">');
    $('#card-' + char_index + '.col-sm-3').append('<div id = "' + char_list[char_index].name + '" class = "herocard neutral">');
    $('#' + char_list[char_index].name + '.herocard').append('<h6>' + char_list[char_index].name + '</h6>');
    $('#' + char_list[char_index].name + '.herocard').append('<img id= "' + 'char' + char_index + '" class= "portrait" ' + 'src = ' + char_list[char_index].img + '>');
    $('#' + char_list[char_index].name + '.herocard').append('<p id = "hp' + [char_index] +'" >Health: ' + char_list[char_index].health + '</p>');
    $('#' + char_list[char_index].name + '.herocard').append('<p id = "att' + [char_index] +'" >Attack: ' + char_list[char_index].attack + '</p>');
    $('#' + char_list[char_index].name + '.herocard').append('<p id = "count' + [char_index] +'" >Counter: ' + char_list[char_index].counter + '</p>');

}

$('#character-select').append('<div class = "BUTT col-sm-3 col-md-2 col-lg-1">')
$('.BUTT').append('<button type= "button" class= "btn btn-danger" onclick = "attack(characters.char1, characters.char0)">Attack</button>')

var enemy_selected = false;

//function for actions relating to clicking on character, mainly selection/enemy-delegation
$('.portrait').on("click", function (e){
    //Checks if heroes are neutral and delegates them to proper team
    if (e.target.parentElement.classList.contains("neutral")){
        // console.log(characters[e.target.id]);
        e.target.parentElement.classList.replace("neutral", "chosen");

        var neutrals = document.getElementsByClassName("neutral");

        for (var i = neutrals.length; i > 0; i--) {
            neutrals[0].classList.replace("neutral", "enemy");
            // console.log(neutrals);
            // console.log(i);
          }
    }

    //Checks whether hero clicked is an enemy and if an enemy has been selected yet
    if (e.target.parentElement.classList.contains("enemy") && enemy_selected === false){
        e.target.parentElement.classList.replace("enemy", "defender");
        enemy_selected = true;
    }

});

console.log($("#hp0"));

//Attack function recalculates hp and att points after a combat phase has been done
function attack(friendly, enemy){
    enemy.health -= friendly.attack;
    console.log($("#hp0"));
    $("#hp0").html("Health: " + enemy.health);
    console.log(friendly.name + " attacked " + enemy.name + " for " + friendly.attack + " damage!");

    friendly.attack += friendly.base;
    console.log(enemy.name + "'s health is now " + enemy.health);
    console.log(friendly.name + "'s attack is now " + friendly.attack);
    

    //Calculates enemy damage later; if the enemy dies to the Player's hero, the Player takes no damage.
    if(enemy.health > 0){
    friendly.health -= enemy.counter;
    }
    console.log(friendly.name + "'s health is now " + friendly.health);
    console.log("_____________________________attack!_____________________________");

    if(enemy.health <= 0){
        enemy_selected = false;
    }
}
