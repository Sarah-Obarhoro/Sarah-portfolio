<template>
    <div class="hero">
      <div class="content">
        <p class="subheading">Software Developer</p>
        <h1 class="main-heading">Sarah Obarhoro</h1>
        <p class="summary">Experienced Fullstack Developer and AI enthusiast. Frontend developer @Rendevouz | Alumni @Tech4Dev | Building @TalentNode</p>
        <button class="cta-button">Hire Me</button>
      </div>
      <div class="image-container">
        <div class="orbit">
          <img src="@/assets/images/Sarah.png" alt="Profile Picture" class="profile-image">
          <div class="circle-container">
            <div class="orbiting-circle"></div>
          </div>
        </div>
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
    font-size: 1rem;
    color: white;
    letter-spacing: 10px;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  
  .main-heading {
    font-size: 9rem;
    font-weight: bold;
    background: linear-gradient(270deg, #3f5efb, #ee0979, #fdbb2d, #22c1c3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradient-animation 8s ease infinite;
    margin-bottom: 25px;
  }
  
  .summary {
    font-size: 1.2rem;
    margin: 20px 0;
    color: white;
  }
  
  .cta-button {
    background: transparent;
    color: white;
    border: 1px solid #fff;
    border-radius: 25px;
    padding: 10px 35px;
    margin-top: 15px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background 0.3s ease, color 0.3s ease;
  }
  
  .cta-button:hover {
    background: linear-gradient(270deg, #3f5efb, #ee0979);
    border: none;
    color: black;
  }
  
  .image-container {
    position: absolute;
    margin-top: 30px;
    border: 5px solid #fff;
    border-radius: 100px;
    background-color: #999;
    left: 150px;
    top: 80px;
  }
  
  .orbit {
    position: relative;
    width: 100px;
    height: 100px;
    margin: 0 auto;
    border-radius: 50%; 
  }
  
  .profile-image {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
  
  .circle-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform-origin: 50% 50%;
    animation: orbit-animation 20s linear infinite;
  }
  
  .orbiting-circle {
    width: 20px;
    height: 20px;
    background: linear-gradient(270deg, #ee0979, #fdbb2d);
    border-radius: 50%;
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
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
  
  @keyframes orbit-animation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  @media screen and (max-width: 768px) {
    .main-heading {
      font-size: 5rem;
    }
  
    .summary {
      font-size: 1rem;
    }
  
    .cta-button {
      font-size: 1rem;
      padding: 8px 30px;
    }

    .image-container {
       top: 15%;
    }
  
    .orbit {
      width: 100px;
      height: 100px;
    }
  
    .orbiting-circle {
      width: 15px;
      height: 15px;
      top: -7.5px;
    }
    }
  </style>
