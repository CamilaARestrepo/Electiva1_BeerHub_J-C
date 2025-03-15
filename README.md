# 🍺 Electiva1_BeerHub_J-C

## 📚 Materia: ELECTIVA 1

### Proyecto: Consumo de API Beer

**Equipo C & J**

**Integrantes:**
- James Hincapie Mejia
- Camila Acevedo Restrepo

## Descripción del Proyecto

Nuestra aplicación en React está diseñada para interactuar con una API que proporciona información sobre cervezas disponibles en diferentes estados de los EE. UU.

### Funcionalidad Principal

**🔍 Búsqueda por Ciudad:** La aplicación permite a los usuarios realizar consultas sobre cervezas disponibles en distintas ciudades. Los usuarios ingresan el nombre de una ciudad y la aplicación utiliza esa información para consultar la API.

### Uso de Hooks y useFetch

La aplicación hace uso de los Hooks de React para manejar el estado y la lógica de la aplicación de manera eficiente. En particular, se utiliza el hook personalizado `useFetch`, el cual facilita la obtención de datos desde la API, gestionando tanto el estado de carga como los posibles errores durante la consulta.

### Información Presentada

Una vez realizada la consulta, la aplicación devuelve los siguientes datos relacionados con las cervezas disponibles en la ciudad seleccionada:
- 🍺 Nombre de la cerveza
- 🗺️ Estado donde está disponible
- 🏬 Ubicación o tienda donde se puede encontrar

## 🛠️ Instrucciones de Compilación

1. Clonar el proyecto:
    ```bash
    git clone https://github.com/CamilaARestrepo/Electiva1_BeerHub_J-C.git
    ```
2. Instalar dependencias:
    ```bash
    cd BeerHub_J-C
    npm install
    ```
3. Ejecutar la aplicación:
    ```bash
    npm start
    ```

## 📋 Requerimientos del Proyecto

- React
- JavaScript
- CSS
- HTML
