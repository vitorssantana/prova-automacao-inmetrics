import { APIRequestContext } from '@playwright/test';
import { generateUserData } from './data-factory';

export class ApiHelper {
  constructor(private request: APIRequestContext) {}

  async createAndLoginUser() {
    const userData = generateUserData();
    const response = await this.request.post('https://www.advantageonlineshopping.com/accountservice/accountrest/api/v1/register', {
      data: userData
    });

    if (!response.ok()) {
      console.log(await response.text());
      throw new Error(`Falha ao criar usuário via API: ${response.statusText()}`);
    }
    return userData;
  }
}