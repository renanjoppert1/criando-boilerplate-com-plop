# Configuração do Plop no Nuxt

## Primeiros Passos de Instalação

- Copie o plopfile.js na raiz do projeto
- Copie a pasta plop na raiz do projeto
- Adicione <strong>"plop": "plop"</strong> em scripts no package.json
- Execute <strong>npm install --save-dev plop</strong> no terminal

## Rodando

- No terminal execute <strong>npm run plop</strong>
- Selecione a tarefa que deseja executar
- Responda as perguntas
- Done! Thats works

## Ações criadas
- Criar estrutura de pastas e arquivos de crud em páginas
- Criar layouts
- Criar módulo da vuex

## Entendendo o Plop
O plopfile.js serve para carregar os nossos scripts para gerar nossos arquivos. Cada módulo ali contido será responsável por uma tarefa listada em <strong>npm run plop</strong>.

Com o objetivo de organizar, nossas configurações e templates do Plop está na pasta plop/ na raiz do projeto. 

Para cada módulo, teremos um arquivo js, que será importado no plopfile.js. 

Ao abrir o módulo, teremos a seguinte estrutura:

<pre>
module.exports = function(plop) {
  plop.setGenerator("Nome da Execução", {
    description: "Descrição da execução plop",
    /* prompts serve para pergutarmos algumas coisas para o usuário */
    prompts: [ 
      {
        type: "input",
        name: "varName", // nome da variável que será criada e que receberá o que o usuário digitar
        message: "Mensagem da pergunta. (Ex: Digite o nome do arquivo) "
      }
    ],
    /* Actions são as ações que iremos executar, neste caso iremos adicionar um arquivo no diretório src/ utilizando o template que está em : plop/templates/file-template.hbs */
    actions: [
      {
        type: "add",
        path: "src/{{varName}}.js",
        templateFile: "plop/templates/file-template.hbs"
      }
    ]
  });
};

</pre>

Após criar o script, precisaremos criar o template, então dentro de plop/ crie uma pasta templates e crie também o arquivo file-template.hbs

Coloque o seguinte código dentro do arquivo criado:

<pre>
console.log('Olá mundo. Arquivo: {{varName}}')
</pre>

O plop irá criar um arquivo js em src/ com o nome que vc digitou no console, que por sua vez substituí tudo o que está em {{varName}} pelo valor digitado. 

## Links Úteis
https://plopjs.com/
https://github.com/plopjs/plop
https://www.treinaweb.com.br/blog/plop-js-automatize-a-criacao-de-arquivos/
