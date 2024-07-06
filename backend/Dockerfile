# Imagens são como templates de sistemas feitos, por Ex: Linux com Servidor Samba
FROM node:20-alpine

# Máquina virtual X trabalha com a pasta /app
WORKDIR /app

COPY db.json /app

# Roda comandos no prompt padrão da imagem bash, sh ou termux
RUN npm install -g json-server

# Por que o container age como localhost, porém para ir para nossa máquina
# Temos que expor a porta, e justamente informar pro Docker que eu posso acessar localhost:4000
EXPOSE 4000

# json-server --watch db.json
CMD ["json-server", "--port", "4000", "--watch", "db.json"]