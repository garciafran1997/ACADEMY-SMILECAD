---
description: Cómo subir tu web y editarla desde cualquier ordenador
---

Para poder ver tu página online y editarla desde otros ordenadores, la mejor opción es usar **GitHub** (para el código) y **Netlify** (para el hosting).

### Paso 1: Subir tu código a GitHub
1. Crea una cuenta en [GitHub](https://github.com/).
2. Instala [Git](https://git-scm.com/) en tu ordenador si no lo tienes.
3. Abre una terminal en la carpeta de tu proyecto y ejecuta estos comandos:
   ```powershell
   git init
   git add .
   git commit -m "Primer commit: Web SMILECAD"
   ```
4. En GitHub, crea un nuevo repositorio llamado `digital-smile-clone`.
5. Copia los comandos que te da GitHub para "push an existing repository" y ejecútalos en tu terminal (serán algo como):
   ```powershell
   git remote add origin https://github.com/TU_USUARIO/digital-smile-clone.git
   git branch -M main
   git push -u origin main
   ```

### Paso 2: Publicar la web (Hosting gratuito)
1. Crea una cuenta en [Netlify](https://www.netlify.com/).
2. Pulsa en **"Add new site"** -> **"Import an existing project"**.
3. Selecciona **GitHub** y elige tu repositorio `digital-smile-clone`.
4. Netlify detectará automáticamente que es un proyecto Vite.
5. Pulsa en **"Deploy site"**. En un minuto, tu web estará publicada en una URL profesional.

### Paso 3: Editar desde otro ordenador
1. En el nuevo ordenador, instala Git y (opcionalmente) un editor como VS Code.
2. Abre la terminal y descarga tu proyecto:
   ```powershell
   git clone https://github.com/TU_USUARIO/digital-smile-clone.git
   ```
3. Haz tus cambios, y para guardarlos y que se actualicen en la web automáticamente, ejecutas:
   ```powershell
   git add .
   git commit -m "Descripción del cambio"
   git push
   ```
