function selectRandomDivs() {
    // Get all div elements with the class "random-div"
    const divs = document.querySelectorAll('.random-div');
            
    // Remove any existing 'selected' class
    divs.forEach(div => div.classList.remove('selected'));
            
    // Convert NodeList to Array for easy manipulation
    const divArray = Array.from(divs);
            
    // Shuffle the array
    for (let i = divArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [divArray[i], divArray[j]] = [divArray[j], divArray[i]];
    }
            
    // Select the first 4 elements from the shuffled array
    const selectedDivs = divArray.slice(0, 3);
            
    // Add the 'selected' class to the selected elements
    selectedDivs.forEach(div => div.classList.add('selected'));
}

function start() {
    var hidden_start = document.getElementById('start')
    hidden_start.classList.add('div-hidden')
}
function next_1() {
    var hidden_1 = document.getElementById('random-div-1')
    hidden_1.classList.add('div-hidden')
}
function next_2() {
    var hidden_2 = document.getElementById('random-div-2')
    hidden_2.classList.add('div-hidden')
}
function next_3() {
    var hidden_3 = document.getElementById('random-div-3')
    hidden_3.classList.add('div-hidden')
}
function next_4() {
    var hidden_4 = document.getElementById('random-div-4')
    hidden_4.classList.add('div-hidden')
}
function next_5() {
    var hidden_5 = document.getElementById('random-div-5')
    hidden_5.classList.add('div-hidden')
}
function next_6() {
    var hidden_6 = document.getElementById('random-div-6')
    hidden_6.classList.add('div-hidden')
}

        
// 文字列の配列
const strings = [
    "内村ダム",
    "布引五本松ダム",
    "二瀬ダム",
    "志津見ダム",
    "川浦ダム"
];

// ランダムな文字列を選んで表示する関数
function showRandomString() {
    // 文字列の数を取得
    const randomIndex = Math.floor(Math.random() * strings.length);
    // 選ばれた文字列を取得
    const randomString = strings[randomIndex];
    // HTMLに表示
    document.getElementById('result').innerText = randomString;
}

window.onload = selectRandomDivs();
window.onload = showRandomString()();
