# Desafio Back-end
            Construção de uma API de CRUD de usuários com Node.js e a biblioteca express.

<h3>Ferramentas utilizadas:<h3>

<ul> 
    <li>Node.js</li>
    <p>Para o desenvolvimento do código-fonte do back end foi utilizado o framework Node.js</p>
    <li>Visual Studio Code</li>
    <p>Ambiente de desenvolvimento integrado (IDE) utilizada para construção e manutenção do código-fonte.</p>
    <li>Sequelize</li>
    <p>Para mapear os dados relacionais do banco de dados para objetos JavaScript, foi utilizado o Sequelize, um ORM (Mapeamento objeto-relacional) para Node.js, que tem suporte a vários bancos de dados. O Sequelize permite realizar operações básicas sobre o banco de dados, identificadas pela sigla CRUD (create, read, update e delete), como criar, buscar, alterar e remover dados por meio de métodos.</p>
    <li>PostgreSQL</li>
    <p>O PostreSQL foi o banco de dados escolhido para armazenar todos os dados enviados.</p>
    <li>Heroku</li>
    <p>Para hospedagem do banco de dados do sistema foi utilizado o Heroku, que é uma plataforma como serviço (PaaS) que possibilita a criação, execução e operação de aplicativos na nuvem.</p>
    <li>OAuth 2.0</li>
    <p>Para que a máquina do cliente se autentique no sistema, foi utilizado o protocolo de autorização OAuth 2.0, que permite que uma aplicação faça autenticação em outra. Dessa forma, o sistema desenvolvido pede a permissão de acesso ao usuário, sem que para isso tenha acesso a alguma senha dele</p>
    <li>JSON Web Token (JWT)</li>
    <p> Para realizar a autenticação das requisições entre o cliente e o servidor, foi utilizado o JWT (JSON Web Token), esse processo ocorre por meio de um token assinado que autentica a requisição. Quando os dados enviados pela requisição do cliente forem autenticados no servidor, é gerado um token JWT assinado com um segredo interno da API e enviado de volta ao cliente. Ele é assinado como uma hash gerada por uma função presente no back end que guarda o segredo-chave interno da API da aplicação do projeto. Após isso, a hash é enviada de volta ao cliente, uma vez que o token e a assinatura sejam idênticos, podemos permitir o acesso do cliente a uma área restrita da nossa aplicação. </p>
    <li>Postman</li>
    <p>Para o gerenciamento das requisições HTTP e HTTPS da API REST do back end foi utilizada a ferramenta PostMan, que permite aos desenvolvedores criar, compartilhar, testar e documentar APIs.</p>
</ul>

<h3>Como começar a utilizar o repositório:</h3>
    <p>Para começar a utilizar o repositório é preciso realizar uma clonagem e baixar em sua máquina.</p>

<h3>Instalações:</h3>
<p>Para que o Back-end funcione de maneira adequada é necessário realizar a instalação de algumas ferramentas através do terminal. Para realizar esse processo, utilizamos o comando "npm install "oque deseja instalar"</p>

<h2>Segue a lista das instalações necessárias</h2>

<ul>
    <li>npm install sequelize</li>
    <li>npm install pg-hstore</li>
    <li>npm install express</li>
    <li>npm install dotenv</li>
    <li>npm install cors</li>
    <li>npm install bcryptjs</li>
    <li>npm install jsonwebtoken</li>
</ul>


