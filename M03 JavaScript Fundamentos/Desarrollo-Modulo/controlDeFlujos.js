function viajar (destino){
    if(destino === 'Brasil') {
        console.log ('Gire a la ziquierda');
    } else if(destino === 'Argentina'){
        console.log('Gire a la derecha');
    } else{
        console.log('Nos perdimos')
    }
}

viajar('Prueba')


function puedeManejar (edad){
    if(edad => 18){
        console.log('True');
    } else {
        console.log('No False')
    }
}

puedeManejar(19)