import { test as base, createBdd } from 'playwright-bdd';
import { HomePage } from './pages/home-page';
import { ProdutoPage } from './pages/produto-page';
import { CarrinhoPage } from './pages/carrinho-page';
import { ApiHelper } from './utils/api-helper';
import {LoginPage} from './pages/login-page';

type MyFixtures = {
  homePage: HomePage;
  produtoPage: ProdutoPage;
  carrinhoPage: CarrinhoPage;
  apiHelper: ApiHelper;
  loginPage: LoginPage;
};

export const test = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => await use(new HomePage(page)),
  produtoPage: async ({ page }, use) => await use(new ProdutoPage(page)),
  carrinhoPage: async ({ page }, use) => await use(new CarrinhoPage(page)),
  apiHelper: async ({ request }, use) => await use(new ApiHelper(request)),
  loginPage: async ({ page }, use) => await use(new LoginPage(page)),
});

export const { Given, When, Then } = createBdd(test);