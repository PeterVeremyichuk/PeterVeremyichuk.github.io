let tapHere = document.getElementById('tapHere');
let formSection = document.getElementById('formSection');
let send = document.getElementById('send');


tapHere.onclick = function () {
    formSection.style.display = 'block';
    tapHere.style.display = 'none';
}

send.onclick = function () {
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let mood = document.getElementById('mood').value;
    let message = document.getElementById('message').value;
    // console.log(name)
    // console.log(old)
    // console.log(how)
    // console.log(message)

    let formReturn = new XMLHttpRequest();
    formReturn.open('GET', `https://api.telegram.org/bot1497854825:AAEgaLPEM5W937FVKjLby8H30UT9GtSYKiU/sendMessage?text=
    Name:${name}%0A
    Age:${age}%0A
    Mood:${mood}%0A
    Message:${message}&chat_id=-429612643`, false);
    formReturn.send();
    formSection.style.display = 'none';
    alert("Info Succesfully Sent");
    

}

// 1497854825:AAEgaLPEM5W937FVKjLby8H30UT9GtSYKiU - BOT API KEY
// -429612643
// https://api.telegram.org/bot