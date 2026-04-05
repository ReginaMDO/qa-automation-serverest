import { test } from '@playwright/test';
import { Login } from './pages/FeatureLogin.page';
import { Usuarios } from './pages/FeatureUsuarios.page';

test.describe('Usuários', () => {
  test.beforeEach(async ({ page }) => {
    const login = new Login(page);
    await login.gotoLoginPage();
  });

  test('Cadastrar usuário padrão', async ({ page }) => {
    const usuarios = new Usuarios(page);
    const usuario = await usuarios.generateRandomUser();
    await usuarios.preencherFormulario(usuario.nome, usuario.email, usuario.senha);
    await usuarios.cadastrarUsuario();
    console.log(`Usuário padrão criado: ${usuario.nome} - ${usuario.email} - ${usuario.senha}`);
    await usuarios.validarCadastroUsuarioPadrao();
  });

  test('Cadastrar usuário administrador', async ({ page }) => {
    const usuarios = new Usuarios(page);
    const usuario = await usuarios.generateRandomUser();
    await usuarios.preencherFormulario(usuario.nome, usuario.email, usuario.senha);
    await usuarios.selecionarComoAdministrador();
    await usuarios.cadastrarUsuario();
    console.log(
      `Usuário administrador criado: ${usuario.nome} - ${usuario.email} - ${usuario.senha}`
    );
    await usuarios.validarCadastroUsuarioAdministrador();
  });
});
