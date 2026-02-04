import { Page, Locator, expect } from '@playwright/test';

export class ProdutoPage {
  readonly page: Page;
  readonly campoQuantidade: Locator;
  readonly botaoAdicionarCarrinho: Locator;
  readonly menuCarrinho: Locator;

  constructor(page: Page) {
    this.page = page;
    this.campoQuantidade = page.locator('input[name="quantity"]');
    this.botaoAdicionarCarrinho = page.locator('button[name="save_to_cart"]');
    this.menuCarrinho = page.locator('#menuCart');
  }

  async definirQuantidade(qtd: string) {
    await this.campoQuantidade.click();
    await this.campoQuantidade.fill(qtd);
  }

  async adicionarAoCarrinho() {
    await this.botaoAdicionarCarrinho.click();
  }

  async abrirCarrinho() {
    await this.menuCarrinho.click();
  }
}