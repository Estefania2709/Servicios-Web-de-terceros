function Mostrar (){
    let request = new XMLHttpRequest();
    let x = document.getElementById("latitud").value ;
    let y = document.getElementById("longitud").vaulue;
    request.open("get","http://api.weatherstack.com/current?access_key=6cf099a9c4a86ac9e1e21860339ddc99&query=" + x + " , "+ y);


    request.onload = function(){
        let data = JSON.parse(this.response);
        console.log(data);

        let clima = document.getElementById("clima");
        clima.innerHTML = `
        <h2> Lugar: ${data.location.name}</h2>
        <p> Pais: ${data.location.country}</p>
        <p> La temperatura del lugar es: ${data.current.temperature}</p>
        <p> EL clima es es: ${data.current.weather_descriptions}</p>
        `;
    };
    request.send();
};
const btnbuscar = document.getElementById("btnbuscar");
btnbuscar.addEventListener("click",Mostrar);
    