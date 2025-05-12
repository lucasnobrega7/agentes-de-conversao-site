#!/bin/bash

# Script para inicializar o repositório Git para o projeto Agentes de Conversão

echo "Inicializando repositório Git para o projeto Agentes de Conversão..."

# Verificar se o diretório atual é o correto
CURRENT_DIR=$(basename "$PWD")
if [ "$CURRENT_DIR" != "openai-clone" ]; then
  echo "Erro: Execute este script no diretório 'openai-clone'"
  exit 1
fi

# Verificar se já existe um repositório Git
if [ -d ".git" ]; then
  echo "Repositório Git já inicializado."
  
  # Verificar remote
  REMOTE_URL=$(git remote get-url origin 2>/dev/null || echo "")
  if [ -n "$REMOTE_URL" ]; then
    echo "Remote já configurado: $REMOTE_URL"
  else
    echo "Nenhum remote configurado. Configure manualmente com:"
    echo "git remote add origin https://github.com/SEU-USUARIO/agentes-de-conversao-site.git"
  fi
  
  exit 0
fi

# Inicializar repositório
git init

# Adicionar arquivos (exceto os ignorados pelo .gitignore)
git add .

# Verificar status
echo ""
echo "Status do repositório:"
git status

echo ""
echo "Repositório inicializado com sucesso!"
echo ""
echo "Próximos passos:"
echo "1. Crie um repositório no GitHub: https://github.com/new"
echo "2. Configure o remote: git remote add origin https://github.com/SEU-USUARIO/agentes-de-conversao-site.git"
echo "3. Faça o primeiro commit: git commit -m \"Versão inicial do site dos Agentes de Conversão\""
echo "4. Envie para o GitHub: git push -u origin main"
echo ""
echo "Em seguida, siga as instruções no arquivo GITHUB-SETUP.md para completar o deploy no Railway."