const ducks = [
    {
        color: "blue",
        isRubber: true,
        gender: "female",
        isMigrator: false,
        socialStatus: "ready to mingle",
        diet: "vegan",
        age: 47,
        featherNum: 0,
        name: "Regina",
        imageUrl: "https://cdn11.bigcommerce.com/s-nf2x4/images/stencil/1280x1280/products/885/9633/Navy-Blue-Rubber-Duck-Adline-3__81336.1568313092.jpg?c=2&imbypass=on",
    },
    {
        color: "yellow",
        isRubber: true,
        gender: "female",
        isMigrator: false,
        socialStatus: "introvert",
        diet: "chicken",
        age: 5,
        featherNum: 0,
        name: "Riley",
        imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71Bn2jnG6gL._SX425_.jpg",
    },
    {
        color: "red",
        isRubber: true,
        gender: "female",
        isMigrator: false,
        socialStatus: "life of the party",
        diet: "pizza",
        age: 23,
        featherNum: 0,
        name: "Virgina",
        imageUrl: "https://image.made-in-china.com/2f0j00vRiUyBEWJgop/Squeaky-Xmas-Gift-Red-Rubber-Duck-with-Christmas-Hat.jpg",
    },
    {
        color: "blue",
        isRubber: false,
        gender: "male",
        isMigrator: true,
        socialStatus: "working dad",
        diet: "grass",
        age: 55,
        featherNum: 10000,
        name: "Steve",
        imageUrl: "https://www.shopmascot.com/image/cache/new/17040622-800x800.jpg",
    },
    {
        color: "yellow",
        isRubber: false,
        gender: "male",
        isMigrator: true,
        socialStatus: "funky duck",
        diet: "eggs",
        age: 102,
        featherNum: 30000,
        name: "Ronald",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdUGPKFzIB32cyhTHJ3NkL8-QficP5Pp0CiuHOUcZcb1aqKroWqw&s",
    },
    {
        color: "red",
        isRubber: false,
        gender: "male",
        isMigrator: true,
        socialStatus: "homebody",
        diet: "steak",
        age: 25,
        featherNum: 200,
        name: "George",
        imageUrl: "https://www.purelypoultry.com/images/red-crested-pochard-ducks.jpg",
    },
    {
        color: "blue",
        isRubber: true,
        gender: "male",
        isMigrator: false,
        socialStatus: "king",
        diet: "fish",
        age: 13,
        featherNum: 0,
        name: "Ringo",
        imageUrl: "https://lilalu-shop.com/media/image/81/f6/59/1513_f_600x600.png",
    },
    {
        color: "yellow",
        isRubber: true,
        gender: "male",
        isMigrator: false,
        socialStatus: "sport lover duck",
        diet: "burgers",
        age: 87,
        featherNum: 0,
        name: "Paul",
        imageUrl: "https://cdn.shopify.com/s/files/1/0604/4801/products/IMG_2243_clipped_rev_1-min.jpeg?v=1505806579",
    }  
];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const duckPrinter = (quacks) => {
    let domString = "";
    for (let i = 0; i < quacks.length; i++) {
        domString += '<div class="col-md-6 col-lg-4">';
        domString +=    '<div class="card">';
        domString +=        `<img src="${quacks[i].imageUrl}" class="card-img-top" alt="...">`;
        domString +=        '<div class="card-body">';
        domString +=            `<h5 class="card-title">${quacks[i].name}</h5>`;
        domString +=            `<p class="card-text">${quacks[i].socialStatus}</p>`;
        domString +=            `<p class="card-text">${quacks[i].diet}</p>`;
        domString +=        '</div>'
        domString +=    '</div>'
        domString += '</div>'
    };
    printToDom('duckInfo', domString);
};

const choseColor = (e) => {
    const buttonId = e.target.id;
    const selectedDucks = [];
    for (let i = 0; i < ducks.length; i++){
        if(ducks[i].color === buttonId){
            selectedDucks.push(ducks[i]);
        }
    }
    duckPrinter(selectedDucks);
};

const choseGender = (e) => {
    const buttonId = e.target.id;
    const selectedDucks = [];
    for (let i = 0; i < ducks.length; i++){
        if(ducks[i].gender === buttonId){
            selectedDucks.push(ducks[i]);
        }
    }
    duckPrinter(selectedDucks);
};



const choseRubber = () => {
    console.log('rubber!');
};

const events = () => {
    document.getElementById('blue').addEventListener('click', choseColor);
    document.getElementById('red').addEventListener('click', choseColor);
    document.getElementById('yellow').addEventListener('click', choseColor);
    document.getElementById('female').addEventListener('click', choseGender);
    document.getElementById('male').addEventListener('click', choseGender);
    document.getElementById('rubber').addEventListener('click', choseRubber);
};



const init = () => {
    duckPrinter(ducks);
    events();
};

init();


