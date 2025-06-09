<template>
    <div class="hero">
        <div class="content">
            <p class="subheading">Lead Frontend Engineer</p>
            <h1 class="main-heading">Sarah Obarhoro</h1>
            <p class="summary">Lead Frontend Engineer with 4+ years architecting high-performance web and mobile applications. Expert in JavaScript ecosystems & team leadership.</p>
            <button class="cta-button" @click="hireMe">Hire Me</button>
        </div>
        <div class="image-container">
            <div class="orbit">
                <img src="@/assets/images/Sarah.jpeg" alt="Profile Picture" class="profile-image">
            <div class="circle-container">
                <div class="orbiting-circle"></div>
            </div>
            </div>
        </div>
        <div class="social-media">
            <a href="https://web.facebook.com/sarah.obarhoro/" target="_blank" class="social-icon"><i class="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/sara_obarhoro/" target="_blank" class="social-icon"><i class="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/sarah-obarhoro/" target="_blank" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
            <a href="https://x.com/Saay_raahh" target="_blank" class="social-icon"><i class="fab fa-twitter"></i></a>
            <a href="https://github.com/Sarah-Obarhoro" target="_blank" class="social-icon"><i class="fab fa-github"></i></a>
        </div>
    </div>
    <div class="about-section">
            <div class="about-card">
                <div class="about-heading">
                    <h2>My Background</h2>
                </div>
                <div class="about-content">
                  <p>
                    Lead Frontend Engineer passionate about building scalable web solutions and fostering high-performing teams.
                    <br><br>
                    With over 4 years of experience leading frontend development, I’ve delivered fast, responsive applications that cut time-to-market by 60% and boosted user engagement by 65%.
                    <br><br>
                    Rooted in a background in English & Literary Studies, I bring a distinct blend of analytical thinking, creative problem-solving, and clear communication to technical leadership—translating complex ideas into elegant digital experiences.
                  </p>
            </div>
        </div>
    </div>

    <div class="achievements-section">
      <div class="achievements-card">
        <div class="achievements-heading">
          <h2>Key Achievements</h2>
        </div>
        <div class="achievements-content">
          <p>
            • Led the frontend team for a lifestyle platform, achieving 70% faster load times and a 20% boost in user engagement.  
            <br><br>
            • Architected reusable UI component libraries, reducing time-to-delivery by 60% across multiple projects.  
            <br><br>
            • Automated payroll processing for over 50,000 salaries monthly with 99.8% accuracy.  
            <br><br>
            • Secured 10K+ daily transactions for enterprise clients by implementing JWT-based authentication and eliminating 70% of vulnerabilities.  
            <br><br>
            • Delivered 15+ custom web and mobile applications as an independent consultant, improving client conversion rates by 40%.  
          </p>
        </div>
      </div>
    </div>

    <div class="stack-section">
        <div class="stack-card">
            <div class="stack-heading">
                <h2>Technology Stack</h2>
            </div>
            <div class="stack-content">
              <p>
                JavaScript (ES6+), TypeScript, React (Hooks), Vue 3 (Composition API), Next.js, Nuxt 3, React Native, Node.js, Express, PostgreSQL, MongoDB, Firebase
              </p>
            </div>
        </div>
  </div>
  <div class="proficiency-section">
    <div class="proficiency-card">
      <div class="proficiency-heading">
          <h2>Leadership & Expertise</h2>
      </div>
      <div class="proficiency-content">
          <p>
              Team Leadership, System Architecture, Performance Optimization, CI/CD Pipelines, Agile/Scrum, RBAC Security, API Design, Technical Writing
          </p>
      </div>
    </div>
  </div>


  </template>
  
  <script>
  export default {
    name: 'HomePage',

    methods: {
    hireMe() {
      // window.location.href = "mailto:obarhorosarah@gmail.com";
      window.open("https://www.linkedin.com/in/sarah-obarhoro/", "_blank");
    }
    }
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
    margin-top: 90px;
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
    animation: shaking 0.5s 2;
}
@keyframes shaking {
    0% {transform: rotate(0deg);}
    20% {transform: rotate(-4deg);}
    50% {transform: rotate(0deg);}
    70% {transform: rotate(4deg);}
    100% {transform: rotate(0deg);}
}
  
  .image-container {
    position:relative;
    top: -260px;
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
    font-size: 2rem;
    color: #fff;
    text-align: left;
    margin: 0;
    line-height: 1.2;
    font-family: "Young Serif", serif;
    font-weight: 400;
  }

  .stack-section, .achievements-section {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 20px;
    background-color: #000;
    color: #fff;
    font-family: "Young Serif", serif;
  }

  .stack-card, .achievements-card {
    background: #0c0c0c;
    box-shadow: 0 4px 8px rgba(37, 37, 37, 0.1);
    border-radius: 10px;
    padding: 40px;
    max-width: 1200px;
    width: 100%;
    margin: 20px;
  }

  .stack-heading h2, .achievements-heading h2 {
    font-size: 1.2rem;
    color: #a3a2a2;
    margin: 0;
    padding: 20px 0;
    letter-spacing: 8px;
  }

  .stack-content p, .achievements-content p {
    font-size: 2rem;
    text-align: left;
    color: #fff;
    margin-bottom: 20px;
    line-height: 1.5;
    }

  .proficiency-section {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 20px;
    background-color: #000;
    color: #fff;
    font-family: "Young Serif", serif;
  }

  .proficiency-card {
    background: #0c0c0c;
    box-shadow: 0 4px 8px rgba(37, 37, 37, 0.1);
    border-radius: 10px;
    padding: 40px;
    max-width: 1200px;
    width: 100%;
    margin: 20px;
  }

  .proficiency-heading h2 {
    font-size: 1.2rem;
    color: #a3a2a2;
    margin: 0;
    padding: 20px 0;
    letter-spacing: 8px;
  }

  .proficiency-content p {
    font-size: 2rem;
    text-align: left;
    color: #fff;
    margin-bottom: 20px;
    line-height: 1.5;
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

    .content{
      margin-top: 10%;
    }

    .image-container {
       position:relative;
        top: -200px;
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
      margin-top: -80px;
    }

    .about-heading {
      margin-bottom: 20px;
      margin-right: 0;
    }

    .about-heading h2 {
      font-size: 1.1rem;
      letter-spacing: 4px;
    }

    .about-content p {
      font-size: 1rem;
      text-align: left;
    }
    .stack-card, .achievements-card {
      flex-direction: column;
      padding: 20px;
      margin-top: -80px;
    }

    .stack-heading, .achievements-heading {
      margin-bottom: 20px;
      margin-right: 0;
    }

    .stack-heading h3, .achievements-heading h3 {
      font-size: 1.1rem;
      letter-spacing: 4px;
      text-align: center;
    }

    .stack-content p, .achievements-content p {
      font-size: 1rem;
      text-align: left;
    }

    .proficiency-card {
      flex-direction: column;
      padding: 20px;
      margin-top: -80px;
    }

    .proficiency-heading {
      margin-bottom: 20px;
      margin-right: 0;
    }

    .proficiency-heading h2 {
      font-size: 1.1rem;
      letter-spacing: 4px;
      text-align: center;
    }

    .proficiency-content p {
      font-size: 1rem;
      text-align: left;
    }
}
  </style>
