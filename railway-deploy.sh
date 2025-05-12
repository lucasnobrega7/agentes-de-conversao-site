#!/bin/bash

# Script para fazer deploy direto no Railway
# Mais simples que o railway-setup.sh para deploy rápido

# Verificar se o Railway CLI está instalado
if ! command -v railway &> /dev/null; then
    echo "Railway CLI não está instalado. Instalando..."
    npm install -g @railway/cli
fi

# Verificar login
LOGGED_IN=$(railway whoami 2>/dev/null)
if [ $? -ne 0 ]; then
    echo "É necessário fazer login no Railway."
    railway login
fi

# Exibe as informações sobre o projeto atual
echo "Informações do projeto Railway atual:"
railway status

# Confirmar deploy
read -p "Deseja prosseguir com o deploy no Railway? (s/n): " CONFIRM
if [[ $CONFIRM != "s" && $CONFIRM != "S" ]]; then
    echo "Deploy cancelado."
    exit 0
fi

# Deploy para o Railway
echo "Iniciando deploy no Railway..."
railway up

echo "Deploy iniciado! Após a conclusão, o site estará disponível no domínio fornecido pelo Railway."
echo "Verifique o status do deploy com 'railway status'"