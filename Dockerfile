# Usa una imagen base de Node.js
FROM node:18-alpine

# Instala las dependencias necesarias para Oracle
RUN apk update && apk add --no-cache libaio

# Establece el directorio de trabajo
WORKDIR /app

# Copia el archivo de configuración de pnpm
COPY . .

# Instala pnpm globalmente
RUN npm install -g pnpm

# Instala las dependencias del proyecto
RUN pnpm install

# Establece las variables de entorno para Oracle
ENV ORACLE_USER=system
ENV ORACLE_PASSWORD=oracle
ENV ORACLE_SID=ORCLCDB
ENV ORACLE_HOST=oracle-db
ENV ORACLE_PORT=1521

# Expone el puerto de la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["pnpm", "run", "start:dev"]