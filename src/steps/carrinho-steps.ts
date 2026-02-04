import { expect } from '@playwright/test';
import { Given, When, Then } from '../fixtures';
import { DataTable } from '@cucumber/cucumber';

Given('que entro no site {string}', async ({ homePage }, url) => {
  await homePage.page.goto(url);
});

Given('o carrinho de compras está vazio', async ({ page }) => {
  await page.evaluate(() => {
    window.localStorage.clear();
    window.sessionStorage.clear();
  });
  await page.reload();
});

When('o usuário digita {string} na barra de busca', async ({ homePage }, term) => {
  await homePage.buscarProduto(term);
});

When('clica no ícone de lupa', async () => {
  // Este passo já está embutido no buscarProduto, mas mantemos para o fluxo do BDD
});

When('clica no produto {string} na lista de resultados', async ({ homePage }, product) => {
  await homePage.selecionarProdutoDaLista(product);
});

When('clica no produto {string} na lista', async ({ homePage }, product) => {
  await homePage.selecionarProdutoDaLista(product);
});

When('na página do produto, altera a quantidade para {int}', async ({ produtoPage }, qty) => {
  await produtoPage.definirQuantidade(qty.toString());
});

When('clica no botão "ADD TO CART" na página do produto', async ({ produtoPage }) => {
  await produtoPage.adicionarAoCarrinho();
});

Then('o produto deve aparecer no canto superior direito da tela como adicionado', async ({ page }, dataTable: DataTable) => {
  const data = dataTable.hashes()[0];
  const cartPopUp = page.locator('#toolTipCart');
  await expect(cartPopUp).toBeVisible();
  await expect(cartPopUp).toContainText(data.Produto);
});

Then('ao verificar o carrinho de compras, o produto deve estar listado corretamente com a quantidade correta', async ({ produtoPage, carrinhoPage }, dataTable: DataTable) => {
  await produtoPage.abrirCarrinho();
  const data = dataTable.hashes()[0];
  await carrinhoPage.verificarProdutoNaTabela(data.Produto, data.Valor, data.Quantidade);
});

When('o usuário abre o carrinho de compras', async ({ produtoPage }) => {
  await produtoPage.abrirCarrinho();
});

When('altera a quantidade do produto {string} para {int}', async ({ carrinhoPage }, product, qty) => {
  await carrinhoPage.alterarQuantidade(product, qty.toString());
});

Then('o carrinho de compras deve refletir a nova quantidade e valor total', async ({ carrinhoPage }, dataTable: DataTable) => {
  const data = dataTable.hashes()[0];
  await carrinhoPage.verificarProdutoNaTabela(data.Produto, data.Valor, data.Quantidade);
});

When('remove o produto {string} do carrinho', async ({ carrinhoPage }, product) => {
  await carrinhoPage.removerProduto(product);
});

Then('o carrinho de compras deve estar vazio', async ({ page }) => {
  const emptyCartMsg = page.locator('#shoppingCart').getByText('Your shopping cart is empty');
  await expect(emptyCartMsg).toBeVisible();
});

Then('deve aparecer a mensagem {string}', async ({ page }, msg) => {
  await expect(page.locator('body')).toContainText(msg);
});

Then('deve aparecer o botao {string}', async ({ page }, btnName) => {
  const btn = page.getByRole('button', { name: btnName }).or(page.locator('a', { hasText: btnName }));
  await expect(btn).toBeVisible();
});

When('o usuário volta para a página inicial', async ({ homePage }) => {
  await homePage.irPara();
});

Then('o total do carrinho de compras deve ser {float}', async ({ carrinhoPage }, total) => {
  await carrinhoPage.verificarTotalDoCarrinho(total.toString());
});

When('clica no botão "CHECKOUT" no carrinho de compras', async ({ carrinhoPage, apiHelper, page }) => {
  await carrinhoPage.finalizarCompra();
});

Then('deve ser redirecionado para a página de login', async ({ page }) => {
  await expect(page).toHaveURL('#/login');
});

Then('os detalhes do produto {string} devem estar corretos na página de checkout', async ({ page }, product, dataTable: DataTable) => {
  const data = dataTable.hashes()[0];
  const orderItem = page.locator('#userCart tr', { hasText: product });

  await expect(page.locator('body')).toContainText(data.Produto);
  await expect(page.locator('body')).toContainText("QTY: " + data.Quantidade);
  await expect(page.locator('body')).toContainText(data.Valor);
});

Given('o usuário realiza login com email e senha válidos', async ({ loginPage, apiHelper }) => {
  const user = await apiHelper.createAndLoginUser();
  await loginPage.realizarLogin(user.loginName, user.password);
});