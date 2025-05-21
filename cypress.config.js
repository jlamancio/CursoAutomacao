const { defineConfig } = require("cypress");

module.exports = defineConfig({

  viewportWidth: 1440,
  viewportHeight: 900,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
      baseUrl: "http://127.0.0.1:5500/'"
      chromeWebSecurity: false
      defaultCommandTimeout: 10000        /* altera valor padrão de timeout de 4'' para 10 '' */
      video: true                         /* modo: headless                                */
      screenshots:true                    /* modo: headless                                */
      pageLoadTimeout: 50000              /* tempo para a execução da página               */
      responseTimeout: 50000              /* tempo de resposta da API de 30'' para 50''    */       
      numTestsKeptInMemory: 20            /* limite de testes - comandos em memória        */

    },
  },
});
