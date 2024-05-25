<template>
    <div class="hero">
      <div class="content">
        <p class="subheading">Software Developer</p>
        <h1 class="main-heading">Sarah Obarhoro</h1>
        <p class="summary">Frontend developer @Rendevouz | Backend developer @Tech4Dev | Building @TalentNode</p>
        <button class="cta-button">Hire Me</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage'
  }
  </script>
  
  <style scoped>
  body {
    background-color: black;
    color: white;
    font-family: 'Arial', sans-serif;
  }
  
  .hero {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    background-color: black;
  }
  
  .content {
    max-width: 800px;
    padding: 20px;
  }
  
  .subheading {
    font-size: 1.rem;
    color: white;
    letter-spacing: 10px;
    text-transform: uppercase
  }
  
  .main-heading {
    font-size: 8rem;
    font-weight: bold;
    background: linear-gradient(270deg, #3f5efb, #ee0979);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradient-animation 5s ease infinite;
  }
  
  .summary {
    font-size: 1.3rem;
    margin: 20px 20px;
    color: white;
  }
  
  .cta-button {
    background: transparent;
    color: white;
    border: 1px solid #fff;
    border-radius: 25px;
    padding: 10px 35px;
    margin-top: 15px;
    font-size: 1.5rem;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  
  .cta-button:hover {
    background: linear-gradient(270deg, #3f5efb, #ee0979);
    border: none;
  }
  
  @keyframes gradient-animation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  </style>
  