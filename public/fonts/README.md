# Fontes Söhne para o Projeto

## Arquivos Necessários

Para que o site funcione corretamente com a fonte Söhne, os seguintes arquivos devem ser colocados neste diretório:

- `TestSöhne-Buch.otf` - Regular (400)
- `TestSöhne-Kräftig.otf` - Medium (500)
- `TestSöhne-Halbfett.otf` - Semi-Bold (600)
- `TestSöhne-Dreiviertelfett.otf` - Bold (700)
- `TestSöhneMono-Buch.otf` - Mono Regular (400)

## Instruções para Railway

Antes de fazer o deploy no Railway, adicione manualmente as fontes neste diretório. Elas estão disponíveis no seguinte caminho:

```
/Users/lucasrnobrega/Downloads/Sohne-Font-Family/Söhne-Font-Family-Collection/Test Söhne/
/Users/lucasrnobrega/Downloads/Sohne-Font-Family/Söhne-Font-Family-Collection/Test Söhne Mono/
```

## Configuração Alternativa

Se você não puder adicionar as fontes neste diretório, você pode atualizar o arquivo `styles/globals.css` para usar um sistema de fontes alternativo, modificando as definições de `@font-face`.