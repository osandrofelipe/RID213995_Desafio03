## Contexto DESAFIO 03 DNC - Construa um Gerenciador de Tarefas

Você está iniciando o desenvolvimento de um novo site para a **DNC Technologies**. A parte visual já foi implementada, mas o site ainda está totalmente estático, sem nenhuma interatividade.

*→ Isso significa que nossos usuários, por enquanto, não conseguem adicionar produtos ao carrinho, filtrar itens ou visualizar detalhes dos produtos.*

**Nosso próximo passo é crucial: precisamos transformar essa base visual em uma experiência interativa e fluída.**

Nossos usuários precisam ser capazes de interagir com o site de maneira dinâmica através de uma funcionalidade de carrinho, de um sistema de gerenciamento de tarefas e ações simples como o envio de formulários e cliques em botões. Tudo isso deve acontecer sem a necessidade de recarregar a página, proporcionando uma experiência contínua e satisfatória.

## Como começar?

Nesse desafio, sua missão é criar um site que ofereça essa experiência dinâmica e interativa. 

- Inicie desenvolvendo a estrutura desse site de gerenciamento de tarefas com HTML e CSS
- Para a interação e modificação do conteúdo, estrutura e estilo dos componentes, manipule o DOM com Javascript

# 🎯 Etapas de Desenvolvimento

Para te ajudar no desenvolvimento do gerenciador de tarefas, você terá algumas etapas importantes para seguir:

##

## **Etapa 01) Análise do Projeto no Figma**

Nesta etapa, seu objetivo é analisar o protótipo fornecido pelo UX Designer, considerando tanto a versão mobile quanto a desktop, para planejar como iniciar o desenvolvimento do código. Para isso:

1. Examine a estrutura do protótipo no Figma para visualizar a organização do HTML que você precisará implementar.
2. Faça um rascunho da estrutura básica do site, seja no papel ou em ferramentas como [draw.io](http://draw.io/) ou [excalidraw.com](http://excalidraw.com/). 
3. **Identifique os principais blocos, como header, footer, e main, e defina se utilizará flexbox ou grid para resolver questões de responsividade**

## **Etapa 02) Estruturação do layout básico HTML**

Nesta etapa, você irá criar a estrutura básica do nosso projeto, organizando os arquivos HTML e CSS, e estruturando o layout inicial do nosso site. Não é necessário se preocupar com a estilização detalhada dos componentes, como cores ou fontes, nem com a inserção de imagens. **O foco aqui é transpor para o HTML a estrutura que imaginamos ao desenhar o site anteriormente.**

Isso significa que agora você deve escrever o código HTML e aplicar os estilos básicos de layout para garantir que ele seja responsivo, **adaptando-se tanto a dispositivos móveis quanto a desktops.**

## **Etapa 03) Finalize a estilização e a estrutura da página**

Com a estrutura básica do layout definida e funcionando tanto em mobile quanto em desktop, é hora de finalizar a criação do site, inserindo os assets e ajustando os tamanhos. Além disso, deve-se definir as fontes, aplicando os tamanhos e espaçamentos adequados.

*— Utilizar a fonte Rubik para manter o desenvolvimento fiel ao protótipo.*

## **Etapa 04) Faça a mágica acontecer com o Javascript!**

Agora que toda a estrutura do nosso site está pronta e estilizada, é hora de torná-lo dinâmico! Atente-se aos requisitos abaixo para deixar o seu gerenciador de tarefas funcional.

**Requisitos:**

1. A página deve carregar automaticamente uma lista de tarefas na renderização inicial.
2. Ao preencher o formulário e adicionar uma nova tarefa, ela deve aparecer no board de gerenciamento. 
3. Quando o usuário clicar em "Concluir", a tarefa será marcada como concluída
4. O botão "Concluir" será substituído por um ícone de check
5. O nome da tarefa deverá ficar riscado (strikethrough)
6. O contador de tarefas deve ser atualizado na parte inferior sempre que uma tarefa for concluída.