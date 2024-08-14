# Encriptador de Texto

Este proyecto es una aplicación web que permite encriptar y desencriptar textos utilizando un conjunto específico de reglas de transformación de caracteres. Es una herramienta útil para proteger mensajes simples, haciendo que el contenido sea más difícil de leer a simple vista.

## Descripción

El encriptador de texto está diseñado para transformar vocales en secuencias de caracteres únicas. La funcionalidad básica del encriptador incluye tres operaciones principales: encriptar, desencriptar y borrar texto. Además, cuenta con una interfaz visualmente atractiva con una temática espacial que incluye animaciones para mejorar la experiencia del usuario.

### Reglas de Encriptación

El encriptador transforma las vocales en secuencias específicas según las siguientes reglas:

- La letra `e` se convierte en `enter`
- La letra `i` se convierte en `imes`
- La letra `a` se convierte en `ai`
- La letra `o` se convierte en `ober`
- La letra `u` se convierte en `ufat`

Por ejemplo, el texto "hola mundo" se encriptará como "hoberlai mufatndober".

### Reglas de Desencriptación

La función de desencriptación revierte las transformaciones anteriores:

- `enter` se convierte en `e`
- `imes` se convierte en `i`
- `ai` se convierte en `a`
- `ober` se convierte en `o`
- `ufat` se convierte en `u`

Usando el ejemplo anterior, "hoberlai mufatndober" se desencriptará de nuevo a "hola mundo".

## Funcionalidades

### 1. Encriptar
Permite al usuario transformar un texto de entrada en una versión encriptada según las reglas mencionadas anteriormente.

### 2. Desencriptar
Permite revertir la encriptación y recuperar el texto original.

### 3. Borrar
Esta función limpia el campo de entrada de texto, restablece la interfaz al estado predeterminado, y elimina cualquier texto encriptado o desencriptado mostrado.

### 4. Copiar
Permite al usuario copiar el texto encriptado o desencriptado al portapapeles para utilizarlo en otra aplicación o contexto.

## Interfaz de Usuario

La interfaz está diseñada con una temática espacial. Incluye las siguientes características visuales:

- **Caja de texto de entrada**: Donde el usuario introduce el texto que desea encriptar o desencriptar.
- **Botones**: Tres botones principales (Encriptar, Desencriptar, Borrar) para interactuar con la aplicación.
- **Área de salida de texto**: Donde se muestra el texto encriptado o desencriptado.
- **Imágenes animadas**: Cambian dinámicamente según la operación realizada (encriptar, desencriptar, borrar) e incluyen efectos visuales como destellos.
- **Interfaz Responsiva**: La aplicación se adapta a diferentes tamaños de pantalla para asegurar una experiencia de usuario consistente tanto en dispositivos móviles como en escritorios.

## Cómo Usar

1. **Ingresar texto**: Escribe el texto que deseas encriptar o desencriptar en el campo de entrada.
2. **Seleccionar una acción**:
   - Haz clic en "Encriptar" para transformar el texto.
   - Haz clic en "Desencriptar" para revertir la encriptación.
   - Haz clic en "Borrar" para limpiar el campo de texto y reiniciar la interfaz.
3. **Copiar texto**: Si lo deseas, puedes copiar el texto encriptado o desencriptado usando el botón "Copiar".

## Instalación y Ejecución

Este proyecto es una aplicación web estática, por lo que puedes ejecutarlo en cualquier navegador moderno. Solo necesitas descargar los archivos, abrir `index.html` en tu navegador, y comenzar a utilizar el encriptador.

## Tecnologías Utilizadas

- **HTML5**: Para la estructura del contenido.
- **CSS3**: Para el diseño y las animaciones.
- **JavaScript**: Para la funcionalidad interactiva.

---

Desarrollado por Brian Romero - 2024.
