// comentario JS



function ex1() {
    //criando uma mensagem de aviso
    //alert ('Calculado!');

    var v0 = document.getElementById('v0').value;
    const g = 10 //aceleracao gravitacional 10m/s^2
    var temp = (v0 / g)
    var Hmax = ( v0 ** 2) /( g * 2 )

    
    document.getElementById('vem').innerHTML = "tempo maximo = " + temp + " e altura maxima = " + Hmax;
    console.log("tempo maximo = " + temp + " e altura maxima" + Hmax);
    document.getElementById("v0").value = ""
}

