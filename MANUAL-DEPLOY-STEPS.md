# Passos para Deploy Manual no Railway

Como identificamos dificuldades com o deploy via CLI devido ao ambiente não interativo, siga estas instruções para um deploy manual pelo dashboard do Railway.

## 1. Prepare seu Código

Os arquivos já estão configurados corretamente:
- `next.config.js` já otimizado para produção
- `Dockerfile` configurado
- `railway.json` com as configurações de deploy
- `.env.production` com as variáveis de ambiente

## 2. Deploy pelo Dashboard do Railway

1. **Acesse o Dashboard do Railway**
   - Visite https://railway.app/dashboard
   - Você já está autenticado como "Agentes de Conversão"

2. **Crie um Novo Serviço**
   - Abra o projeto "Agentes de Conversão" (ID: 7fcd408b-255a-4b4e-9ec1-0fe17fcd10a6)
   - Clique em "New Service" no canto superior direito

3. **Escolha o Método de Deploy**
   
   **Opção A: GitHub (Recomendado)**
   - Selecione "GitHub Repo"
   - Faça upload do código para um repositório GitHub
   - Conecte o repositório
   - Configure o diretório para o caminho correto (se necessário)
   
   **Opção B: Docker**
   - Selecione "Empty Service"
   - Na seção "Settings > Deploy", ative "Docker"
   - O Railway usará o Dockerfile no diretório raiz
   
   **Opção C: Upload Direto**
   - Selecione "Empty Service"
   - Na seção "Settings > Deploy", ative "Source"
   - Use o GitHub CLI ou Dashboard para conectar o repositório

4. **Configure Variáveis de Ambiente**
   - Vá para a aba "Variables"
   - Adicione as variáveis do arquivo `.env.production`:
     ```
     NODE_ENV=production
     NEXT_PUBLIC_SITE_URL=https://agentesdeconversao.com.br
     ```

5. **Configure o Domínio (Opcional)**
   - Vá para a aba "Settings > Domains"
   - Clique em "Generate Domain" para um domínio Railway
   - Ou configure um domínio personalizado

## 3. Verifique o Deploy

1. **Monitore o Processo de Build**
   - Acompanhe os logs de build na aba "Deployments"
   - Verifique se não há erros durante o processo

2. **Teste o Site**
   - Acesse o domínio gerado pelo Railway
   - Verifique se o site carrega corretamente e se as fontes estão funcionando

## 4. Solução de Problemas Comuns

- **Erros de Compilação**: Verifique os logs para identificar problemas específicos
- **Problemas com Fontes**: Confirme que os arquivos de fonte estão em `public/fonts/`
- **Problemas de Memória**: Aumente os recursos na aba "Settings > Resources"

---

## Recomendação para Futuros Deploys

Para evitar problemas futuros, recomendamos configurar um fluxo de trabalho baseado em Git:

1. Mantenha o código em um repositório GitHub
2. Configure o Railway para deploy automático a partir do GitHub
3. Simplesmente faça push das alterações para o GitHub para acionar novos deploys

Esta abordagem é mais robusta e evita os problemas enfrentados com a CLI.