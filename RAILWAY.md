# Deploy no Railway

Este guia explica como fazer o deploy do site Agentes de Conversão no Railway.

## Pré-requisitos

1. Conta no Railway (https://railway.app)
2. Railway CLI instalado (npm install -g @railway/cli)
3. Node.js 18 ou superior

## Passos para o Deploy

### 1. Configuração Inicial

O projeto já está configurado com os arquivos necessários para o deploy no Railway:

- `railway.json` - Configuração do Railway
- `Dockerfile` - Instruções para build do container Docker
- `next.config.js` - Configurações do Next.js para produção
- `.env` - Variáveis de ambiente (em produção, configure pelo Railway Dashboard)

### 2. Deploy Automático

Para fazer o deploy automático, execute:

```bash
npm run setup-railway
```

Este script irá:
1. Verificar a instalação do Railway CLI
2. Solicitar login se necessário
3. Listar os projetos disponíveis
4. Permitir que você selecione um projeto existente ou crie um novo
5. Configurar variáveis de ambiente
6. Iniciar o deploy

### 3. Deploy Manual

Se preferir fazer o deploy manualmente:

```bash
# Fazer login no Railway
railway login

# Criar novo projeto ou vincular a um existente
railway init
# OU
railway link -p seu-project-id

# Configurar variáveis de ambiente
railway variables set NODE_ENV=production

# Fazer o deploy
railway up
```

### 4. Configuração de Domínio

1. Acesse o dashboard do Railway após o deploy
2. Vá para a aba "Settings" do serviço
3. Em "Domains", gere um domínio Railway ou configure seu domínio personalizado

### 5. Variáveis de Ambiente

Configure as seguintes variáveis no dashboard do Railway:

- `NODE_ENV` = production
- `NEXT_PUBLIC_SITE_URL` = URL do seu site (ex: https://agentesdeconversao.com.br)

### 6. Monitoramento

- Acesse os logs de build e runtime no dashboard do Railway
- Configure alertas em "Settings > Alerts"
- Monitore o uso de recursos em "Metrics"

## Arquivos das Fontes Söhne

Certifique-se de adicionar as fontes Söhne no diretório `public/fonts/` antes do deploy em produção. As fontes são carregadas automaticamente pelos arquivos CSS do projeto.

## Solução de Problemas

- **Falha no build**: Verifique os logs de build para identificar o problema
- **Problemas de CSS**: O Railway pode ter problemas com o cache, tente adicionar um query parameter à URL da fonte
- **Erro 503**: Verifique se o serviço está rodando e se o health check está passando

Para mais informações, consulte a [documentação do Railway](https://docs.railway.app/).