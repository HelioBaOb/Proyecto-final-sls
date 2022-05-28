# Proyecto-final-sls
***
Este proyecto consiste en una pequeña lambda que devuelve información con base en un codigo postal que se introduce a través de la URL. Cuenta con su archivo de docker para crear
su respectiva imagen y empaquetar. Tambien cuenta con un archvivo test para pruebas y sus 2 archivos .yml, uno para la respectiva configuración de la lambda y otro para 
la delacración de las github actions.
Cabe recalcar que este proyecto cumple con ciertos puntos:
- La app en un contenedor
  * debe de utilizar docker-compose para todo lo que sea necesario
  * debe de tener un dockerFile
- Una suite de test que cubra por lo menos el 50% de código
- un flujo de CI/CD en Github Actions
  * no es necesario que esté disponible en AWS
  * utilizar un repo donde se vean los deploys (que los jobs se encuentren en verde)
- Utilizar Conventional Commits esto lo veré en sus repositorios para ello necesito la URL del mismo.
***
## Technologies
***
A list of technologies used within the project:
* [serverless](https://www.serverless.com): Version 2.72.3 
* [node.js](https://nodejs.org/en/): Version 14.15.1
* [Jest](https://jestjs.io): Version 28.1.0
* [Supertest](https://jestjs.io): Version 6.2.3
* [expressjs](https://expressjs.com): Version 4.18.1
