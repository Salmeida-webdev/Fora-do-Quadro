# Fora do Quadro

Landing page conceitual de portfólio para um festival imaginário de música independente, artes visuais e encontros criativos.

## Executar

O projeto é estático e não requer instalação de dependências. Abra `index.html` no navegador ou sirva a pasta por HTTP.

Para rodar um servidor local com Python:

```powershell
Set-Location "$env:USERPROFILE\Downloads\fora-do-quadro"
python -m http.server 4173
Start-Process "http://localhost:4173"
```

## Conteúdo

- `index.html`, `styles.css`, `script.js`: página sem framework ou dependências externas.
- `assets/brand`: logotipo editável em SVG, versões clara e escura, símbolo e favicon.
- `assets/images`: imagens conceituais em WebP e cartão de compartilhamento.
- `assets/audio/faixa-conceitual.mp3`: trilha instrumental original sintetizada para este conceito, 36 segundos, sem voz.
- `ASSETS.md`: formatos, dimensões e origem dos materiais.

## Notas de conteúdo

O festival, sua programação e as imagens são conceituais. Não há datas, local, artistas, patrocínio, vendas de ingresso ou inscrição. O link de WhatsApp foi incluído para contato sobre este projeto de portfólio.

## Publicação

O diretório está pronto para versionamento e hospedagem estática. Configure a raiz de publicação como `.`. Antes de publicar para cliente ou uso comercial, revise o domínio e a disponibilidade do nome e da marca, e confirme se o contato de WhatsApp deve permanecer público.
