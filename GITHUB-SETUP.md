# Configuração do GitHub para Deploy no Railway

Para configurar um repositório GitHub e fazer o deploy no Railway, siga estes passos:

## 1. Criar um Novo Repositório no GitHub

1. Acesse https://github.com/new
2. Nome do repositório: `agentes-de-conversao-site`
3. Descrição: "Site dos Agentes de Conversão baseado no design da OpenAI"
4. Visibilidade: Privado (recomendado para projetos comerciais)
5. Clique em "Create repository"

## 2. Inicializar o Repositório Local

Execute os seguintes comandos no terminal:

```bash
# No diretório do projeto
cd /Users/lucasrnobrega/Downloads/Flowise-main/openai-clone

# Inicializar git se ainda não estiver inicializado
git init

# Adicionar o remote do GitHub (substitua USER pelo seu nome de usuário GitHub)
git remote add origin https://github.com/USER/agentes-de-conversao-site.git

# Adicionar todos os arquivos exceto os ignorados
git add .

# Criar o primeiro commit
git commit -m "Versão inicial do site dos Agentes de Conversão"

# Enviar para o GitHub
git push -u origin main
```

## 3. Deploy no Railway a partir do GitHub

1. Acesse o dashboard do Railway: https://railway.app/dashboard
2. Selecione o projeto "Agentes de Conversão"
3. Clique em "New Service"
4. Selecione "GitHub Repo"
5. Autorize a integração com GitHub se necessário
6. Selecione o repositório `agentes-de-conversao-site`
7. Configure as opções:
   - Branch: `main`
   - Root Directory: `/` (ou vazio)
   - Build Command: `npm run build`
   - Start Command: `npm start`
8. Clique em "Deploy"

## 4. Configurar Variáveis de Ambiente

Após o deploy inicial, configure as variáveis de ambiente:

1. Vá para a aba "Variables" do serviço
2. Adicione as seguintes variáveis:
   ```
   NODE_ENV=production
   NEXT_PUBLIC_SITE_URL=https://agentesdeconversao.com.br
   ```
3. Clique em "Add" para cada variável

## 5. Configurar Domínio (Opcional)

1. Vá para a aba "Settings" do serviço
2. Em "Domains", gere um domínio Railway ou configure um domínio personalizado

## 6. Atualizações Futuras

Para fazer atualizações no site:

1. Faça as alterações no código localmente
2. Commit e push para o GitHub:
   ```bash
   git add .
   git commit -m "Descrição das alterações"
   git push
   ```
3. O Railway irá automaticamente detectar as mudanças e iniciar um novo deploy

Este fluxo de trabalho baseado em Git é mais robusto e evita os problemas enfrentados com a CLI do Railway.