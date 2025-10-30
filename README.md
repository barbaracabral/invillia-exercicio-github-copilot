<img src="https://octodex.github.com/images/welcometocat.png" align="right" height="250px" />

⭐️ Parabéns, barbaracabral! ⭐️

Você concluiu este exercício! Ótimo trabalho! 🥳

Se quiser praticar novamente, você pode repetir os passos abaixo. Basta clicar novamente no botão **Iniciar Exercício**.

> [!TIP]
> Dessa vez, a Mona não vai avaliar você! 😉

# GitHub Copilot

![](https://github.com/barbaracabral/invillia-exercicio-github-copilot/actions/workflows/1-preparing.yml/badge.svg)
![](https://github.com/barbaracabral/invillia-exercicio-github-copilot/actions/workflows/2-first-introduction.yml/badge.svg)
![](https://github.com/barbaracabral/invillia-exercicio-github-copilot/actions/workflows/3-copilot-edits.yml/badge.svg)
![](https://github.com/barbaracabral/invillia-exercicio-github-copilot/actions/workflows/4-copilot-on-github.yml/badge.svg)

## Boas-vindas


  - Exercício básico: [Introdução ao GitHub](https://github.com/skills/introduction-to-github)
  - Familiaridade com o [VS Code](https://code.visualstudio.com/)
  - Noções básicas de programação

# <img src="https://octodex.github.com/images/welcometocat.png" align="right" height="250px" />
Neste exercício, você irá:

1. Usar um Codespace pré-configurado para executar o VS Code no seu navegador.
1. Aprender diferentes opções de interação para desenvolver com o GitHub Copilot.
1. Usar o Copilot para resumir e revisar seu pull request.

### Como iniciar este exercício

1. Clique com o botão direito em **Copiar Exercício** e abra o link em uma nova aba.

   <a id="copy-exercise">
      <img src="https://img.shields.io/badge/📠_Copy_Exercise-AAA" height="25pt"/>
   </a>

2. Na nova aba, a maioria dos campos será preenchida automaticamente.

   - Para proprietário, escolha sua conta pessoal ou uma organização para hospedar o repositório.
   - Recomendamos criar um repositório público, pois repositórios privados utilizarão [minutos do Actions](https://docs.github.chttps://github.com/barbaracabral/invillia-exercicio-github-copilot/billing/managing-billing-for-github-actions/about-billing-for-github-actions).
   - Role a página para baixo e clique no botão **Create repository** no fim do formulário.

3. Após a criação do seu novo repositório, aguarde cerca de 20 segundos para que o exercício seja preparado e os botões sejam atualizados. Você continuará trabalhando na sua cópia do exercício.

   - O botão **Copiar Exercício** ficará desativado, mudando para cinza.
   - O botão **Iniciar Exercício** será ativado, mudando para verde.
   - Provavelmente será necessário atualizar a página.

4. Clique em **Iniciar Exercício**. Siga as instruções passo a passo, e o feedback será fornecido conforme você avança.

   <a id="start-exercise" href="https://github.com/barbaracabral/invillia-exercicio-github-copilot/issues/1">
      <img src="https://img.shields.io/badge/🚀_Start_Exercise-008000" height="25pt"/>
   </a>

> [!IMPORTANT]
> O botão **Iniciar Exercício** será ativado após copiar o repositório. Provavelmente você precisará atualizar a página.

---

## Executando os Testes

### Pré-requisitos
- Node.js instalado (versão LTS recomendada)
- npm (geralmente vem com Node.js)

### Instalação
1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/invillia-exercicio-github-copilot.git
cd invillia-exercicio-github-copilot
```

2. Instale as dependências:
```bash
npm install
```

### Executando os Testes
Para executar a suíte de testes:
```bash
npm test
```

Os testes incluem:
- Carregamento da lista de atividades
- Preenchimento e envio do formulário de inscrição
- Validação de mensagens de sucesso
- Integração com a API

### Estrutura dos Testes
- `src/static/__tests__/app.test.js`: Testes do frontend
- `jest.config.cjs`: Configuração do Jest
- `jest.setup.js`: Setup do ambiente de testes

### Adicionando Novos Testes

1. Crie ou edite arquivos de teste na pasta `src/static/__tests__/`
   - Use o padrão `*.test.js` para nomear arquivos
   - Exemplo: `minhaFuncao.test.js`

2. Estrutura básica de um teste:
```javascript
describe('Nome do componente/funcionalidade', () => {
  beforeEach(() => {
    // Configuração antes de cada teste
    document.documentElement.innerHTML = fs.readFileSync('caminho/do/html', 'utf8');
  });

  test('descrição do comportamento esperado', async () => {
    // Arrange (preparação)
    const mockResponse = { /* seus dados mockados */ };
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => mockResponse
    });

    // Act (ação)
    document.dispatchEvent(new Event('DOMContentLoaded'));
    
    // Assert (verificação)
    await waitFor(() => {
      expect(elemento).toBeInTheDocument();
    });
  });
});
```

3. Helpers Disponíveis
   - `@testing-library/dom`: Para queries do DOM (`getByText`, `getByRole`, etc.)
   - `@testing-library/jest-dom`: Para matchers específicos do DOM (`toBeInTheDocument`, `toHaveClass`, etc.)
   - `jest`: Para mocks e asserções gerais

4. Boas Práticas
   - Mock chamadas externas (fetch, etc.)
   - Um teste por comportamento
   - Nomes descritivos para os testes
   - Limpe o DOM após cada teste
   - Use `async/await` para operações assíncronas

5. Executando Testes Específicos
```bash
# Executar um arquivo específico
npm test app.test.js

# Executar testes que correspondam a um padrão
npm test -- -t "nome do teste"

# Modo watch (re-executa ao salvar)
npm test -- --watch
```

---

Obtenha ajuda: [Publique em nosso fórum de discussão](https://github.com/orgs/Copilot-Workshop-Invillia/discussions/categories/getting-started-with-github-copilot) &bull; [Confira a página de status do GitHub](https://www.githubstatus.com/)

&copy; 2025 GitHub &bull; [Código de Conduta](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md) &bull; [Licença MIT](https://gh.io/mit)