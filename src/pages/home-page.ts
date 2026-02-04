import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly botaoBusca: Locator;
  readonly campoBusca: Locator;

  constructor(page: Page) {
    this.page = page;
    this.botaoBusca = page.locator('#menuSearch');
    this.campoBusca = page.locator('#autoComplete');
  }

  async irPara() {
    await this.page.goto('/');
  }

  async buscarProduto(produto: string) {
    await this.botaoBusca.click();
    await this.campoBusca.fill(produto);
    await this.campoBusca.press('Enter');
  }

  async selecionarProdutoDaLista(nomeProduto: string) {
    const produto = this.page.locator('a.productName', { hasText: nomeProduto }).first();
    await produto.evaluate(el => (el as HTMLElement).click());  
  }
}