import { test, expect } from '@playwright/test';
import { Login } from './pages/FeatureLogin.page';
import userData from '../data/users.json';

test.describe('Login', () => {
  test.beforeEach(async ({ page }) => {
    const login = new Login(page);
    await login.gotoLoginPage();
  });

  test('Realizar login com usuário administrador', async ({ page }) => {
    const login = new Login(page);
    await login.login(userData.usuarioAdmin.email, userData.usuarioAdmin.senha);
    await login.validarLoginComAdministrador();
  });

  test('Realizar login com usuário padrão', async ({ page }) => {
    const login = new Login(page);
    await login.login(userData.usuarioPadrao.email, userData.usuarioPadrao.senha);
    await login.validarLoginComUsuarioPadrao();
  });
});
