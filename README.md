# Cómo ejecutar este proyecto Vue 3 con Vite

Este archivo contiene las instrucciones básicas para ejecutar este proyecto localmente. 

---

## Instalación

1. Cambia al directorio del proyecto:
   ```bash
   cd <directorio-del-proyecto>
   ```

2. Instala las dependencias necesarias:
   ```bash
   npm install
   ```

---

## Ejecutar la aplicación localmente

Para iniciar el servidor de desarrollo:
```bash
npm run dev
```

Esto levantará el proyecto en un servidor local. Una vez que el servidor esté corriendo, podrás acceder a la aplicación en tu navegador en la dirección indicada (normalmente `http://localhost:3000`).

---

## Scripts disponibles

- **`dev`**: Inicia el servidor de desarrollo con Vite.
- **`build`**: Compila el proyecto para producción.
- **`preview`**: Inicia un servidor para previsualizar la versión compilada.

---

## Problemas comunes

1. **Error: `Missing script: "serve"`**
   - Solución: Usa el comando `npm run dev` en lugar de `npm run serve`.

2. **Faltan dependencias**:
   - Asegúrate de ejecutar `npm install` antes de cualquier otro comando.

---
