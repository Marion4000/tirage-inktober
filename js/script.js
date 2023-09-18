// Création du tableau des noms
let nomStyle =['Animal Crossing', 'Angela Anaconda', 'L’attaque des titans', 'Les aristochats', 'Carmen Sandiego', 'Code Lyoko', 'Dangaronpa', 'Dragon ball', 'L’étrange Noël de Mr Jack','Zelda TOTK', 'Frankenweenie','Happy Tree Friends', 'Hercule', 'Hilda', 'Jujutsu Kaisen', ' Kid Paddle','Kuzco','Le laboratoire de Dexter','Lego', 'Lilo & Stitch', 'Octopath Traveler', 'Paper Mario', 'Pokémon Jaune', 'Le royaume des chats', 'Sailor Moon', 'Spiritfarer', 'Les supers Nanas', 'Les totally spies', 'Wakfu', 'W.I.T.C.H.', 'Zelda : Link’s awakening']
// Création du tableau des URLs
let urls =[
    './médias/acnh.png',
    './médias/angela-anaconda.png',
    './médias/aot.png',
    './médias/aristochats.png',
    './médias/carmen-sandiego.png',
    './médias/code-lyoko.png',
    './médias/danganronpa.png',
    './médias/dragonball.png',
    './médias/etrange-noel-mr-jack.png',
    './médias/zelda-totk.png',
    './médias/Frankenweenie.png',
    './médias/happy-tree-friends.png',
    './médias/hercule.png',
    './médias/hilda.png',
    './médias/jujutsu-kaisen.png',
    '/médias/kid-paddle.png',
    './médias/kuzco.png',
    './médias/laboratoire-dexter.png',
    './médias/lego.png',
    './médias/lilo-stitch.png',
    '/médias/octopath-traveler.png',
    './médias/paper-mario.png',
    './médias/pokemon-jaune.png',
    './médias/royaume-des-chats.png',
    './médias/sailor-moon.png',
    './médias/spiritfarer.png',
    './médias/super-nanas.png',
    './médias/totally-spies.png',
    './médias/wakfu.png',
    './médias/witch.png',
    './médias/zelda-links-awakening.png'
]
//Création du tableau des styles 
let styles =[nomStyle, urls];
// console.log(styles[0][25]);
// console.log(styles[1][25]);


// Fonction génération d’un nombre aléatoire
let random = function(min, max){
    return Math.round(Math.random()*(max-min)+min);
}


// Fonction de génération aléatoire d’un nombre entre 0 et 30
let fonctionRandom = function(){
    random(0,30);
}

// Création de la variable nombre
let nombre = random(0,30);


// Évènement clic sur le bouton 

// Déclaration du bouton 
let btn = document.getElementById('btn-selection');


// fonction afficher le contenu du tableau par rapport au nombre tiré 
let selectionStyle = function(){
    // variable nom
    let nom = '- ' + styles[0][nombre];
    
    // Modifier le nom du style en HTML
    // Sélectionner le span dans le DOM
    let spanNom = document.getElementById('nom-style');
    spanNom.innerHTML = nom;


    // Afficher l’image

    //Variables div parent + création img + numéro image
    let divImage = document.getElementById('image-style');
    let imageStyle = document.createElement('img');
    let urlImage = styles[1][nombre] ;

    // Affecter une classe à l’image
    imageStyle.setAttribute("class","image-style");

    //Compléter l’attribut src 
    imageStyle.setAttribute("src", urlImage);

    // Insérer l’image dans la div 
    divImage.appendChild(imageStyle);
}

// Disparition du bouton 
let disparitionBtn = function(){
    btn.setAttribute('class','invisible');
}

// Retrait de la classe invisible à la div image
let retraitInvisible = function(){
    document.getElementById('image-style').classList.remove("invisible");
}

let clicBtn = function(){
    selectionStyle()
    disparitionBtn()
    retraitInvisible()
}

// évènement clic
btn.addEventListener('click', clicBtn);
