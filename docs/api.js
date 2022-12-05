urlprueba = "https://api.chucknorris.io/jokes/random?category=";

const getChiste = async () => {
    //const image = document.createElement('img');

    categoria = document.querySelector('#categorias'); //coge id=categorias
    valor = categoria.value;//cogemos animal
    link = urlprueba + valor;
	let request = await fetch(link);
	if (request.status === 200) {
		let data = await request.json();
		console.log(data);
	    document.getElementById("chiste").innerHTML = data.value; //instertamos el data en chiste
		document.getElementById("foto").innerHTML = data.icon_url;
	}
};



const getCredenciales = async () => {
	url="https://api.energomonitor.com/v1/";
	let request = await fetch(url);
	if (request.status === 200) {
		let data = await request.json();
		console.log(data);
	    document.getElementById("email").innerHTML = data.documentation_url; //insertamos el email en 
	}
}



getChiste();
getCredenciales();