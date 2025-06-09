  <template>
    <div class="about-section">
      <div class="about-card">
        <div class="about-heading">
            <h2>About Me</h2>
        </div>
        <div class="about-content">
          <p>
            Hey there! I'm Sarah, a Lead Frontend Engineer with 4+ years of experience building scalable web and mobile applications and leading agile teams. My journey from a degree in English & Literary Studies to tech leadership shaped my communication skills and a creative edge I bring into solving complex engineering challenges.
            <br><br>
            I've architected and delivered platforms that serve 50K+ users monthly, improved load times by 70%, and automated payroll for 50,000+ employees with 99.8% accuracy. Whether it's building JWT-secured systems, implementing RBAC, or leading frontend strategy at Jayco Links and Tunnels NG—I ensure every line of code supports real business outcomes.
            <br><br>
            I lead with clarity, code with purpose, and write to teach. As a technical writer on Hashnode, my articles have empowered thousands of developers worldwide to build better frontend experiences.
            <br><br>
            When you work with me, you get a blend of leadership, technical depth, and user-first thinking. Let’s create something powerful together.
          </p>
        </div>

        <!-- Download CV Button -->
        <a class="cta-button" 
          href="/Sarah-Obarhoro-CV.pdf" 
          download="Sarah-Obarhoro-CV" 
          aria-label="Download Sarah Obarhoro's CV">
          Download CV
        </a>
      </div>
    </div>
</template>

<script>
export default {
    name: 'AboutPage',
}
</script>

<style scoped>
  body {
    background-color: black;
    color: white;
    margin: 0;
    padding: 0;
  }
  .about-section {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 20px;
    background-color: #000;
    margin-top: 2%;
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
    margin-right: 20px;
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

a.cta-button {
  background: transparent;
  color: white;
  border: 1px solid #fff;
  border-radius: 5px;
  padding: 20px 30px;
  margin-top: 50px !important;
  font-size: 1.2rem;
  cursor: pointer;
  text-decoration: none; 
  display: inline-block; 
  transition: background 0.3s ease, color 0.3s ease;
  margin-left: 40%;
}

.cta-button:hover {
    background: linear-gradient(270deg, #3f5efb, #ee0979);
    border: none;
    color: rgb(255, 255, 255);
    animation: shaking 0.5s 2;
}
@keyframes shaking {
    0% {transform: rotate(0deg);}
    20% {transform: rotate(-4deg);}
    50% {transform: rotate(0deg);}
    70% {transform: rotate(4deg);}
    100% {transform: rotate(0deg);}
}

@media screen and (max-width: 768px) {
    .cta-button {
    margin-left: 11% !important;
    }
    .about-content p {
    font-size: 1rem;
    
  }
}
</style>