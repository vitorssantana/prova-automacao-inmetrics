import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usuarioInput: Locator;
    readonly senhaInput: Locator;
    readonly logar: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usuarioInput = page.locator('input[name="usernameInOrderPayment"]');
        this.senhaInput = page.locator('input[name="passwordInOrderPayment"]');
        this.logar = page.locator('#login_btn');
    }

    async realizarLogin(login: string, senha: string) {
        await this.usuarioInput.waitFor({ state: 'visible' });
        await this.usuarioInput.fill(login);
        await this.senhaInput.fill(senha);

        await this.logar.click();
    }

}