const selectOptions = document.getElementById("selectOptions");
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (selectOptions.value === "fila 1") {
        pagarTiquet(selectOptions.value, 20);
    }
    if (selectOptions.value === "fila 2") {
        pagarTiquet(selectOptions.value, 40);
    }
    if (selectOptions.value === "fila 3") {
        pagarTiquet(selectOptions.value, 30);
    }
});

const pagarTiquet = (fila, capacidad) => {
    let numeroDeFila = fila;
    let numTiquet = capacidad;
    alert(`La fila seleccionada es ${fila} y la capaciad ${capacidad}`);

    let comprarTiquet = prompt("Ingrese el numero de tikets");

    if (isNaN(comprarTiquet)) {
      $alert.innerText = `es obvio que ${comprarTiquet} no es una opcion valida`;
    }

    if (comprarTiquet > numTiquet) {
      $alert.innerText = `la capaciodad de la fila ${numeroDeFila} fue dada al inicion`;
    }

    if (comprarTiquet <= 0) {
      $alert.innerText = `si desae comprar tikets ingrese un numero diferente a ${comprarTiquet}`;
    }

    // if(comprarTiquet <= 0){
    //     alert
    // }
    if (numTiquet >= comprarTiquet && comprarTiquet > 0) {
        numTiquet = numTiquet - comprarTiquet;
        let pregunta = confirm(`Desea comprar para la fila ${numeroDeFila}`);
        // if(comprarTiquet > numTiquet) {
        //     alert(`la capacidad de la fila `)
        // }
        while (pregunta && numTiquet >= comprarTiquet) {
            comprarTiquet =
                prompt(
                    `Tiquet disponibles en ${numeroDeFila} (${numTiquet}), Ingrese el numero de tiquets: `
                )
            numTiquet = numTiquet - comprarTiquet;
            pregunta = confirm("Desea comprar mas tiquets?");
        }
        if (numTiquet === 0) {
            alert(
                `La capacidad de la fila ${numeroDeFila} esta completa, le recomendamos irse pa la puta mierda`
            );
        }
    }

    ///////ciebttttt
};