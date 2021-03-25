module.exports = function(plop) {
  plop.setGenerator("Layout", {
    description: "Gerador de layout",
    prompts: [
      {
        type: "input",
        name: "nomeLayout",
        message: "Digite o nome do layout: "
      }
    ],
    actions: [
      {
        type: "add",
        path: "layouts/{{nomeLayout}}.vue",
        templateFile: "plop/templates/layout-template.hbs"
      }
    ]
  });
};
