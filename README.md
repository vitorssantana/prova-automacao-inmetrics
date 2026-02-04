Esse projeto tem como objetivo automatizar de ponta a ponta o fluxo de checkout da aplicacao AdvantageOnlineShopping, utilizando as melhores praticas possiveis.

#### Stack utilizada:
  - Playwright: Framework moderno para automacao de navegadores, que permite a escrita rapida e facil de testes E2E e de API.
  - Typescript: Linguagem de programacao derivada do Javascript com tipagem estática, reduzindo erros em tempo de desenvolvimento.
  - Cucumber (playwright-bdd): Escrita de cenarios de testes em formato Gherkin.
  - Faker.js: Ferramenta que permite a geracao de dados fake para testes.
  - GitHub Actions: Esteira de CI/CD do github integrada ao repositorio do projeto.

#### Estrutura do Projeto:
O projeto foi estruturado utilizando o padrao de projeto POM (Page Object Model). um padrao muito utilizado para poder organizar os testes E2E de maneira que melhore a manutencao e a legibilidade do codigo.
Organização de Pastas:
  - features/: Features das funcionalidades escritas em Gherkin.
  - src/pages/: Classes Page Objects contendo os seletores e interações com a tela.
  - src/utils/: Arquivos utilitarios do projeto
    - data-factory.ts: Gerador de massa de dados dinâmico (Usuario fake).
    - api-helper.ts: Métodos de apoio para setup via API (Criação de usuários).
  - .github/workflows/: Configuração da esteira de CI/CD.

#### Cobertura de Testes
Os seguntes cenarios dentro da funcionalidade de stack foram cobertos:
   - Adicionar mais quantidadede de um mesmo produto ao carrinho
   - Editar a quantidade de um produto já adicionado no carrinho
   - Remover os produtos do carrinho de compras
   - Verificar o total do carrinho após adicionar produtos
   - Realizar checkout a partir do carrinho de compras
