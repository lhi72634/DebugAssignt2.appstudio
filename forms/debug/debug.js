//Laura Higueras
/*
ADD ARRAYS AND SOME ARRAY METHODS - .LENGTH, POP, PUSH

This program gets the user name and age, then outputs a nice, appropriate 
message to the user based on their age. It also sees if the users' name is in the 
friends array. 
*/

let friends = ["Michelle", "Betty", "Bev", "Amy","Marsha"]
let choice= prompt(`Which of my friends do you want to invite over? ${friends[1]}, ${friends[2]}, ${friends[3]}, ${friends[4]}, or ${friends[5]}?`)
let userName = prompt("Enter your first name please. ")
let userAge = Number(prompt("Enter your current age in years. "))

if (userAge > 20) //add parentheses and change age for userAge
    messageNum = 1
else if (userAge > 30 && userAge < 40) //change age for userAge, add parentheses, replace AND with &&, and add age before second sign
    messageNum = 2
else
    messageNum = 3
    
switch (messageNum) { //switch is spelled wrong and javascript is case sensitive, so put "num" with capital letter N
case 1: //no quotes for number of cases
    alert("You are in your twenties!")
    break
case 2:
    alert("You are in your thirties! ") //alert is spelled wrong
case 3:
    alert("You are over 40! Wow!") //no double quotes at the end of string
    break
default:
    alert("I have no idea how old you are. ")
    break //add break
} //add closing curved parenthesis