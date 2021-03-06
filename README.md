# MGO

Este es el proyecto final del curso de React JS de Coder House, desarrollado por Enrique Slosse.
Se trata de una aplicacion web de un E-Commerce.

![] (https://github.com/slosse/mgo-slosse/blob/main/public/img/app.gif)
## Descripcion:
Desde la pantalla inicial se selecciona un producto haciendo click en comprar. Se le agrega la cantidad y por ultimo se hace click en Agregar al carrito. En este momento ya tenemos el primer producto en el carrito de compras.
Luego, desde la categoria Tango se elige otro producto, se le agrega la cantidad y se envia al carrito de compras. 
Con el boton Ir al carrito podemos ver nuestros productos seleccionados a comprar, con su precio unitario total y cantidad.
Al presionar el boton finalizar la comprar la app nos solicita que carguemos los datos de compra, habriendo un toggle.
Cargando los datos obligatorios nos habilita para finalizar la compra.
Finalmente el sistema nos confirma que nuestros pedido fue realizado con exito.


Este proyecto se realizo con tecnologia JS y librerias de React.

La creacion se realizo con [Create React App](https://github.com/facebook/create-react-app).

Para mejorar los estilos se utilizo Bootstrap.

Para la navegación de componentes se utilizo Rect Router.

La base de datos utilizada es Firebase Database.

El login se realiza con los servicios de autenticacion de Firebase, en este caso Google y Facebook.

Cada uno de los componentes desarrollados se encuentran en carpetas separadas, con el archivo index correspondiente y se exporta por default el objeto del mismo nombre.

Para mantener estados generales de la app se utiliza Context.


## Guia de Instalacion

Clonar el proyecto
### `git clone https://github.com/slosse/mgo-slosse`

## Instalar Bootstrap

En el directorio del proyecto, ejecutar:
### `npm install bootstrap`

## Instalar React Router

En el directorio del proyecto, ejecutar:
### `npm install react-router-dom`

## Instalar Firebase

En el directorio del proyecto, ejecutar:
### `npm install firebase`

### Configurar Firebase
Modificar el archivo .env.example: reeemplazar las credenciales y modificar el nombre a .env


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
