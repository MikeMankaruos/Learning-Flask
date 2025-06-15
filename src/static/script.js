const emoji_points=[];
emoji_points["Smile"]=["😃", 10];
emoji_points["Cry"]=["😭", 9];
emoji_points["Angry"]=["😤", 13];
emoji_points["Laugh"]=["🤣", 17];
emoji_points["Money"]=["🤑", 15];
emoji_points["Devil"]=["😈", 9];
emoji_points["Angel"]=["😇", 16];
emoji_points["Love"]=["😍", 20];
emoji_points["Dog"]=["🐶", 18];
emoji_points["Cat"]=["🐈", 16];
emoji_points["Cool"]=["😎", 15];
emoji_points["Nerd"]=["🤓", 14];
emoji_points["Profanity"]=["🤬", 14];
emoji_points["Ghost"]=["👻", 17];
emoji_points["Turd"]=["💩", 20000000000];
emoji_points["Family"]=["👨‍👩‍👦", 20];
emoji_points["Gym"]=["🏋️‍♀️", 17];

emoji_names = ["Smile","Cry","Angry","Laugh","Money","Devil","Angel","Love","Dog","Cat","Cool","Nerd","Profanity","Ghost","Turd","Family","Gym"];

explosion = '<img id="explosion" src= "https://media.tenor.com/nANqORN7qhQAAAAM/explosion-explode.gif"></img>';

twoplayer = false;


function display() {
    for (emo in emoji_points) {
        // source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
        let emoji = emoji_points[emo][0];
        let addition = `<div id = "${emo}">${emoji}<div/>`
        $(".comp_well").append(addition);
        $(".player_well").append(addition);
        }
    }

function reset() {
    console.log("yes")
    if (!twoplayer) {
        let randomint = Math.floor(Math.random() * emoji_names.length);
        // source: https://www.youtube.com/watch?v=K2upGO5Bb48&t=78s&ab_channel=BroCode
        computer = emoji_names[randomint];
        computer_emoji = emoji_points[computer][0];
        comp_points = emoji_points[computer][1];
        $(".comp_box").text(computer_emoji);
        $(".comp_box_label").text(computer);
    }   

    else {
        console.log("help");
        $(".comp_box_label").text("Choose 1/17 Emoji");
        $(".comp_box").text("❎");
    }


    $(".player_box").text("❎");
    $(".player_box_label").text("Choose 1/17 Emoji");

    
    // sources: https://www.youtube.com/watch?v=KjIur9ABjeg&ab_channel=DavidAnuson
    // https://www.youtube.com/watch?v=gTPf7WN0Bnw&t=3s&ab_channel=QuickProgrammingTips
}


function comp_player() {
    if (twoplayer) {
        $(".twoplayer_button").text("2-Player");
        $('body').css('--clr-button','red');
        twoplayer = false
        reset()
    }
    else {
        $(".twoplayer_button").text("Computer");
        $('body').css('--clr-button','green');
        twoplayer = true
        reset()
    }
}

const choose_player = (e) => {
    chosen_player = e.target.id;
    let emoji = emoji_points[chosen_player][0];
    $(".player_box").text(emoji);
    $(".player_box_label").text(chosen_player);

    player_points = emoji_points[chosen_player][1];    
}


const choose_computer = (e) => {
    if (twoplayer) {
        computer = e.target.id;
        let emoji = emoji_points[computer][0];
        $(".comp_box").text(emoji);
        $(".comp_box_label").text(computer);

        player_points = emoji_points[computer][1];    
    }
}



function fight() {
    if (($(".comp_box").text() != ("❎")) && ($(".player_box").text() != ("❎"))) {
        if (comp_points > player_points) {
            console.log("comp wins")
            $(".player_box").html(explosion);
            $(".player_box_label").text(`${chosen_player} lost!`);
        }
        else if (comp_points < player_points) {
            console.log("player wins")
            $(".comp_box").html(explosion);
            $(".comp_box_label").text(`${computer} lost!`);
        }
        else {
            console.log("tie")
            $(".comp_box").html(explosion);
            $(".comp_box_label").text(`Tie!`);
            $(".player_box").html(explosion);
            $(".player_box_label").text(`Tie!`);
        }
    }
}


display();
reset();
$('.player_well').click(choose_player);
$('.comp_well').click(choose_computer);
$('.comp_button').click(reset);
$('.fight_button').click(fight);
$('.twoplayer_button').click(comp_player)
