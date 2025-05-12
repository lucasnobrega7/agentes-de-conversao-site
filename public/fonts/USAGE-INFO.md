# Informações de Uso da Fonte Söhne

## Status Atual das Fontes

Este projeto está atualmente usando as fontes Söhne de teste (OTF) fornecidas pelo usuário.

Arquivos em uso:
- `TestSöhne-Buch.otf` (Regular - 400)
- `TestSöhne-Kräftig.otf` (Medium - 500)
- `TestSöhne-Halbfett.otf` (Semi-Bold - 600)
- `TestSöhne-Dreiviertelfett.otf` (Bold - 700)
- `TestSöhneMono-Buch.otf` (Mono Regular - 400)

## Melhores Práticas para Web

Para uso em produção, recomenda-se:

1. Converter para formatos otimizados para web (WOFF2)
2. Garantir que a licença permita o uso comercial e a incorporação em sites
3. Utilizar os arquivos oficiais completos em vez dos arquivos de teste

## Instruções para Conversão

Para converter os arquivos OTF para WOFF2 (melhor formato para web):

```bash
# Instalar fonttools
pip install fonttools brotli

# Converter fontes
fonttools ttLib.woff2 compress TestSöhne-Buch.otf
```

## Convenções de Nomenclatura

Para manter a compatibilidade com CSS existente, renomeie os arquivos convertidos para:

- `soehne-web-buch.woff2` (de TestSöhne-Buch)
- `soehne-web-kraftig.woff2` (de TestSöhne-Kräftig)
- `soehne-web-halbfett.woff2` (de TestSöhne-Halbfett)
- `soehne-web-dreiviertelfett.woff2` (de TestSöhne-Dreiviertelfett)
- `soehne-mono-web-buch.woff2` (de TestSöhneMono-Buch)

## Observações Legais

Lembre-se de que a fonte Söhne é comercial e requer uma licença apropriada para uso em produção.