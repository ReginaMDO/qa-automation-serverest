import { expect, type Locator, type Page } from '@playwright/test';
import { EnvConfig } from '../../config/EnvConfig';

export class Usuarios {
  private readonly page: Page;
  private readonly inputNome: Locator;
  private readonly inputEmail: Locator;
  private readonly inputSenha: Locator;
  private readonly checkboxAdmin: Locator;
  private readonly buttonCadastrar: Locator;
  private readonly mensagem: Locator;
  private readonly menuListarUsuarios: Locator;
  private readonly title: Locator;
  private readonly buttonLogout: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buttonCadastrar = page.getByTestId('cadastrar');
    this.inputNome = page.locator('#nome');
    this.inputEmail = page.locator('#email');
    this.inputSenha = page.locator('#password');
    this.checkboxAdmin = page.locator('#administrador');
    this.mensagem = page.getByText('Cadastro realizado com sucesso');
    this.menuListarUsuarios = page.getByTestId('listarUsuarios');
    this.title = page.getByRole('heading', { name: 'Lista dos Usuários' });
    this.buttonLogout = page.getByTestId('logout');
  }

  async preencherFormulario(nome: string, email: string, senha: string) {
    await this.buttonCadastrar.click();
    await this.inputNome.fill(nome);
    await this.inputEmail.fill(email);
    await this.inputSenha.fill(senha);
  }

  async generateRandomUser(): Promise<{ nome: string; email: string; senha: string }> {
    const response = await this.page.request.get(EnvConfig.urlRandomUserApi);
    const payload = await response.json();
    const result = payload.results[0];
    const nome = `${result.name.first} ${result.name.last}`;
    const email = result.email;
    const senha = result.login.password;
    return { nome, email, senha };
  }

  async selecionarComoAdministrador() {
    await this.checkboxAdmin.check();
  }

  async cadastrarUsuario() {
    await this.buttonCadastrar.click();
  }

  async validarCadastroUsuarioPadrao() {
    await expect(this.mensagem).toBeVisible();
    await expect(this.page).toHaveURL(EnvConfig.urlUserHome);
  }

  async validarCadastroUsuarioAdministrador() {
    await expect(this.mensagem).toBeVisible();
    await expect(this.page).toHaveURL(EnvConfig.urlAdminHome);
  }

  async irParaListaUsuarios() {
    await this.menuListarUsuarios.click();
  }

  async validarListaUsuarios() {
    await expect(this.title).toBeVisible();
    await expect(this.page).toHaveURL(EnvConfig.urlAdminListarUsuarios);
  }

  async realizarLogout() {
    await this.buttonLogout.click();
  }
  
  async validarLogout() {
    await expect(this.page).toHaveURL(EnvConfig.urlLogin);
  }

}
