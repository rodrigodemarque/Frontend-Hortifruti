# HortiFruti - Frontend Angular

Aplicação frontend do sistema HortiFruti, desenvolvida com Angular 20.0.5 para gerenciar operações do mercado hortifruti com interface moderna e responsiva.

---

## Índice

- [Sobre](#sobre)
- [Tecnologias](#tecnologias)
- [Instalação](#instalacao)
- [Como executar](#como-executar)
- [Build para produção](#build-para-producao)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Configurações e Variáveis de Ambiente](#configuracoes-e-variaveis-de-ambiente)
- [Contribuição](#contribuicao)
- [Licença](#licenca)
- [Contato](#contato)

---

## Sobre

Este projeto é o frontend da aplicação HortiFruti, responsável pela interface do usuário para controle e visualização dos dados de hortifruti, integrado com a API backend (WebAPI-HortiFruti).

---

## Tecnologias

- Angular 20.0.5  
- TypeScript  

---

## Instalação

Clone o repositório:

```bash
git clone https://github.com/rodrigodemarque/hortifruti-frontend.git
cd hortifruti-frontend
Instale as dependências:

bash
Copiar
Editar
npm install
Como executar
Para rodar o servidor de desenvolvimento e abrir no navegador:

bash
Copiar
Editar
ng serve
Acesse em: http://localhost:4200

ou rode direto e abra o navegador:

bash
Copiar
Editar
ng serve -o
O servidor ficará monitorando as alterações e recarregará automaticamente.

Build para produção
Para gerar uma build otimizada para produção:

bash
Copiar
Editar
ng build --configuration production
Os arquivos compilados ficarão na pasta dist/hortifruti-frontend.

Estrutura do Projeto
plaintext
Copiar
Editar
src/
├── app/             # Componentes, serviços, módulos 
├── assets/          # Imagens, estilos, ícones 
├── environments/    # Configurações para diferentes ambientes 
├── index.html       # HTML principal 
└── styles.css       # Estilos globais 
Configurações e Variáveis de Ambiente
Configure o arquivo src/environments/environment.ts para o ambiente de desenvolvimento e environment.prod.ts para produção.

Exemplo:

typescript
Copiar
Editar
export const environment = {
  production: false,
  apiUrl: 'http://localhost:5000/api'  // URL da WebAPI-HortiFruti
};
Contribuição
Contribuições são bem-vindas! Para contribuir:

Faça um fork do projeto

Crie sua branch feature:

bash
Copiar
Editar
git checkout -b minha-feature
Faça commit das suas alterações:

bash
Copiar
Editar
git commit -m 'Minha feature'
Envie para o repositório remoto:

bash
Copiar
Editar
git push origin minha-feature
Abra um Pull Request

Licença
Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para detalhes.

Contato
Rodrigo Demarque da Silva
Email: rodrigodemarque@gmail.com
LinkedIn: https://www.linkedin.com/in/rodrigodemarque/
Site/Portfolio: https://www.capitalbots.com.br
