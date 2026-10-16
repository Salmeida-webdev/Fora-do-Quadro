# Revisão de performance

## Implementações

- HTML, CSS e JavaScript sem framework, fonte remota ou biblioteca de animação.
- Imagem principal pré-carregada; recorte mobile separado via `<picture>`, também reutilizado na galeria. As proporções do hero e da galeria acompanham cada matriz de origem; as imagens verticais preservam 4:5 em desktop e mobile.
- Imagens abaixo da primeira dobra com `loading="lazy"` e dimensões declaradas.
- Player sem autoplay e com `preload="none"`; a faixa só é solicitada após a reprodução.
- Animações em CSS com alternativa para `prefers-reduced-motion`.
- Sem vídeo de fundo, embeds, analytics ou chamadas externas de terceiros.
- Retícula e molduras desenhadas em CSS/SVG; sem textura raster pesada.

## Peso local dos arquivos

Valores aproximados do pacote de produção; o total das quatro imagens WebP é cerca de 494 KB. A faixa MP3 tem cerca de 423 KB e só carrega sob demanda. O CSS, o JS, o favicon e as marcas somam poucos KB.

## Métricas de laboratório

Lighthouse e Core Web Vitals ainda não foram medidos neste ambiente: o navegador automatizado local não estava instalado e o preview isolado não alcançou o servidor local. Não há nota de performance presumida. Depois do deploy, medir em Chrome/Lighthouse com cache limpo e perfil mobile; registrar URL, data, modo e resultados de LCP, CLS, INP, Performance e Acessibilidade.
