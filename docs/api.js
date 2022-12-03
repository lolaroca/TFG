url = "https://api.chucknorris.io/jokes/random?category=";

const getChiste = async () => {
    //const image = document.createElement('img');

    categoria = document.querySelector('#categorias');
    valor = categoria.value;
    link = url + valor;
	let request = await fetch(link);
	if (request.status === 200) {
		let data = await request.json();
		console.log(data);
	    document.getElementById("chiste").innerHTML = data.value;
		document.getElementById("foto").innerHTML = data.icon_url;
	}
};

getChiste();