# Usa una imagen base de Node.js
FROM node:18-alpine

# Instala libpq-dev
RUN apk update && apk add postgresql-dev

# Establece el directorio de trabajo
WORKDIR /app

# Copia el archivo de configuración de pnpm
COPY . .

# Instala pnpm globalmente
RUN npm install -g pnpm

# Instala las dependencias del proyecto
RUN pnpm install

# Establece las variables de entorno
ENV PGUSER=postgres
ENV PGDATABASE=postgres

# Expone el puerto de la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["pnpm", "run", "start:dev"]