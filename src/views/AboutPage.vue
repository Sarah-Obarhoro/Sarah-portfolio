  <template>
    <div class="about-section">
        <div class="about-card">
                <div class="about-heading">
                    <h2>About Me</h2>
                </div>
                <div class="about-content">
                    <p>
                        Hey there! I'm Sarah, a frontend developer with a knack for turning complex ideas into sleek, user-friendly interfaces. With two years of hands-on experience in web solutions, I've honed my skills in crafting digital experiences that not only look great but also perform seamlessly.
                        <br>
                        <br>

                        My journey from an arts background to tech has given me a unique edge. I bring a creative flair to problem-solving that sets my work apart. Whether it's optimizing load times, ensuring cross-browser compatibility, or creating responsive designs that look stunning on any device, I've got you covered.
                        <br>
                        <br>

                        Why should you consider me? Well, I'm not just about writing code - I'm about creating impact. I've successfully delivered projects that have significantly improved user engagement and conversion rates for my clients. My ability to blend artistic vision with technical expertise means you're getting the best of both worlds.
                        <br>
                        <br>

                        I'm a pro at translating design concepts into living, breathing websites using the MERN Stack. But I don't stop there - I'm always pushing the envelope, currently diving deep into Web 3.0 technologies to stay ahead of the curve.
                        <br>
                        <br>

                        What really sets me apart is my commitment to collaboration. I believe the best results come from open communication and teamwork. I'm not just a coder you hire; I'm a partner who's invested in the success of your project.
                        <br>
                        <br>

                        When you work with me, you're getting more than just a developer. You're getting an innovator, a problem-solver, and a dedicated professional who's as excited about your project as you are. I approach each new challenge as an opportunity to learn, grow, and deliver something extraordinary.
                        <br>
                        <br>

                        So, if you're looking for a frontend developer who can bring both technical skills and creative vision to the table, let's connect. Together, we can turn your digital dreams into reality and create web experiences that truly stand out. Ready to level up your online presence? Let's make some digital magic happen!
                    </p>
                </div>
                <button class="cta-button">Download CV</button>
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

.cta-button {
    background: transparent;
    color: white;
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 20px 30px;
    margin-top: 50px;
    font-size: 1.2rem;
    cursor: pointer;
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
    margin-left: 6%;
    }
    .about-content p {
    font-size: 1rem;
    
  }
}
</style>