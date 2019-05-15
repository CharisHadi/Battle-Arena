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
    },
}

var char_list = [];
var index = 0;
    $.each(characters, function(char, stats){
        char_list[index] = stats;
        index += 1;
    });
console.log("__________________________");
console.log(char_list);

for (char_index = 0; char_index < char_list.length; char_index++){
    console.log(char_index);
    $('#character-select').append('<div id = "card-' + char_index + '" class = "col-xs-3 col-sm-3 col-md-2 col-lg-1">');
    $('#card-' + char_index + '.col-sm-3').append('<div id = "' + char_list[char_index].name + '" class = "herocard neutral">');
    $('#' + char_list[char_index].name + '.herocard').append('<h6>' + char_list[char_index].name + '</h6>');
    $('#' + char_list[char_index].name + '.herocard').append('<img id= "' + 'char' + char_index + '" class= "portrait" ' + 'src = ' + char_list[char_index].img + '>');
}