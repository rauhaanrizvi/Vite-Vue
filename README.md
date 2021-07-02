# Vite Vue

A Vue.js 3 setup for frontend web development and prototyping using Vite and Windi CSS.

For more on Vite, check out https://vitejs.dev/guide/ to get started. 

For more on Vue.js, check out https://v3.vuejs.org/guide/introduction.html to get started. 

For more on Windi CSS, check out https://windicss.org/guide/ to get started. 

# Installing Dependencies

1. Navigate to the project root and open a terminal from there, for example:

    ```
    /var/www/project-path/
    ```

2. Install with NPM:

    ```bash
    $ npm install
    ```

    For more on Composer, check out https://docs.npmjs.com/ to get started. 

# Developing for Prototyping

1. After installing the dependencies, compile with the following run script:

    ```bash
    $ npm run dev
    ```

2. Access the dev pages at http://localhost:3000/ as follows:

    * http://localhost:3000/ for the Home page

    * http://localhost:3000/about/ for the About page

    Then start developing the rest of pages inside `/src/pages/` following these two preceding examples.

# Building for Prototyping

1. After completing the development, compile with the following run script:

    ```bash
    $ npm run build
    ```

2. Access the application at the `/dist/` folder.

# Static & Processed Asset Handling

1. Use the `/src/assets/images/` folder for images that you want to be processed. Then in your HTML tags, use `@/assets/images/` to request your images, for example:
    
    ```
    <img src="@/assets/images/...-unsplash.jpg">
    ```

2. Use the `/public/static/` folder for images that you do NOT want to be processed. Then in your HTML tags, use `/static/` to request your images, for example:

    ```
    <img src="/static/...-unsplash.jpg">
    ```
