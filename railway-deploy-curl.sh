#!/bin/bash

# Script para instruções de deploy via Railway API
# Como estamos enfrentando limitações com comandos interativos

echo "==== INSTRUÇÕES PARA DEPLOY MANUAL NO RAILWAY ===="
echo ""
echo "O repositório GitHub foi criado com sucesso:"
echo "https://github.com/lucasnobrega7/agentes-de-conversao-site"
echo ""
echo "Para completar o deploy, siga estas etapas:"

echo ""
echo "1. Acesse o dashboard do Railway:"
echo "   https://railway.app/dashboard"
echo ""

echo "2. Selecione o projeto 'Agentes de Conversão'"
echo ""

echo "3. Clique em 'New Service' e selecione 'GitHub Repo'"
echo "   - Selecione o repositório: lucasnobrega7/agentes-de-conversao-site"
echo "   - Branch: main"
echo "   - Root Directory: / (vazio)"
echo ""

echo "4. Após a criação do serviço, configure as variáveis de ambiente:"
echo "   - NODE_ENV = production"
echo "   - NEXT_PUBLIC_SITE_URL = https://agentesdeconversao.com.br"
echo ""

echo "5. Configure um domínio na aba 'Settings > Domains':"
echo "   - Clique em 'Generate Domain' ou configure um domínio personalizado"
echo ""

echo "6. O deploy acontecerá automaticamente. Você pode acompanhar o progresso"
echo "   na aba 'Deployments' do serviço."
echo ""

echo "Para referência futura, você pode consultar os arquivos de documentação:"
echo "- MANUAL-DEPLOY-STEPS.md - Instruções detalhadas para deploy manual"
echo "- GITHUB-SETUP.md - Guia para configuração e deploy via GitHub"
echo ""

echo "==== COMANDOS ÚTEIS PARA GERENCIAMENTO FUTURO ===="
echo ""

echo "# Para verificar o status do projeto"
echo "railway status"
echo ""

echo "# Para ver as variáveis de ambiente"
echo "railway variables"
echo ""

echo "# Para ver os logs do deploy"
echo "railway logs"