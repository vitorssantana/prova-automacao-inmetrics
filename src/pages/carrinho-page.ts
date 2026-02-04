import { Page, Locator, expect } from '@playwright/test';

export class CarrinhoPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verificarProdutoNaTabela(produto: string, preco: string, quantidade: string) {
    const linha = this.page.locator('tr', { hasText: produto });
    
    await expect(linha).toBeVisible();
    await expect(linha).toContainText(quantidade);
    await expect(linha).toContainText(preco);
  }

  async alterarQuantidade(nomeProduto: string, qtd: string) {
    const linha = this.page.locator('tr', { hasText: nomeProduto });
    await linha.locator('.edit').click();
    
    const campoQuantidade = this.page.locator('input[name="quantity"]');
    await campoQuantidade.fill(qtd);
    await this.page.keyboard.press('Enter');
  }

  async removerProduto(nomeProduto: string) {
    const linha = this.page.locator('tr', { hasText: nomeProduto });
    await linha.locator('.remove').click();
  }

  async verificarTotalDoCarrinho(totalEsperado: string) {
    await expect(this.page.locator('.cart-total')).toContainText(totalEsperado);
  }
  
  async finalizarCompra() {
    await this.page.locator('#checkOutButton').click();
  }
}