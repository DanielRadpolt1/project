




let team = {
    teamname: "",
    players: []
}

console.log(team);
function open2ndNav() {
    window.location = "./subpages/navigation.html"



}
let teamCreated = false;
function createTeam() {
    if (localStorage['team']) {
        let teams = JSON.parse(localStorage['team'])
    }

    teamCreated = true;
    team.teamname = document.getElementById('teamname').value;





}


function openPlayercreation() {

    document.getElementById('createTeamMain').innerHTML = `
    
    <div id="B">
    <div id="AtributtesBox">
<div><input type="text" id="position" placeholder="Position"></div>
<div><input type="number" id="pace" placeholder="Pace"></div>
<div><input type="number" id="defending" placeholder="Defending"></div>
<div><input type="number" id="shooting" placeholder="Shooting"></div>
    </div>
    </div>
    <div>
    <div id="imgbox"><img id="trikotimg" src="../img/trikot.webp">
  
    
    </div> <div id="playerName"> <input id="name" style="padding:0.5%;text-align:center;" type="text"></div>
    
   <div id="numberOnBack"><input style="padding:0.5%;text-align:center;" type="number" id="number"></div></div>

    <button onclick="saveTeam()">Save Team</button></div >
     <div id="plusDivPLayer" onclick="savePlayer();openPlayercreation()"><img  style="width: 10%; border: 2px solid black;" src="../img/Plus.png"></div>`;


}

function savePlayer() {

    if (teamCreated) {
        let player = {
            name: document.getElementById('name').value,
            number: document.getElementById('number').value,
            position: document.getElementById('position').value,
            pace: document.getElementById('pace').value,
            defending: document.getElementById('defending').value,
            shooting: document.getElementById('shooting').value,
            rating: (parseInt(document.getElementById('pace').value) + parseInt(document.getElementById('defending').value) + parseInt(document.getElementById('shooting').value)) / 3
        }
        console.log(player);
        team.players.push(player);

        localStorage['team'] = JSON.stringify(team);
        console.log(player);

    }



}

console.log(team);





function saveTeam() {
    let teams = []

    if (localStorage['teams']) {
        teams = JSON.parse(localStorage['teams']);
    }
    console.log(teams);
    if (localStorage['team']) {
        let team = JSON.parse(localStorage['team'])
    }

    teams.push(team);
    console.log(teams);
    localStorage['teams'] = JSON.stringify(teams);

    window.location = "../subpages/customize-Tactics.html"

}


/*
function displayAddMessage(){



    document.getElementById('createTeamMain').innerHTML += `<div id="addMessage">Player added</div>`;
    
    setTimeout(function(){
        document.getElementById('addMessage').remove();
    }, 2000);

}
*/






