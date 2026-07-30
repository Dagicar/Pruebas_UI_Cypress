#  Pruebas UI End-to-End con Cypress & TypeScript

Este proyecto es una suite de automatización de pruebas e2e desarrollada para validar los flujos principales de la plataforma **SauceDemo**. 

Diseñé la arquitectura aplicando el patrón **Page Object Model (POM)** para mantener un código limpio, mantenible y escalable, e integré reportes detallados junto con un pipeline de **CI/CD en GitHub Actions**.

---

##  Tecnologías y Herramientas

* **Cypress** - Framework de automatización e2e.
* **TypeScript** - Tipado estático para mejorar la calidad del código.
* **Page Object Model (POM)** - Patrón de diseño para desacoplar los locadores de la lógica de prueba.
* **Mochawesome** - Generación de reportes gráficos en HTML.
* **GitHub Actions** - Integración continua para la ejecución automática en la nube.

---

##  Instalación y Ejecución Local

### Prerrequisitos
* Node.js (versión 18 o superior)
* npm

### Pasos
1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Dagicar/Pruebas_UI_Cypress.git
   cd Pruebas_UI_Cypress
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Ejecutar pruebas en modo GUI (Interfaz Gráfica):**
   ```bash
   npx cypress open
   ```

4. **Ejecutar pruebas en modo Headless (Consola) y generar reporte:**
   ```bash
   npx cypress run
   ```

---

## ⚙️ Pipeline de CI/CD (GitHub Actions)

El proyecto cuenta con un workflow automatizado que se dispara en cada `push` o `pull_request` a la rama `main`. El pipeline realiza lo siguiente:

1. Levanta un entorno en la nube con Ubuntu y Node.js.
2. Instala las dependencias y ejecuta la suite completa en modo headless.
3. Genera y guarda como **artefactos descargables**:
   * **Reporte HTML de Mochawesome.**
   * **Capturas de pantalla (Screenshots)** automáticas en caso de fallos.