module.exports = function(plop) {
  plop.setGenerator("Vuex Module", {
    description: "Gerador de módulo da Vuex",
    prompts: [
      {
        type: "input",
        name: "moduleName",
        message: "Digite o nome do módulo da Vuex: "
      }
    ],
    actions: [
      {
        type: "add",
        path: "store/{{moduleName}}.js",
        templateFile: "plop/templates/vuex-module-template.hbs"
      }
    ]
  });
};
