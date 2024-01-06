

const elementsNames = [
    'rick', 'marty', 'craig', 'dan', 'gary', 'alex', 'jack', 'cross', 'pit', 'billy', 'bronze', 'silver', 'gold', 'brooch', 'fiber', 'bones', 'chain', 'map', 'coin', 'logo']

const elementsValues = 
    { rick: '10', marty: '10', craig: '10', dan: '5',
    gary: '50', alex: '5', jack: '5', cross: '4',
    pit: '1', billy: '1', bronze: '1', silver: '3',
    gold: '50', brooch: '4', fiber: '2', bones: '2',
    chain: '2', map: '3', coin: '5', logo: '50' }

function run(){
    let randomCol1 = randomize();
    let randomCol2 = randomize();
    let randomCol3 = randomize();
    let randomCol4 = randomize();
    let randomCol5 = randomize();

    // console.log(randomCol1);
    // console.log(randomCol2);
    // console.log(randomCol3);
    // console.log(randomCol4);
    // console.log(randomCol5);

    const getCol1 = document.getElementById('col1');
    const getCol2 = document.getElementById('col2');
    const getCol3 = document.getElementById('col3');
    const getCol4 = document.getElementById('col4');
    const getCol5 = document.getElementById('col5');

    getCol1.innerHTML = "";
    getCol2.innerHTML = "";
    getCol3.innerHTML = "";
    getCol4.innerHTML = "";
    getCol5.innerHTML = "";

    for (i = 0; i < 4; i++) {
        getCol1.innerHTML += '<img src="assets/' + randomCol1[i] + '.jpg" alt="image">';
        getCol2.innerHTML += '<img src="assets/' + randomCol2[i] + '.jpg" alt="image">';
        getCol3.innerHTML += '<img src="assets/' + randomCol3[i] + '.jpg" alt="image">';
        getCol4.innerHTML += '<img src="assets/' + randomCol4[i] + '.jpg" alt="image">';
        getCol5.innerHTML += '<img src="assets/' + randomCol5[i] + '.jpg" alt="image">';
    }
}

function randomize(){

    let items = [];
    for (let i = 0; i < 4; i++) {
        let randomNumber = Math.floor(Math.random() * 20); // Generate a random number between 0 and 19
        items.push(getName(randomNumber));
    }
    return items;
}

function getName(n){
    for (let i = 0; i < elementsNames.length; i++) {
        if (i === n) {
            return elementsNames[i];
        }
    }
}





