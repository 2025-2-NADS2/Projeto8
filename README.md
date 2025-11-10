
# FECAP - Fundação de Comércio Álvares Penteado

<p align="center">
<a href= "https://www.fecap.br/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhZPrRa89Kma0ZZogxm0pi-tCn_TLKeHGVxywp-LXAFGR3B1DPouAJYHgKZGV0XTEf4AE&usqp=CAU" alt="FECAP - Fundação de Comércio Álvares Penteado" border="0"></a>
</p>

# AlmaTech

## Grupo 8

## Integrantes: <a href="https://www.linkedin.com/in/enzo-minardi/"> Enzo Minardi </a>, <a href="https://www.linkedin.com/in/andreluisdesousa/"> André Luis </a>, <a href="https://www.linkedin.com/in/jo%C3%A3o-guilherme-gumiero-de-micheli/"> João Guilherme </a>, <a href="https://www.linkedin.com/in/samuel-cavalcanti-nunes-coronel-5b6946354/"> Samuel Cavalcanti </a>

## Professores Orientadores: <a href="https://www.linkedin.com/in/ronaldo-araujo-pinto-3542811a/">Ronaldo Araujo Pinto</a>, <a href="https://www.linkedin.com/in/francisco-escobar/">Francisco de Souza Escobar</a>, <a href="https://www.linkedin.com/in/jbuesso/">José Carlos Buesso Jr</a>, <a href="https://www.linkedin.com/in/victorbarq/">Victor Bruno Alexander Rosetti de Quiroz</a>, <a href="https://www.linkedin.com/in/eduardo-savino-gomes-77833a10/">Eduardo Savino Gomes</a>

## Descrição

<p align="center">
<img <img width="225" height="225" alt="logo" src="https://github.com/user-attachments/assets/e2598568-a372-4aee-a94a-9e7f4ab189a9" />


 Este projeto consiste em um site responsivo desenvolvido para um instituto de caridade como parte de um trabalho acadêmico da FECAP. O objetivo é oferecer uma plataforma acessível que apresente a instituição, suas iniciativas e meios de participação, incentivando o engajamento da comunidade.
<br></br>
O site foi construído com foco em usabilidade e design moderno, garantindo adaptação a diferentes dispositivos, como computadores, tablets e celulares. Assim, proporciona uma navegação simples, intuitiva e inclusiva para todos os usuários.
<br></br>

## 🛠 Estrutura de pastas

-Raiz

|

|-->documentos

 |-->Entrega 1>

 |-->Entrega 2>

 |-->README.md>

|-->imagens

|-->src

  |-->Backend
  
  |-->Frontend
  
 |readme.md

A pasta raiz contem dois arquivos que devem ser alterados:

<b>README.MD</b>: Arquivo que serve como guia e explicação geral sobre seu projeto. O mesmo que você está lendo agora.

Há também 4 pastas que seguem da seguinte forma:

<b>documentos</b>: Toda a documentação estará nesta pasta.

<b>executáveis</b>: Binários e executáveis do projeto devem estar nesta pasta.

<b>imagens</b>: Imagens do sistema

<b>src</b>: Pasta que contém o código fonte.

## 🛠 Instalação
```sh
Pré-requisitos
Antes de começar, certifique-se de ter os seguintes softwares instalados no seu sistema:

Node.js (versão 16 ou superior): Necessário para executar o backend (Express) e o frontend (React com Vite). Baixe em nodejs.org.
Git: Para clonar o repositório do projeto. Baixe em git-scm.com.
Navegador web: Para testar o frontend (ex.: Chrome ou Firefox).
Editor de código: Recomendado VS Code para editar os arquivos.
Baixando o Projeto via Terminal
Assumindo que o projeto está hospedado em um repositório Git (como GitHub), use os comandos abaixo para cloná-lo. Substitua <URL_DO_REPOSITORIO> pela URL real do repositório (ex.: https://github.com/usuario/projeto.git). Se não houver repositório, copie os arquivos manualmente para uma pasta local.

Abra o terminal (no Windows, use PowerShell ou CMD; no macOS/Linux, Terminal).
Navegue para a pasta onde deseja salvar o projeto:
cd caminho/para/sua/pasta
Clone o repositório:
git clone <URL_DO_REPOSITORIO>
Entre na pasta do projeto clonado:
cd nome-da-pasta-do-projeto
Instalando Dependências
O projeto tem dois componentes principais: um backend em Node.js/Express e um frontend em React/TypeScript com Vite. Instale as dependências separadamente.

Para o backend (pasta raiz ou backend/, se separado):
npm install
(Isso instala pacotes como Express, conforme visto em app.js).

Para o frontend (pasta raiz ou frontend/, se separado):
npm install
(Isso instala React, Vite, TypeScript e plugins como ESLint, conforme visto em App.tsx, main.tsx, etc.).

Se preferir Yarn em vez de npm:

yarn install (para ambas as partes).

Como Fazer o Projeto Funcionar
O projeto é full-stack: backend serve APIs (ex.: api/Usuario) e frontend é uma aplicação React.

Executar o backend:

Na pasta do backend: npm start ou node app.js (se configurado).
O servidor roda na porta padrão (geralmente 5104 ou conforme configurado(7183). Teste acessando http://localhost:5104/api... no navegador para ver { "ok": true, "server": "up" }.
Executar o frontend:

Na pasta do frontend: npm run dev (Vite inicia um servidor de desenvolvimento).
Abra http://localhost:5173 (porta padrão do Vite) no navegador. O app React será carregado, incluindo componentes como Header, Hero, etc.
O Service Worker será registrado automaticamente para funcionalidades offline, conforme main.tsx.
Executar ambos simultaneamente: Use ferramentas como concurrently (instale via npm install concurrently) ou rode em terminais separados. Exemplo:

Terminal 1 (frontend): npm run dev
Build para produção:

Frontend: npm run build (gera arquivos em dist/).
Backend: Sevidor conectado via C# localizado podendo ser tanto localmente quanto so servidor Azure.


Se houver erros, verifique logs no terminal. Certifique-se de que as portas não estejam ocupadas. Para desenvolvimento, use npm run dev para hot-reload..
```
````
Configuração backend

