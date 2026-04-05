import { expect, type Locator, type Page } from '@playwright/test';
import { resolve } from 'path';

export class Produtos {
  private readonly page: Page;
  private readonly inputPesquisar: Locator;
  private readonly inputNome: Locator;
  private readonly inputPreco: Locator;
  private readonly inputDescricao: Locator;
  private readonly inputQuantidade: Locator;
  private readonly inputImg: Locator;
  private readonly buttonCadastrar: Locator;
  private readonly descricao: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inputPesquisar = page.locator('[data-testid="pesquisar"]');
    this.inputNome = page.locator('#nome');
    this.inputPreco = page.locator('#price');
    this.inputDescricao = page.locator('#description');
    this.inputQuantidade = page.locator('#quantity');
    this.inputImg = page.locator('#imagem');
    this.buttonCadastrar = page.locator('button[type="submit"], [data-testid="cadastrar"]');
    this.descricao = page.getByText('Livro de automação de testes');
  }

  async pesquisarProduto(nomeProduto: string) {
    await this.inputPesquisar.fill(nomeProduto);
    await this.inputPesquisar.press('Enter');
  }

  async validarProdutoPesquisado(nomeProduto: string) {
    await expect(this.page.getByText(nomeProduto)).toBeVisible();
  }

  async irParaCadastroProduto() {
    await this.page.getByTestId('cadastrarProdutos').click();
  }

  async preencherFormularioProduto(
    nome: string,
    preco: number,
    descricao: string,
    quantidade: number,
    img: string
  ) {
    await this.inputNome.fill(nome);
    await this.inputPreco.fill(preco.toString());
    await this.inputDescricao.fill(descricao);
    await this.inputQuantidade.fill(quantidade.toString());
    const filePath = resolve(process.cwd(), img);
    await this.inputImg.setInputFiles(filePath);
  }

  async cadastrarProduto() {
    await this.buttonCadastrar.click();
  }

  async validarCadastroProduto() {
    await expect(this.descricao).toBeVisible();
  }
}
