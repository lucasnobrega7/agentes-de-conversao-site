# Clone do Site OpenAI com Fonte Söhne

Este projeto é um clone moderno do site da OpenAI, adaptado para a marca "Agentes de Conversão". Ele utiliza a fonte Söhne, a mesma utilizada pela OpenAI, para criar uma experiência visual premium.

## Características

- 🎨 Design inspirado na OpenAI com tema escuro
- 🖋️ Utiliza a fonte Söhne para uma experiência tipográfica de alta qualidade
- 🚀 Construído com Next.js para performance otimizada
- 💅 Estilizado com Tailwind CSS para design responsivo
- ✨ Animações suaves com Framer Motion

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

## Pré-requisitos

- Node.js 14.6.0 ou superior
- npm ou yarn ou pnpm

## Configuração da Fonte Söhne

Este projeto utiliza a fonte Söhne, que é uma fonte comercial. Para uma experiência completa:

1. Adquira a licença da fonte Söhne em [Klim Type Foundry](https://klim.co.nz/retail-fonts/sohne/)
2. Coloque os arquivos de fonte no diretório `public/fonts/`
3. Os nomes dos arquivos devem corresponder aos especificados em `styles/globals.css`

Se você não tiver acesso à fonte Söhne, o sistema usará automaticamente as fontes de fallback configuradas.

## Instalação

```bash
# Clone o repositório
git clone [URL_DO_REPOSITÓRIO]

# Entre no diretório do projeto
cd openai-clone

# Instale as dependências
npm install
# ou
yarn install
# ou
pnpm install
```

## Execução Local

```bash
# Inicie o servidor de desenvolvimento
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Personalização

### Cores

As cores principais podem ser ajustadas no arquivo `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      background: '#0f0f0f',
      foreground: '#ffffff',
      'foreground-secondary': '#c5c5d2',
      'accent-blue': '#0fa47f', // Cor principal
      'accent-purple': '#ab68ff',
      'accent-pink': '#ff7ec7',
      // ...
    }
  }
}
```

### Conteúdo

O conteúdo principal está nos componentes em `components/`. Edite estes arquivos para personalizar o texto, imagens e funcionalidades.

## Estrutura do Projeto

```
/
├── components/       # Componentes React reutilizáveis
├── pages/            # Páginas da aplicação
├── public/           # Arquivos estáticos
│   └── fonts/        # Arquivos de fonte
├── styles/           # Estilos globais e configurações
└── tsconfig.json     # Configuração do TypeScript
```

## Licença

Este projeto é licenciado sob a licença MIT.