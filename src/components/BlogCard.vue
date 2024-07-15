<template>
    <div>
      <div v-for="article in articles" :key="article._id">
        <h2>{{ article.title }}</h2>
        <p>{{ article.description }}</p>
       <p><a :href="article.url">Read more</a> </p>
      </div>
    </div>
  </template>
  
  <script>
   const Secret_KEY = `proccess.env.MY_DEV_KEY`
  
  export default {
    data() {
      return {
        articles: []
      };
    },
    mounted() {
     fetch('https://api.hashnode.com/v1/me/articles', {
            headers: {
              Authorization: Secret_KEY
            }
          })
        .then(res => res.json())
        .then(data => {
          this.articles = data;
        });
    }
  };
  </script>
  