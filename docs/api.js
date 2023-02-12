
let i=0;
const getCredenciales = async () => {
	datoDoc=document.querySelector('#sensores');
	dato=datoDoc.value;

	//tiempo inicial
	tiempoInicioDoc=document.getElementById("inicio");
	tiempoI=tiempoInicioDoc.value;
	for (var i=0;i<11;i++){
		var dateString = tiempoI;
		var date = new Date(dateString);
		var timestampInicio= (date.getTime()/1000);
	}
	tiempoInicio=timestampInicio;
	

	//tiempo final
	tiempoFinalDoc=document.getElementById("final");
	tiempoF=tiempoFinalDoc.value;
	for (var i=0;i<11;i++){
		var dateString = tiempoF;
		var date = new Date(dateString);
		var timestampFinal= (date.getTime()/1000);
	}
	tiempoFinal=timestampFinal;

	
	link="https://api.energomonitor.com/v1/feeds/emjeic/streams/"+dato+"/data?data_time_from="+tiempoInicio+"&data_time_to="+tiempoFinal;
	console.log(link);

	let request = await fetch(link, {
		method: 'GET',
		headers: new Headers({
			'Authorization': 'Bearer '+ '0tawywjEOw9rmaF2y49dFefePwa4Ya'
		})
	});
	if (request.status === 200) {
		let data = await request.json();
		var table = document.getElementById("table");
		var timestamp = data[i][0];
		var date = new Date(timestamp*1000);
		var fecha =date.getDate()+ "/"+(date.getMonth()+1)+"/"+date.getFullYear()
		var hora=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
		var datoFinal = data[i][1];

		document.getElementById("fecha").innerHTML = fecha; 
		document.getElementById("hora").innerHTML = hora; 
	    document.getElementById("dato").innerHTML = datoFinal;

		
	}
	i=i+1;
	if(i==10){
		i=0;
	}
}

getCredenciales();

