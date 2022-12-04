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
	link="https://api.energomonitor.com/v1/users/usoxx?token=qHKdM7pq09pzn4j5puflfXGaP42HH4";
	
	let request = await fetch(link);
	if (request.status === 200) {
		let data = await request.json();
		console.log(data);
	    document.getElementById("email").innerHTML = data.email; //insertamos el email en 
	}
}



getChiste();
getCredenciales();