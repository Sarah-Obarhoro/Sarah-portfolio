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
        <div class="social-media">
            <a href="https://www.facebook.com" target="_blank" class="social-icon"><i class="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com" target="_blank" class="social-icon"><i class="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com" target="_blank" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
            <a href="https://www.twitter.com" target="_blank" class="social-icon"><i class="fab fa-twitter"></i></a>
            <a href="https://www.github.com" target="_blank" class="social-icon"><i class="fab fa-github"></i></a>
        </div>
    </div>
    <div class="about-section">
            <div class="about-card">
                <div class="about-heading">
                    <h2>My Background</h2>
                </div>
                <div class="about-content">
                <p>
                    I am a lover of technology, creativity and art. A Software Developer, an Alumni of the Tech4Dev Foundation where i polished my skills properly. I have a Bachelors in English and Linguistics.
                </p>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage'
  }
  </script>

  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

  <style scoped>
  body {
    background-color: black;
    color: white;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  }
  
  .hero {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
    background-color: black;
    margin: auto;
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
    font-family: 'Roboto', sans-serif;
  }
  
  .main-heading {
    font-size: 9rem;
    font-weight: bold;
    background: linear-gradient(270deg, #3f5efb, #ee0979, #fdbb2d, #22c1c3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradient-animation 20s ease infinite;
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
    position:relative;
    top: -350px;
    right: 900px;
    border: 5px solid #fff;
    border-radius: 100px;
    background-color: #999;
    -webkit-transform: translateX(0);
    transform: translateX(10);
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

  .social-media {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
  }

  .social-icon {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    margin: 10px 0;
    transition: color 0.3s ease;
  }

  .social-icon:hover {
    color: #3f5efb;
  }
  
  .about-section {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 20px;
    background-color: #000;
}

 .about-card {
    justify-content: space-between;
    align-items: center;
    background: #0c0c0c;
    box-shadow: 0 4px 8px rgba(37, 37, 37, 0.1);
    border-radius: 10px;
    padding: 40px;
    max-width: 1200px;
    width: 100%;
    margin: 20px;
}

 .about-heading {
    flex: 1;
    margin-right: 20p  x;
}

 .about-heading h2 {
    font-size: 1.2rem;
    color: #a3a2a2;
    margin: 0;
    padding: 20px 0;
    letter-spacing: 8px;
}

  .about-content {
   flex: 3;
}

  .about-content p {
   font-size: 4rem;
   color: #fff;
   text-align: left;
   margin: 0;
   line-height: 1.2;
   font-family: "Young Serif", serif;
   font-weight: 400;
}


  @keyframes gradient-animation {
    0% {
        filter: hue-rotate(0deg);
    }
    50% {
        filter: hue-rotate(180deg);
    }
    100% {
        filter: hue-rotate(360deg);
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
    .hero {
       margin: auto;
       margin-left: 15px;
      
    }
    .main-heading {
      font-size: 4.5rem;
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
       position:relative;
       top: -280px;
       right: 250px;
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

    .social-media {
      right: 10px;
      top: 30%;
    }

    .social-icon {
      font-size: 1.2rem;
    }

    .about-card {
      flex-direction: column;
      padding: 20px;
    }

    .about-heading {
      margin-bottom: 20px;
      margin-right: 0;
    }

    .about-heading h2 {
      font-size: 1.2rem;
    }

    .about-content p {
      font-size: 1.2rem;
    }
}
  </style>
