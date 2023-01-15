//urlprueba = "https://api.chucknorris.io/jokes/random?category=";

/*const getChiste = async () => {
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
};*/



let i=0;
const getCredenciales = async () => {
	datoDoc=document.querySelector('#sensores');
	dato=datoDoc.value;
	//dato="emjeor";
	link="https://api.energomonitor.com/v1/feeds/emjeic/streams/"+dato+"/data?limit=10";
	console.log(link);

	let request = await fetch(link, {
		method: 'GET',
		headers: new Headers({
			'Authorization': 'Bearer '+ '8Hbf70l1NF0L9wA1whSFzRZq1V3wxR'
		})
	});
	if (request.status === 200) {
		let data = await request.json();
		var timestamp = data[i][0];
		var date = new Date(timestamp*1000);
		var fecha ="Fecha: "+date.getDate()+ "/"+(date.getMonth()+1)+"/"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
		var dato = "Dato[Wh]: "+ data[i][1];
		document.getElementById("tiempo").innerHTML = fecha; 
	    document.getElementById("dato").innerHTML = dato;
		
	}
	i=i+1;
	if(i==10){
		i=0;
	}
}




//getChiste();
getCredenciales();