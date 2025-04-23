GitHub Profile Cards
Projeto feito para praticar a criação de componentes reutilizáveis com duas abordagens diferentes de estilização no React: Tailwind CSS e Styled-Components.
A aplicação permite buscar informações de qualquer perfil público do GitHub usando a API oficial.

Exemplo de uso

Digite o nome de usuário do GitHub e visualize:
Foto de perfil
Nome de usuário
Bio
Número de repositórios públicos
Link para o perfil

Tecnologias utilizadas:
React + Vite
Tailwind CSS
Styled-Components
React Router DOM

Como rodar o projeto
Clone o repositório:

git clone https://github.com/ggabrielfh/ReqGitApi.git
cd req-git-api

Instale as dependências:
npm install

Rode o projeto:
npm run dev

Acesse no navegador:
http://localhost:5000

Rotas disponíveis:
/tailwind → Card estilizado com Tailwind CSS
/styled → Card estilizado com Styled-Components

Observações:
A API do GitHub pode limitar o número de requisições anônimas por hora.
Se o nome de usuário não existir, a API retornará um erro (tratamento opcional).