Resumo do que precisa instalar
Para executar um projeto baseado em um arquivo .sln (como o ServidorProjeto.sln, que indica um projeto .NET, provavelmente em C#), você precisará dos seguintes componentes principais. Esses são típicos para projetos .NET no Windows, mas podem variar dependendo da plataforma cruzada:

.NET SDK : Versão compatível com o projeto (ex.: .NET 6 ou superior). É necessário para compilar e executar o código.
Visual Studio ou Visual Studio Code : Recomendado para abrir e editar o .sln. O Visual Studio Community é gratuito e inclui ferramentas para .NET.
Dependências do projeto : Geralmente ocorrem no arquivo .csproj dentro da solução (ex.: pacotes NuGet como Entity Framework, ASP.NET Core, etc.). Eles são instalados automaticamente via NuGet.
Sistema operacional : Windows (preferencial para .sln), mas pode funcionar em Linux/Mac com .NET Core/5+.
Banco de dados (se aplicável) : Se o projeto usar SQL Server, MySQL ou outro, instale o servidor correspondente (ex.: SQL Server Express).
Como fazer o projeto funcionar
Siga estas etapas para configurar e executar o projeto após o download:

Abra o projeto : Use o Visual Studio para abrir o arquivo .sln. Ele carregará a solução e detectará dependências.
Restaurar pacotes : No Visual Studio, clique com o botão direito na solução e selecione "Restaurar Pacotes NuGet" para instalar dependências automaticamente.
Compile o projeto : Pressione F6 ou use o menu "Compilar" > "Compilar Solução". Isso gera os binários.
Execute o projeto : Pressione F5 para depurar ou use "Executar sem Depuração". Se for um servidor web (ex.: ASP.NET), ele será iniciado em um navegador local (geralmente http://localhost:5000).
Configurações adicionais : Verifique o arquivo appsettings.json para configurações como strings de conexão de banco. Se houver migrações de banco, execute comandos como dotnet ef database updateno terminal.
Testes : Execute testes unitários através do menu "Testar" no Visual Studio, se houver.
Códigos para baixar via terminal
Supondo que o projeto esteja hospedado em um repositório Git (ex.: GitHub), utilize os comandos abaixo no terminal (Git Bash no Windows ou terminal Linux/Mac). Substitua <URL_DO_REPOSITORIO>pela URL real do repositório (ex.: https://github.com/usuario/ServidorProjeto.git). Se não for para um repositório, o download direto pode ser feito com wget, mas o arquivo .sln é binário e pode precisar de contexto adicional.

Clonar o repositório via Git (recomendado para projetos completos):


Copiar código
git clone <URL_DO_REPOSITORIO>
cd ServidorProjeto

Após o download, navegue até a pasta do projeto e execute dotnet restorepara instalar dependências, seguido de dotnet runpara executar. Se houver erros, verifique logs ou compatibilidade de versão.

````

## 📋 Licença/License
````
Licença AlmaTech Open Source

Copyright (c) 2025 Almatech — Enzo Minardi, Samuel Cavalcanti, André Rodrigues e João Gumiero

1. Permissão de uso

Este projeto é disponibilizado de forma aberta e gratuita, com o objetivo de promover o compartilhamento de conhecimento e a colaboração técnica, sem fins lucrativos.

Usuários podem:

Visualizar, estudar e utilizar o código para fins educacionais, acadêmicos ou pessoais;

Compartilhar o projeto mantendo os créditos originais da equipe AlmaTech.

2. Restrições

Não é permitido:

Utilizar este projeto, total ou parcialmente, para fins comerciais sem autorização prévia e por escrito dos autores;

Modificar, redistribuir, sublicenciar ou criar derivados sem autorização expressa;

Remover, alterar ou ocultar avisos de direitos autorais, logotipos ou créditos da equipe AlmaTech.

3. Créditos obrigatórios

Toda reprodução, apresentação, publicação ou compartilhamento deste projeto deve incluir claramente o crédito:

“Desenvolvido pela AlmaTech — Enzo Minardi, Samuel Cavalcanti, André Rodrigues e João Gumiero”

4. Isenção de responsabilidade

Este projeto é fornecido "no estado em que se encontra", sem garantias de qualquer tipo, expressas ou implícitas.
Os autores não se responsabilizam por danos diretos ou indiretos resultantes do uso do código.

5. Sobre a AlmaTech

A AlmaTech é uma organização internacional sem fins lucrativos que capacita as pessoas a desenvolver e sustentar o patrimônio comum de conhecimento e cultura compartilhados, essencial para enfrentarmos os desafios mais urgentes do mundo e criarmos um futuro melhor para todos.
````
## 🎓 Referências
````
Algumas referencias que foram ultilizadas para a realização deste projeto

Video azure - https://www.youtube.com/watch?v=dH6aZneyUMM&t=486s
Git hub professor Victor Rosetti - https://github.com/VictorRosetti
Ebooks Professor Francisco - Arquivos Moodle
````
