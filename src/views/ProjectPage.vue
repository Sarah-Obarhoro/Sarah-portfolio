<template>
    <div class="project-page">
      <div class="heading">
        <h2>My Recent Projects</h2>
      </div>
  
      <div class="projects">
        <Project 
          v-for="(imageUrl, index) in imageUrls" 
          :key="index" 
          :imageUrl="imageUrl" 
          :title="projectTitles[index]" 
          :content="projectContents[index]" 
          :link="projectLinks[index]">
        </Project>
      </div>
    </div>
  </template>
  
  <script>
  import Project from '../components/ProjectsCard.vue';
  export default {
    name: 'ProjectPage',
    components: {
      Project,
    },
    data() {
      return {
        imageUrls: [
          require('@/assets/images/Ponec.jpg'),
          require('@/assets/images/Todo.jpg'),
          require('@/assets/images/GPT3.png'),
          require('@/assets/images/Africk.png'),
        ],
        projectTitles: [
          'Ponec Interiors',
          'Notepad',
          'GPT 3',
          'Afritech'
        ],
        projectContents: [
          'A simple landing page for a furniture company.',
          'A todo web application that performs basic CRUD operations.',
          'A simple landing page to launch GPT 3 and educate potential users.',
          'Africktech needed a simple landing page to showcase company information, with a form where potential clients can contact them.'
        ],
        projectLinks: [
          'https://ponecinteriors.netlify.app/',
          'https://jsnotepad.netlify.app/note.html',
          'https://mygpt3app.netlify.app/',
          'https://africk.netlify.app/#home'
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  body {
    background-color: black;
    color: white;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  }
  
  .project-page {
    padding: 40px;
    background-color: #0c0c0c;
    box-shadow: 0 4px 8px rgba(37, 37, 37, 0.1);
    max-width: 1200px;
    width: 90%;
    border-radius: 10px;
    margin: 10% auto;
    transition: all 0.3s ease;
  }
  
  .project-page:hover {
    transform: scale(1.02);
  }
  
  .heading h2 {
    font-size: 2rem;
    color: #a3a2a2;
    margin: 0;
    padding: 20px 0;
    letter-spacing: 1px;
    text-align: center;
  }
  
  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 5%;
  }
  
  .projects > * {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .projects > *:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  
  @media screen and (max-width: 768px) {
    .project-page {
      width: 90%;
    }
  }
  </style>