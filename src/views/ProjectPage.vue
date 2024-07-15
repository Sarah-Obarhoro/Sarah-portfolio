<template>
    <div class="project-page">
        <div class="heading">
        <h2>Projects I Have Worked On</h2>

        <div class="projects">
            <Project 
                :imageUrl="imageUrls[0]" 
                title="Ponec Interiors" 
                content="A simple landing page for a furniture company."
                link="https://ponecinteriors.netlify.app/">
            </Project>

            <Project 
                :imageUrl="imageUrls[1]" 
                title="Notepad" 
                content="A todo web application that performs basic CRUD operations."
                link="https://jsnotepad.netlify.app/note.html">    
            </Project>

            <Project 
                :imageUrl="imageUrls[2]" 
                title="GPT 3" 
                content="A simple landing page to launch GPT 3 and educae potential users."
                link="https://mygpt3app.netlify.app/">    
            </Project>

            <Project 
                :imageUrl="imageUrls[3]" 
                title="Afritech" 
                content="Africktech needed a simple landing page to showcase company information, with a form where potential clients can contact them."
                link="https://africk.netlify.app/#home">    
            </Project>
        </div>
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
            // imageUrl: require('@/assets/images/Sarah.png')
            imageUrls: [
            require('@/assets/images/Ponec.jpg'),
            require('@/assets/images/Todo.jpg'),
            require('@/assets/images/GPT3.png'),
            require('@/assets/images/Africk.png'),
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
    width: 100%;
    border-radius: 10px;
    margin-left: 8%; 
    margin-top: 6%;
}

.heading h2{
    font-size: 1.2rem;
    color: #a3a2a2;
    margin: 0;
    padding: 20px 0;
    letter-spacing: 8px;
}
.projects{
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
    margin-top: 5%;
}
@media screen and (max-width: 768px) {
    .project-page {
    width: 80%;
}
}
</style>