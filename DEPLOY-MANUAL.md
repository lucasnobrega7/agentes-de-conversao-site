# Guia de Deploy Manual para o Site Agentes de Conversão

Como você está enfrentando limitações com a CLI interativa do Railway, siga estas instruções para concluir o deploy manualmente através do dashboard do Railway.

## Preparação do Código

O código do OpenAI Clone já está preparado com todos os arquivos necessários:

- `next.config.js` configurado para produção
- `Dockerfile` otimizado para o Railway
- `railway.json` com as configurações do serviço
- Arquivos de fonte Söhne configurados (adicione-os manualmente)

## Deploy via Dashboard do Railway

1. **Acesse o Dashboard do Railway**
   - URL: https://railway.app/dashboard
   - Projeto: Agentes de Conversão (ID: 7fcd408b-255a-4b4e-9ec1-0fe17fcd10a6)

2. **Crie um Novo Serviço**
   - Clique no botão "New Service" dentro do projeto
   - Selecione "GitHub Repo" (recomendado) ou "Empty Service"

3. **Se usar GitHub Repo:**
   - Conecte seu repositório GitHub
   - Selecione a branch principal
   - Configure o diretório do repositório para "/openai-clone"
   - Clique em "Deploy"

4. **Se usar Empty Service:**
   - Após criar o serviço vazio, vá para a aba "Settings"
   - Em "Service", configure o "Build Command" para: `npm run build`
   - Em "Service", configure o "Start Command" para: `npm run start`
   - Em "Deploy", selecione "Push to deploy" e conecte o repositório GitHub
   - Configure o diretório do repositório para "/openai-clone"

5. **Configure as Variáveis de Ambiente**
   - Vá para a aba "Variables" do serviço
   - Adicione as seguintes variáveis:
     ```
     NODE_ENV=production
     NEXT_PUBLIC_SITE_URL=https://agentesdeconversao.com.br
     ```

6. **Configure o Domínio**
   - Vá para a aba "Settings" do serviço
   - Em "Domains", clique em "Generate Domain" ou configure um domínio personalizado
   - Anote a URL gerada

## Verificação do Deploy

1. **Verifique os Logs**
   - Vá para a aba "Deployments" do serviço
   - Selecione o deploy mais recente
   - Verifique os logs de build e runtime para identificar qualquer problema

2. **Teste o Site**
   - Acesse a URL gerada pelo Railway
   - Verifique se o site está carregando corretamente, incluindo as fontes e elementos visuais

## Problemas Comuns e Soluções

1. **Falha no Build**
   - Verifique os logs de build para identificar erros específicos
   - Certifique-se de que o `package.json` está correto e inclui todas as dependências

2. **Problemas de Fonte**
   - Se as fontes Söhne não estiverem funcionando, verifique se você adicionou os arquivos ao diretório `public/fonts/`
   - Alternativamente, configure o CSS para usar fontes de fallback

3. **Domínio Personalizado**
   - Para configurar um domínio personalizado, adicione os registros DNS apropriados apontando para o domínio do Railway
   - Siga as instruções na seção "Domains" do dashboard do Railway

## Próximos Passos

Após o deploy bem-sucedido:

1. Configure o monitoramento na aba "Metrics"
2. Configure alertas em "Settings > Alerts"
3. Configure integrações com serviços terceiros se necessário

Para atualizações futuras, simplesmente faça push para o repositório GitHub conectado, e o Railway fará o deploy automaticamente.

---

Lembre-se de que o Railway cobra com base no uso de recursos, então monitore seu consumo regularmente para evitar cobranças inesperadas.