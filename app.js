// Función para encriptar el texto
function encriptarTexto(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

// Función para desencriptar el texto
function desencriptarTexto(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

// Función de validación
function validarTexto(texto) {
    const regex = /^[a-z\s]*$/;
    return regex.test(texto);
}

// Función para mostrar el resultado según la operación
function mostrarResultado(textoProcesado, tipoOperacion) {
    const salidaTexto = document.getElementById("salidaTexto");
    const mensajePredeterminado = document.getElementById("mensajePredeterminado");
    const imagenEstado = document.getElementById("imagenEstado");
    const contenedorCopiar = document.getElementById("contenedorCopiar");

    // Mostrar el cuadro de texto y el botón de copiar
    salidaTexto.style.display = "block";
    contenedorCopiar.style.display = "block";

    // Restablecer clases de animación
    imagenEstado.classList.remove("imagen-cerrar-animacion", "imagen-abrir-animacion");

    // Animar la imagen y cambiar el mensaje según la operación
    if (tipoOperacion === "encriptar") {
        imagenEstado.classList.add("imagen-cerrar-animacion");

        setTimeout(() => {
            imagenEstado.src = "imagenes/Encriptar.webp";
            mensajePredeterminado.innerHTML = "<strong>Mensaje Encriptado</strong>";
            imagenEstado.classList.remove("imagen-cerrar-animacion");
            imagenEstado.classList.add("imagen-abrir-animacion");
        }, 1000);
    } else if (tipoOperacion === "desencriptar") {
        imagenEstado.classList.add("imagen-cerrar-animacion");

        setTimeout(() => {
            imagenEstado.src = "imagenes/Desencriptar.webp";
            mensajePredeterminado.innerHTML = "<strong>Mensaje Desencriptado</strong>";
            imagenEstado.classList.remove("imagen-cerrar-animacion");
            imagenEstado.classList.add("imagen-abrir-animacion");
        }, 1000);
    }

    // Mostrar el texto procesado
    salidaTexto.value = textoProcesado;
}

// Función para habilitar/deshabilitar botones en base a si hay texto ingresado
function actualizarEstadoBotones() {
    const texto = document.getElementById("entradaTexto").value.trim();
    const botones = document.querySelectorAll("#btnEncriptar, #btnDesencriptar, #btnBorrar, #btnCopiar");

    botones.forEach(boton => {
        boton.disabled = texto.length === 0;
    });
}

// Función para aplicar un destello a la imagen y la columna izquierda
function animarDestelloImagen(imagenEstado) {
    imagenEstado.classList.add("destello-animado");

    // Eliminar la clase de animación después de completarse
    setTimeout(() => {
        imagenEstado.classList.remove("destello-animado");
    }, 2000); // Duración del destello lento
}

function animarDestelloColumnaIzquierda() {
    const columnaIzquierda = document.querySelector(".columna-izquierda");
    columnaIzquierda.classList.add("destello-animado");

    // Eliminar la clase de animación después de completarse
    setTimeout(() => {
        columnaIzquierda.classList.remove("destello-animado");
    }, 500);
}

// Encriptar, animar y mostrar el resultado
document.getElementById("btnEncriptar").addEventListener("click", function () {
    const texto = document.getElementById("entradaTexto").value;

    if (!validarTexto(texto)) {
        alert("Por favor, ingrese solo letras minúsculas y sin acentos.");
        return;
    }

    const textoEncriptado = encriptarTexto(texto);
    mostrarResultado(textoEncriptado, "encriptar");
    animarDestelloImagen(document.getElementById("imagenEstado"));
    animarDestelloColumnaIzquierda();
});

// Desencriptar, animar y mostrar el resultado
document.getElementById("btnDesencriptar").addEventListener("click", function () {
    const texto = document.getElementById("entradaTexto").value;

    if (!validarTexto(texto)) {
        alert("Por favor, ingrese solo letras minúsculas y sin acentos.");
        return;
    }

    const textoDesencriptado = desencriptarTexto(texto);
    mostrarResultado(textoDesencriptado, "desencriptar");
    animarDestelloImagen(document.getElementById("imagenEstado"));
    animarDestelloColumnaIzquierda();
});

// Función para copiar el texto al portapapeles
document.getElementById("btnCopiar").addEventListener("click", function () {
    const texto = document.getElementById("salidaTexto");
    texto.select();
    document.execCommand("copy");

    // Cambiar el color del botón al copiar
    const botonCopiar = document.getElementById("btnCopiar");
    botonCopiar.style.backgroundColor = "#28a745";
    botonCopiar.textContent = "Copiado!";
});

// Función para borrar el texto de entrada y restablecer el estado inicial
document.getElementById("btnBorrar").addEventListener("click", function () {
    const entradaTexto = document.getElementById("entradaTexto");
    entradaTexto.value = "";  // Limpiar el campo de texto

    const salidaTexto = document.getElementById("salidaTexto");
    const mensajePredeterminado = document.getElementById("mensajePredeterminado");
    const imagenEstado = document.getElementById("imagenEstado");
    const contenedorCopiar = document.getElementById("contenedorCopiar");

    salidaTexto.style.display = "none";
    contenedorCopiar.style.display = "none";

    imagenEstado.classList.remove("imagen-cerrar-animacion", "imagen-abrir-animacion");
    imagenEstado.classList.add("destello-animado");

    setTimeout(() => {
        imagenEstado.src = "imagenes/Neutro.webp";
        mensajePredeterminado.innerHTML = "<strong>Ningún mensaje fue encontrado</strong><p>Ingresa el texto que deseas encriptar o desencriptar</p>";
        imagenEstado.classList.remove("destello-animado");
    }, 2000); // Duración prolongada para un destello lento

    const botonCopiar = document.getElementById("btnCopiar");
    botonCopiar.style.backgroundColor = "#28a745";
    botonCopiar.textContent = "Copiar";

    animarDestelloImagen(imagenEstado);
    animarDestelloColumnaIzquierda();

    actualizarEstadoBotones();
});

// Evento para actualizar el estado de los botones cuando el usuario escribe
document.getElementById("entradaTexto").addEventListener("input", actualizarEstadoBotones);

// Deshabilitar los botones al inicio
actualizarEstadoBotones();
