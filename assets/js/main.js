//Prendo il div .container
const container = document.querySelector('.container');
/* console.log(container); */

const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

console.log(team);

//Stampare su console le informazioni di nome, ruolo e la stringa della foto.
for (let i = 0; i < team.length; i++) {
    const teamMember = team[i];
    console.log('Name: ' + teamMember.name);
    console.log('Role: ' + teamMember.role);
    console.log('Photo: ' + teamMember.image);
    console.log(' ');
}


//Stampare le stesse informazioni su DOM sottoforma di stringhe.
function memberString(teamMember) {
    return `
        <div class="text-center">
            <img src="./assets/img/${teamMember.image}" alt="">
            <h4>${teamMember.name}</h4>
            <h6>${teamMember.role}</h6>
            <hr>
        </div>
    `;
}

for (let i = 0; i < team.length; i++) {
    const teamMember = team[i];
    const memberText = memberString(teamMember);
    container.innerHTML += memberText;
}