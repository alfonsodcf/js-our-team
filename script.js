
team = [
    {
        img: 'wayne-barnett-founder-ceo.jpg',
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
    },

    {
        img: 'angela-caroll-chief-editor.jpg',
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
    },

    {
        img: 'walter-gordon-office-manager.jpg',
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
    },

    {
        img: 'angela-lopez-social-media-manager.jpg',
        nome: 'Angela LOpez',
        ruolo: 'Social Media Manager',
    },

    {
        img: 'scott-estrada-developer.jpg',
        nome: 'Scott Estrada',
        ruolo: 'Developer',
    },

    {
        img: 'barbara-ramos-graphic-designer.jpg',
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
    },
    
]

/* <div class="team-card">
    <div class="card-image">
    <img
        src="img/wayne-barnett-founder-ceo.jpg"
        alt="Wayne Barnett"
    />
    </div>
    <div class="card-text">
        <h3>Wayne Barnett</h3>
        <p>Founder & CEO</p>
    </div>
</div>  */


console.log(team[1].img);

const teamContainer = document.querySelector('.team-container');
console .log(teamContainer);

function stampaCard(){
    for(let i = 0; i < team.length; i++){
        //console.log(team[i]);
        teamContainer.innerHTML += `
            <div class="team-card">
                <div class="card-image">
                    <img
                        src="img/${team[i].img}"
                        alt="${team[i].nome}"
                    />
                </div>
                <div class="card-text">
                    <h3>${team[i].nome}</h3>
                    <p>${team[i].ruolo}</p>
                </div>
            </div>
        `;

    }
};

stampaCard ();

