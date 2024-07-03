const addButton = document.getElementById('addButton');
const userInput = document.getElementById('userInput');
const output = document.getElementById('output');

//ランダムな返信リスト
const responses = [
    "にゃー","ほわー","ほにゃー","シャー","ごろにゃー"
];

addButton.addEventListener('click', function() {
    //入力内容取得
    const text = userInput.value;

    if (text.trim() !== '') {
        //送信内容div作成
        const newItem = document.createElement('div');
        newItem.textContent = text;
        newItem.classList.add('message');

        //送信内容を追加
        output.appendChild(newItem);

        //ランダムに返信を選択
        const randomIndex = Math.floor(Math.random() * responses.length);
        const responseText = responses[randomIndex];

        // 返信div作成
        const responseItem = document.createElement('div');
        responseItem.textContent = responseText;
        responseItem.classList.add('response');

        //返信を追加
        output.appendChild(responseItem),

        //入力欄をリセット
        userInput.value = '';
    } else {
        alert('何かしらは入力してね');
    }
});
