// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
// MILESTONE 0:
// Creare l’array di oggetti con le informazioni fornite.

const membriTeam = [
    {
        "nome" : "Wayne Barnett",
        "role" : "Founder e CEO",
        "foto" : "img/wayne-barnett-founder-ceo.jpg"
    },
    {
        "nome" : "Agela Caroll",
        "role" : "Chief Editor",
        "foto" : "img/angela-caroll-chief-editor.jpg" 
    },
    {
        "nome" : "Walter Gordon",
        "role" : "Office Manager",
        "foto" : "img/walter-gordon-office-manager.jpg"
    },
    {
        "nome" : "Angela Lopez",
        "role" : "Social Media Manager",
        "foto" : "img/angela-lopez-social-media-manager.jpg"
    },
    {
        "nome" : "Scott Estrada",
        "role" : "Developer",
        "foto" : "img/scott-estrada-developer.jpg"
    },
    {
        "nome" : "Barbara Ramos",
        "role" : "Graphic Designer",
        "foto" : "img/barbara-ramos-graphic-designer.jpg"
    }
];


// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for (let i = 0; i < membriTeam.length; i++){
    let Team = membriTeam[i];
    console.log(Team);
    // MILESTONE 2:
    // Stampare le stesse informazioni su DOM sottoforma di stringhe.
        let contenitore = document.getElementById('cards');
        let card = document.createElement("div");
        card.innerHTML = `${Team.nome} ${Team.role} ${Team.foto}`;
        contenitore.append(card);       
        
    }
    


// BONUS 1:
// Trasformare la stringa foto in una immagine effettiva




// BONUS 2:
// Organizzare i singoli membri in card/schede.

