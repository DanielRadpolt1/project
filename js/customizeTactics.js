let teams = [];
let selectedPlayer = null;

if (localStorage['teams']) {
    teams = JSON.parse(localStorage['teams']);
}
console.log(teams);

insertTeamsInDropdown();

function insertTeamsInDropdown() {
    const chooseTeamElement = document.getElementById('chooseTeam');
    chooseTeamElement.innerHTML = '';

    for (let i = 0; i < teams.length; i++) {
        chooseTeamElement.innerHTML += `<option value="${i}">${teams[i].teamname}</option>`;
    }
}

function loadTeamOnchange() {
    const ActiveTeamIndex = document.getElementById('chooseTeam').value;
    console.log(teams[ActiveTeamIndex]);
    const team = teams[ActiveTeamIndex];
    console.log(team);

    document.getElementById('teamRating').innerHTML = `Rating: ${Math.round(calcTeamRating(team))}`;
    const fieldElement = document.getElementById('field');
    fieldElement.innerHTML = `<img src="../img/Field.jpg" id="fieldimg" alt="field" style="width: 100%; height: 100%;">`;




    for (let i = 0; i < team.players.length; i++) {
        console.log(team.players[i].name);
        const playerElement = document.createElement('div');
        playerElement.id = `p${i + 1}`;
        playerElement.textContent = team.players[i].name;
        playerElement.addEventListener('click', () => selectPlayer(playerElement));
        fieldElement.appendChild(playerElement);
    }
}

function selectPlayer(playerElement) {
    if (selectedPlayer === null) {
        selectedPlayer = playerElement;
        playerElement.style.border = '2px solid red';
    } else {
        swapPlayers(selectedPlayer, playerElement);
        selectedPlayer.style.border = 'none';
        selectedPlayer = null;
    }
}

function swapPlayers(player1, player2) {
    const temp = player1.textContent;
    player1.textContent = player2.textContent;
    player2.textContent = temp;
}


function calcTeamRating(team) {
    let sum = 0;
    for (let i = 0; i < team.players.length; i++) {
        sum += team.players[i].rating;
    }
    return sum / 11;
}


function changeFormationTo442() {
   document.getElementById('p1').style.top = '83%';
   document.getElementById('p1').style.left = '46%';

    document.getElementById('p2').style.top = '64%';
    document.getElementById('p2').style.left = '13%';

    document.getElementById('p3').style.top = '70%';
    document.getElementById('p3').style.left= '33%';

    document.getElementById('p4').style.top = '70%';
    document.getElementById('p4').style.left = '59%';

    document.getElementById('p5').style.top = '65%';
    document.getElementById('p5').style.left = '82%';

    document.getElementById('p6').style.top = '45%';
    document.getElementById('p6').style.left = '12%';

    document.getElementById('p7').style.top = '54%';
    document.getElementById('p7').style.left = '30%';

    document.getElementById('p8').style.top = '54%';
    document.getElementById('p8').style.left = '58%';

    document.getElementById('p9').style.top = '45%';
    document.getElementById('p9').style.left = '72%';

    document.getElementById('p10').style.top = '35%';
    document.getElementById('p10').style.left = '25%';

    document.getElementById('p11').style.top = '35%';
    document.getElementById('p11').style.left = '59%';
}


function changeFormationTo4231() {
    document.getElementById('p1').style.top = '83%';
    document.getElementById('p1').style.left = '46%';

    document.getElementById('p2').style.top = '64%';
    document.getElementById('p2').style.left = '13%';

    document.getElementById('p3').style.top = '70%';
    document.getElementById('p3').style.left = '33%';

    document.getElementById('p4').style.top = '70%';
    document.getElementById('p4').style.left = '59%';

    document.getElementById('p5').style.top = '65%';
    document.getElementById('p5').style.left = '82%';

    document.getElementById('p6').style.top = '45%';
    document.getElementById('p6').style.left = '12%';

    document.getElementById('p7').style.top = '57.5%';
    document.getElementById('p7').style.left = '32%';

    document.getElementById('p8').style.top = '57.5%';
    document.getElementById('p8').style.left = '58%';

    document.getElementById('p9').style.top = '45%';
    document.getElementById('p9').style.left = '72%';

    document.getElementById('p10').style.top = '50%';
    document.getElementById('p10').style.left = '42%';

    document.getElementById('p11').style.top = '35%';
    document.getElementById('p11').style.left = '59%';
}