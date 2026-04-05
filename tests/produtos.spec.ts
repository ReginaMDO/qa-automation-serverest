import { test } from '@playwright/test';
import { Login } from './pages/FeatureLogin.page';
import { Produtos } from './pages/FeatureProdutos.page';
import userData from '../data/users.json';
import produtoData from '../data/produtos.json';

test.describe('Produtos', () => {
  test.beforeEach(async ({ page }) => {
    const login = new Login(page);
    await login.gotoLoginPage();
  });

  test('Pesquisar produto', async ({ page }) => {
    const login = new Login(page);
    await login.login(userData.usuarioPadrao.email, userData.usuarioPadrao.senha);
    await login.validarLoginComUsuarioPadrao();
    const produtos = new Produtos(page);
    await produtos.pesquisarProduto(produtoData.produtos.SoftMetalSoap);
    await produtos.validarProdutoPesquisado(produtoData.produtos.SoftMetalSoap);
  });

  test('Cadastrar produto', async ({ page }) => {
    const login = new Login(page);
    await login.login(userData.usuarioAdmin.email, userData.usuarioAdmin.senha);
    await login.validarLoginComAdministrador();
    const produtos = new Produtos(page);
    await produtos.irParaCadastroProduto();
    await produtos.preencherFormularioProduto(
      produtoData.novoProduto.nome,
      produtoData.novoProduto.preco,
      produtoData.novoProduto.descricao,
      produtoData.novoProduto.quantidade,
      produtoData.novoProduto.img
    );
    await produtos.cadastrarProduto();
    await produtos.validarCadastroProduto();
  });
});
