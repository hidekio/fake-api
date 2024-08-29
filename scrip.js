//Conectar com a API utilizando FETCH

fetch('dados.json').then(resposta => resposta.json()).then(corpo =>{
    console.log(corpo)

    document.getElementById('image').innerHTML = corpo.image;
    document.getElementById('name').innerHTML = corpo.name;
    document.getElementById('album').innerHTML = corpo.album;
    document.getElementById('style').innerHTML = corpo.style;
    document.getElementById('price').innerHTML = corpo.price;

})