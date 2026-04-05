# qa-automation-serverest 🚀

Suite de testes automatizados end-to-end para a API Serverest utilizando Playwright e TypeScript.

## 📋 Sobre o Projeto

Este projeto implementa testes automatizados para validar a funcionalidade completa da plataforma Serverest, incluindo:

- **Autenticação**: Login de usuários padrão e administrador
- **Gerenciamento de Usuários**: Cadastro de novos usuários (padrão e administrador)
- **Gerenciamento de Produtos**: Pesquisa e cadastro de produtos

## 🛠️ Tecnologias

- **Playwright** - Framework de testes e2e
- **TypeScript** - Linguagem tipada para melhor qualidade de código
- **Node.js** - Runtime JavaScript

## 📦 Pré-requisitos

- Node.js 16+ instalado
- npm ou yarn

## 🚀 Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/qa-automation-serverest.git
   cd qa-automation-serverest
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Instale os navegadores do Playwright**
   ```bash
   npx playwright install
   ```

## 🧪 Executando os Testes

### Rodar todos os testes
```bash
npm test
```

### Rodar testes no modo cabeçalho (com visual)
```bash
npm run test:headed
```

### Rodar testes com UI do Playwright
```bash
npm run test:ui
```

### Rodar um arquivo de teste específico
```bash
npx playwright test tests/login.spec.ts
```

## 📁 Estrutura do Projeto

```
qa-automation-serverest/
├── config/
│   └── EnvConfig.ts          # Configurações de ambiente e URLs
├── data/
│   ├── users.json            # Dados de usuários de teste
│   └── produtos.json         # Dados de produtos de teste
├── tests/
│   ├── login.spec.ts         # Testes de autenticação
│   ├── usuarios.spec.ts      # Testes de gerenciamento de usuários
│   ├── produtos.spec.ts      # Testes de gerenciamento de produtos
│   └── pages/                # Page Objects
│       ├── FeatureLogin.page.ts
│       ├── FeatureUsuarios.page.ts
│       └── FeatureProdutos.page.ts
├── playwright.config.ts      # Configuração do Playwright
├── tsconfig.json             # Configuração do TypeScript
└── package.json              # Dependências do projeto
```

## 📝 Padrão Page Object

Este projeto utiliza o padrão **Page Object Model** (POM) para melhor manutenibilidade:

- Cada página/feature tem sua própria classe em `tests/pages/`
- Os seletores e métodos de interação ficam isolados
- Os testes ficam mais legíveis e menos propensos a erros

**Exemplo:**
```typescript
const login = new Login(page);
await login.gotoLoginPage();
await login.login(usuario.email, usuario.senha);
```

## 🔧 Configuração de Ambiente

Você pode customizar a URL base através de variável de ambiente:

```bash
BASE_URL=https://seu-ambiente.com npm test
```

Ou edite o arquivo `config/EnvConfig.ts`:

```typescript
static readonly urlEnvironment: string = process.env.BASE_URL || 'https://front.serverest.dev';
```

## 📊 Relatórios

Após executar os testes, os relatórios HTML são gerados em:

- `playwright-report/` - Relatório visual completo

Para visualizar:
```bash
npx playwright show-report
```

## 🤝 Contribuindo

1. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
2. Commit suas mudanças (`git commit -m 'Add: MinhaFeature'`)
3. Push para a branch (`git push origin feature/MinhaFeature`)
4. Abra um Pull Request

## 📋 Checklist de Manutenção

- [ ] Validar se os seletores ainda funcionam após mudanças na UI
- [ ] Atualizar dados de teste quando necessário
- [ ] Revisar flakiness dos testes periodicamente
- [ ] Documentar novos cenários adicionados

## 🐛 Troubleshooting

### Erro: "TimeoutError: Timeout 5000ms exceeded"
- Aumentar timeout em `playwright.config.ts`
- Verificar se o ambiente está acessível
- Revisar seletores dos elementos

### Erro: "element not found"
- Verificar se o seletor está correto
- Adicionar waits para elementos dinâmicos
- Usar `page.waitForURL()` para esperar navegação

## 👨‍💻 Autor

Desenvolvido por 