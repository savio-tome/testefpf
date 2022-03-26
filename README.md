Informações gerais: 
Frontend: angular 13
Backend: node + json

# Instruções para rodar o sistema:
1. clonar o repositório para algum diretório local.
2. Configurando o Backend: Considerando que o node esteja instalado, acessar a pasta backend e iniciar um projeto (npm init -y)
3. ainda na pasta backend, instalar o json-server. (npm i json-server). Logo após, criar um arquivo db.json
4. inicializar o servidor de backend. (json-server --watch db.json --port 3001) 

5. Configurando frontend: Acessar a pasta frontend e instalar angular, caso não esteja instalado. (npm install -g @angular/cli)
6. inicializar o servidor. (ng serve)
7. Por fim, acessarendereço http://localhost:4200/
