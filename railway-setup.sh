#!/bin/bash

# Script para preparar o projeto para deploy no Railway

# Verificar se o CLI do Railway está instalado
if ! command -v railway &> /dev/null; then
    echo "Railway CLI não está instalado. Instalando..."
    npm install -g @railway/cli
fi

# Verificar login
railway whoami || railway login

# Lista os projetos disponíveis
echo "Projetos Railway disponíveis:"
railway list

echo "Conectando ao projeto..."
read -p "Digite o ID ou nome do projeto Railway (ou deixe em branco para criar um novo): " PROJECT_ID

if [ -z "$PROJECT_ID" ]; then
    echo "Criando novo projeto Railway..."
    railway init
else
    echo "Vinculando ao projeto existente..."
    railway link --project "$PROJECT_ID"
fi

# Configurar variáveis de ambiente no Railway
echo "Configurando variáveis de ambiente..."
railway variables set NODE_ENV=production

# Deploy para o Railway
echo "Iniciando deploy no Railway..."
railway up

echo "Deploy iniciado! Verifique o progresso no dashboard do Railway."
echo "Acesse: https://railway.app/dashboard"