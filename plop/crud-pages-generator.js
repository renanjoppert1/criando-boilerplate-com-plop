module.exports = function(plop) {
  plop.setGenerator("CRUD Pages", {
    description: "Gerador de CRUD para Módulo de Páginas",
    prompts: [
      {
        type: "input",
        name: "nomeModulo",
        message: "Digite o nome do Módulo de Páginas CRUD: "
      }
    ],
    actions: [
      {
        type: "add",
        path: "pages/{{nomeModulo}}/index.vue",
        templateFile: "plop/templates/page-template.hbs"
      },
      {
        type: "add",
        path: "pages/{{nomeModulo}}/_slug.vue",
        templateFile: "plop/templates/page-template.hbs"
      },
      {
        type: "add",
        path: "pages/{{nomeModulo}}/add/index.vue",
        templateFile: "plop/templates/page-template.hbs"
      },
      {
        type: "add",
        path: "pages/{{nomeModulo}}/update/index.vue",
        templateFile: "plop/templates/page-template.hbs"
      }
    ]
  });
};
