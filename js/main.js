var Form = document.querySelector('.form');
var List = document.querySelector('.list');
var date = document.querySelector('.date');

var arr = [];
Form.addEventListener('submit', function(e) {
    e.preventDefault();

    var obj = {
        url: e.target.url.value,  
        name: e.target.name.value,
        count: e.target.count.value,
    };
    arr.push(obj);
    fn(arr);
});


function fn(arr) {
    List.innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
        let newLi = document.createElement('li');
        newLi.innerHTML = `<img src="${arr[i].url}" alt=""><b class="bold">${arr[i].name}</b><p class="cont">${arr[i].count} so'm </p>`;
        List.appendChild(newLi);
    }
}




function sana() {
    var sana = document.querySelector('.date');
    var sanaKey = new Date();
    var sanaKorinishi = sanaKey.getDate() + '.' + (sanaKey.getMonth() + 1) + '.' + sanaKey.getFullYear();
    sana.textContent = sanaKorinishi;
}

function vaqt() {
    var vaqt = document.querySelector('.time');
    var vaqtKey = new Date();
    var vaqtKorinishi = vaqtKey.getHours() + ':' + vaqtKey.getMinutes() + ':' + vaqtKey.getSeconds();
    vaqt.textContent = vaqtKorinishi;
}

setInterval(vaqt, 1000);