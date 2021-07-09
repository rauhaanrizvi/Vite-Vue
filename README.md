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

# Handling Static & Processed Assets

1. Use the `/src/assets/images/` folder for images that you want to be processed. Then in your HTML tags, use `@/assets/images/` to request your images, for example:
    
    ```
    <img src="@/assets/images/...-unsplash.jpg">
    ```

2. Use the `/public/static/` folder for images that you do NOT want to be processed. Then in your HTML tags, use `/static/` to request your images, for example:

    ```
    <img src="/static/...-unsplash.jpg">
    ```

# Handling Dynamic Static and Processed Assets

1. Use the `/src/assets/images/` folder for images that you want to be processed. Then in your `<script>` and `<template>` blocks, use one of the following global methods to request your images, for example:

    1. Using the `$getAsset` method (plugin):
    
        ```
        // script
        data () {
          return {
            data: {}
          }
        },

        async created () {
          let { data } = await this.$axios.get(this.$route.path)
          this.data.thumbnail = this.$getAsset(data.thumbnail)
        }

        // template
        <img :src="data.thumbnail" v-if="data.thumbnail">
        ```

        Alternatively:

        ```
        data () {
          return {
            thumbnail: null
          }
        },

        async created () {
          let { data } = await this.$axios.get(this.$route.path)
          this.thumbnail = this.$getAsset(data.thumbnail)
        }

        <img :src="thumbnail">
        ```

        Or, use the method directly in the `<template>` block without having to set the data property in the `<script>` block:

        ```
        <img :src="$getAsset(data.thumbnail)" v-if="data.thumbnail">
        ```

    2. Using the `getAsset` method (mixin):
    
        ```
        // script
        data () {
          return {
            data: {}
          }
        },

        async created () {
          let { data } = await this.$axios.get(this.$route.path)
          this.data.thumbnail = this.getAsset(data.thumbnail)
        }

        // template
        <img :src="data.thumbnail" v-if="data.thumbnail">
        ```

        Alternatively:

        ```
        data () {
          return {
            thumbnail: null
          }
        },

        async created () {
          let { data } = await this.$axios.get(this.$route.path)
          this.thumbnail = this.getAsset(data.thumbnail)
        }

        <img :src="thumbnail">
        ```

        Or, use the method directly in the `<template>` block without having to set the data property in the `<script>` block:

        ```
        <img :src="getAsset(data.thumbnail)" v-if="data.thumbnail">
        ```

    3. Using the `getAsset` method (module):
    
        ```
        // script
        import { getAsset } from '@/modules/utils'

        async created () {
          let { data } = await this.$axios.get(this.$route.path)
          this.data.thumbnail = getAsset(data.thumbnail)
        }

        // template
        <img :src="data.thumbnail" v-if="data.thumbnail">
        ```

        Alternatively:

        ```
        import { getAsset } from '@/modules/utils'

        data () {
          return {
            thumbnail: null
          }
        },

        async created () {
          let { data } = await this.$axios.get(this.$route.path)
          this.thumbnail = getAsset(data.thumbnail)
        }

        <img :src="thumbnail">
        ```

        Or, use the method directly in the `<template>` block without having to set the data property in the `<script>` block:

        ```
        import { getAsset } from '@/modules/utils'

        <img :src="getAsset(data.thumbnail)" v-if="data.thumbnail">
        ```

        It is recommended to import global methods explicitly where they are required only rather than making them globally everywhere.

2. Use the `/public/static/` folder for images that you do NOT want to be processed. Then in your `<script>` and `<template>` blocks, use one of the following global methods to request your images, for example:


    1. Using the `$getStatic` method (plugin):
    
        ```
        // script
        data () {
          return {
            data: {}
          }
        },

        async created () {
          let { data } = await this.$axios.get(this.$route.path)
          this.data = data
        }

        // template
        <img :src="$getStatic(data.static)" v-if="data.static">
        ```

        Alternatively:

        ```
        data () {
          return {
            static: null
          }
        },

        async created () {
          let { data } = await this.$axios.get(this.$route.path)
          this.static = this.$getStatic(data.static)
        }

        <img :src="static">
        ```

        Or, use the method directly in the `<template>` block without having to set the data property in the `<script>` block:

        ```
        <img :src="$getStatic(data.static)" v-if="data.static">
        ```

    2. Using the `getStatic` method (mixin):
    
        ```
        // script
        data () {
          return {
            data: {}
          }
        },

        async created () {
          let { data } = await this.$axios.get(this.$route.path)
          this.data = data
        }

        // template
        <img :src="getStatic(data.static)" v-if="data.static">
        ```

        Alternatively:

        ```
        data () {
          return {
            static: null
          }
        },

        async created () {
          let { data } = await this.$axios.get(this.$route.path)
          this.static = this.getStatic(data.static)
        }

        <img :src="static">
        ```

        Or, use the method directly in the `<template>` block without having to set the data property in the `<script>` block:

        ```
        <img :src="getStatic(data.static)" v-if="data.static">
        ```

    3. Using the `getStatic` method (module):
    
        ```
        // script
        import { getStatic} from '@/modules/utils'

        data () {
          return {
            data: {}
          }
        },

        async created () {
          let { data } = await this.$axios.get(this.$route.path)
          this.data = data
        }

        // template
        <img :src="getStatic(data.static)" v-if="data.static">
        ```

        Alternatively:

        ```
        import { getStatic} from '@/modules/utils'

        data () {
          return {
            static: null
          }
        },

        async created () {
          let { data } = await this.$axios.get(this.$route.path)
          this.static = getStatic(data.static)
        }

        <img :src="static">
        ```

        Or, use the method directly in the `<template>` block without having to set the data property in the `<script>` block:

        ```
        import { getStatic} from '@/modules/utils'

        <img :src="getStatic(data.static)" v-if="data.static">
        ```

        It is recommended to import global methods explicitly where they are required only rather than making them globally everywhere.

