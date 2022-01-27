function propmtUserForInput() {
    let person = prompt("What is your Name?");
alert("Hello" + ' ' + person + ' ' + "Welcome to Bishal's Page, Please click OK");

let hob = prompt("What is Bishal's Hobby");


    if(hob == 'travel')
{
   alert("You Are Correct!")
}
     else if(hob=='music')
    {
        alert("You are correct!")
    }
    else {
        alert("sorry try again")
    }

    return 0;
}
propmtUserForInput();

document.write ('<h3>' + "Hello" + ' ' + person + ' ' + "Welcome to Bishal's Page");