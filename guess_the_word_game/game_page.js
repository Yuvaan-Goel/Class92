player1_name = localStorage.getItem("player1");
player2_name = localStorage.getItem("player2");
player1_score = 0;
player2_score = 0;

document.getElementById("player1").innerHTML = player1_name + " : ";
document.getElementById("player2").innerHTML = player2_name + " : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_question").innerHTML = "Question Turn: " +  player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn: " +  player2_name;

function send()
{
    getword = document.getElementById("word").value;
    word = getword.toLowerCase();
    console.log("Word in lower case = " + word);

    charat1 = word.charAt(1);
    console.log(charat1);

    lengthdivide2 = Math.floor(word.length/2);
    charat2 = word.charAt(lengthdivide2);
    console.log(charat2);

    lengthminus1 = word.length-1;
    charat3 = word.charAt(lengthminus1);
    console.log(charat3);

    removecharat1 = word.replace(charat1, "_");
    removecharat2 = removecharat1.replace(charat2, "_");
    removecharat3 = removecharat2.replace(charat3, "_");
    console.log(removecharat3);

    question = "<h4 id='word_display'> Q. " + removecharat3 + "</h4>";
    inputbox = "<br> Answer : <input type= 'text' id='input'>";
    checkbutton = "<br><br> <button class='btn btn-info' onclick='check();'> Check </button>";
    row = question + inputbox + checkbutton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = ""; 
}

question_turn = player1_name;
answer_turn = player2_name;

function check() {
    get_answer = document.getElementById("input").value;
    answer = get_answer.toLowerCase();
    console.log("Answer in lower case = " + answer);

    if(answer == word) 
    {
        if(answer_turn == player1_name)
        {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else
        {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;   
        }
    }
    if(question_turn == player1_name)
    {
        question_turn = player2_name;
        document.getElementById("player_question").innerHTML = "Question Turn : " + player2_name;
    }
    else
    {
        question_turn = player1_name;
        document.getElementById("player_question").innerHTML = "Question Turn : " + player1_name;
    }
    if(answer_turn == player1_name)
    {
        answer_turn = player2_name;
        document.getElementById("player_answer").innerHTML = "Answer Turn : " + player2_name;
    }
    else
    {
        answer_turn = player1_name;
        document.getElementById("player_answer").innerHTML = "Answer Turn : " + player1_name;
    }

    document.getElementById("output").innerHTML = "";
}
