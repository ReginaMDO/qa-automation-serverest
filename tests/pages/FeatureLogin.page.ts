import { type Locator, type Page } from '@playwright/test';
import { EnvConfig } from '../../config/EnvConfig';

export class Login {
  readonly page: Page;
  readonly inputEmail: Locator;
  readonly inputPassword: Locator;
  readonly buttonEntrar: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inputEmail = page.locator('#email');
    this.inputPassword = page.locator('#password');
    this.buttonEntrar = page.getByTestId('entrar');
  }

  async gotoLoginPage() {
    await this.page.goto(EnvConfig.urlEnvironment);
  }

  async login(email: string, senha: string) {
    await this.inputEmail.fill(email);
    await this.inputPassword.fill(senha);
    await this.buttonEntrar.click();
  }

  async validarLoginComAdministrador() {
    await this.page.waitForURL(EnvConfig.urlAdminHome);
  }

  async validarLoginComUsuarioPadrao() {
    await this.page.waitForURL(EnvConfig.urlUserHome);
  }
}
