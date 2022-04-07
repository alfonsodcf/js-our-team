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


console.log(team[1].img);
let stampa = stampaCard();



function stampaCard(){
    let teamContainer = document.getElementsByClassName('team-container');
    let card = creaCard();
    console.log(card)
    teamContainer.innerHTML = card;
    
}

function creaCard(){
    let card = '';
    for(let i = 1; i < card.length; i++){
        card +=  `
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
    return card;
    
}


