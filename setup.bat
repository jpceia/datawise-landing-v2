@echo off
echo Instalando dependências...
npm install

echo.
echo Configurando o projeto...
mkdir -p public\images

echo.
echo Projeto configurado com sucesso!
echo Para iniciar o servidor de desenvolvimento, execute: npm run dev
echo Depois acesse http://localhost:3000 no seu navegador.