# Installing CSS Pre-processors

Install your favourite CSS pre-processors as follows:

1. Navigate to your root directory.

2. Install one of them (or all) via NPM:

    ```
    # .scss and .sass
    npm install -D sass

    # .less
    npm install -D less

    # .styl and .stylus
    npm install -D stylus
    ```

Read More:

* https://vitejs.dev/guide/features.html#css-pre-processors

# Mocking Data

You need to install JSON Server and run the existing mock data as follows:

```
$ json-server --watch db.json --port 3004
```

For more on JSON Server, check out https://github.com/typicode/json-server#getting-started to get started. 

You can follow the steps below to install and create the mock data:

1. Install JSON Server:

    ```
    $ sudo npm install -g json-server
    ```

2. Navigate to the root directory and create a `db.json` with your mock data, for example:

    ```
    {
      "posts": [
        { "id": 1, "title": "json-server", "author": "Jane Doe" }
      ],
      "comments": [
        { "id": 1, "body": "some comment", "postId": 1 }
      ],
      "profile": { "name": "Jane Doe" }
    }
    ```

3. Start the JSON Server on port 3004 (or other ports as long as it is not 3000):

    ```
    $ json-server --watch db.json --port 3004
    ```

    You should see the following output on your terminal:

    ```
    \{^_^}/ hi!

    Loading db.json
    Done

    Resources
    http://localhost:3004/posts
    http://localhost:3004/comments
    http://localhost:3004/profile

    Home
    http://localhost:3004

    Type s + enter at any time to create a snapshot of the database
    Watching...
    ```

4. Now if you go to http://localhost:3004/posts/1, you should get the result below:

    ```
    { "id": 1, "title": "json-server", "author": "Jane Doe" }
    ```

# Handling SEO

Single-page apps render your content dynamically using JavaScript and an empty HTML. Hence, search engine crawlers are not able to collect the content (i.e. the text) and stores it in a databank.

There are two options to solve this SPA drawback in SEO:

* Generating static pages from the SPA using a static site generator.

* Converting the SPA into a server-side rendering (SSR) application.

# Generating Static Pages

There are many options you can generate static pages from your SPA:

* [Vuepress](https://vuepress.vuejs.org/)

    However, you can't use external APIs for serving your app contents with this option. You need to use .md files to create your contents and routes locally within the Vuepress app. 

* [Gridsome](https://gridsome.org/)

    A Gridsome app can work with any headless CMS, API or database by using a GraphQL data layer. This means you need to know how to query your data using GraphQL queries. Hence, it can be complicated.

* [Nuxt Static Generated Mode](https://nuxtjs.org/docs/2.x/concepts/static-site-generation)

    With this option, you can use external APIs, local APIs, or even using .md files for serving your app content. But Nuxt is a SSR framework, so you need to refactor your SPA and convert it into a SSR app.

* [Puppeteer](https://github.com/puppeteer/puppeteer)

    With this option, you don't need to refactor your SPA, you can use external APIs as it is. However, it requires extra works as you need to write some functions to use this Node library to scrape your SPA.

* [Vue Storefront Static Pages Generator](https://docs.vuestorefront.io/v1/guide/basics/static-generator.html)

    You should only go for this option if you are building a eCommerce site with Vue.js.

Read More:

* https://vue-community.org/guide/ecosystem/static-site-generators.html

# Building SSR Applications

There are options you can convert your SPA into a SSR app:

* Integrating with a Node.js server-side framework manually, such as [Express](https://expressjs.com/).

* Using [Nuxt](https://nuxtjs.org/) directly instead. You can also integrate Nuxt with Express or using Express separately as an API without internal integration.

Read More:

* https://v3.vuejs.org/guide/ssr/getting-started.html#installation

* https://vitejs.dev/guide/ssr.html#setting-up-the-dev-server

# Notes

1. The method and data property names should not be the same. Otherwise they they will conflict with each other. For example:

    ```
    data () {
      return {
        hello: null
      }
    },

    methods: {
      hello () {...}
    },
    ```

    This pattern will yell the following error:

    ```
    [Vue warn]: Data property "hello" is already defined in Methods. 
    ```

    Same in a plain JavaScript code:

    ```
    let hello = null
    function hello () {
      //
    }
    ```

    This pattern will yell the following error:

    ```
    Uncaught SyntaxError: Identifier 'hello' has already been declared
    ```

    Same with the following pattern:

    ```
    var hello = 'world'
    function hello () {
      return 'HELLO!'
    }

    console.log(hello) // world
    console.log(hello()) // Uncaught TypeError: hello is not a function
    ```
