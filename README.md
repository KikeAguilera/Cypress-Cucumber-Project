Guía Rápida para Instalar y Ejecutar Pruebas Automatizadas en Cypress

Prerequisitos:

1. Node JS
2. VS Code


Pasos:

1. Abre la terminal y navega hasta la carpeta del proyecto y ejecuta el comando npm init -y
2. Instala Cypress y todas las dependencias ejecutando los siguientes comandos:
    npm install cypress --save-dev
    npm install @badeball/cypress-cucumber-preprocessor --save-dev
    npm install @cypress/browserify-preprocessor --save-dev
3. Ejecuta Cypress:
    npx cypress open

Integrado con:

- [x] https://github.com/badeball/cypress-cucumber-preprocessor
- [x] https://github.com/bahmutov/cypress-esbuild-preprocessor
(+ bundlers: https://github.com/badeball/cypress-cucumber-preprocessor/tree/master/examples)