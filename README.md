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

    1. Using the `$asset` method (plugin):
    
    ```
    // script
    data () {
      return {
        data: {}
      }
    },

    async created () {
      let { data } = await this.$axios.get(this.$route.path)
      this.data.thumbnail = this.$asset(data.thumbnail)
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
      this.thumbnail = this.$asset(data.thumbnail)
    }

    <img :src="thumbnail">
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

2. Use the `/public/static/` folder for images that you do NOT want to be processed. Then in your `<script>` and `<template>` blocks, use one of the following global methods to request your images, for example:


    1. Using the `$static` method (plugin):
    
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
    <img :src="$static(data.static)" v-if="data.static">
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
      this.static = this.$static(data.static)
    }

    <img :src="staticThumbnail">
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
    <img :src="static(data.static)" v-if="data.static">
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
      this.staticThumbnail = this.getStatic(data.static)
    }

    <img :src="static">
    ```

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
