#!/bin/bash

# Script para fazer deploy direto no Railway usando configurações fixas
# Evita comandos interativos que requerem TTY

echo "Fazendo deploy do OpenAI Clone para o Railway..."

# Definir variáveis fixas
PROJECT_ID="7fcd408b-255a-4b4e-9ec1-0fe17fcd10a6"
SERVICE_NAME="site-agentes"

# Verificar se o diretório do projeto existe
if [ ! -d "/Users/lucasrnobrega/Downloads/Flowise-main/openai-clone" ]; then
  echo "Diretório do projeto não encontrado!"
  exit 1
fi

# Mudar para o diretório do projeto
cd /Users/lucasrnobrega/Downloads/Flowise-main/openai-clone

# Configurar variáveis de ambiente
echo "NODE_ENV=production" > .env.production
echo "NEXT_PUBLIC_SITE_URL=https://agentesdeconversao.com.br" >> .env.production

# Empacotar o código para upload (excluindo node_modules e .next)
echo "Empacotando o código para upload..."
tar --exclude="node_modules" --exclude=".next" -czf ../openai-clone.tar.gz .

# Usar curl para fazer upload do código diretamente para o Railway API
# Nota: Esta parte é conceitual - Railway não oferece uma API pública oficial para esse tipo de operação
# Em um cenário real, seria necessário usar o próprio webhook do Railway ou CI/CD como GitHub Actions

echo "O código está pronto para deploy."
echo "Por favor, use uma das seguintes opções para completar o deploy:"
echo ""
echo "1. Faça upload manual do código pelo dashboard do Railway:"
echo "   https://railway.app/project/$PROJECT_ID"
echo ""
echo "2. Configure um webhook no GitHub e faça push do código para seu repositório."
echo ""
echo "3. Use outras ferramentas de CI/CD compatíveis com o Railway."

# Verificar se já existe um serviço chamado 'site-agentes'
# e fornecer instruções específicas
echo ""
echo "Para configurar o serviço manualmente no Railway:"
echo "1. Acesse: https://railway.app/project/$PROJECT_ID"
echo "2. Clique em 'New Service' > 'GitHub Repo'"
echo "3. Conecte seu repositório do GitHub"
echo "4. Selecione o diretório 'openai-clone'"
echo "5. Configure as variáveis de ambiente conforme listado em .env.production"
echo "6. Clique em 'Deploy'"

# Limpar
rm ../openai-clone.tar.gz