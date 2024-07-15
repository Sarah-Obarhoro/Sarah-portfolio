<template>
  <header>
    <div class="container">
      <div class="logo">
        <router-link to="/">Sarah Obarhoro</router-link>
      </div>
      <nav :class="{ 'nav-active': isActive }">
        <ul>
          <li><router-link to="/about" @click="closeNav">About</router-link></li>
          <li><router-link to="/projects" @click="closeNav">Projects</router-link></li>
          <li><router-link to="/blog" @click="closeNav">Publications</router-link></li>
          <li><router-link to="/proficiency" @click="closeNav">Proficiencies</router-link></li>
        </ul>
      </nav>
      <div class="burger" :class="{ 'toggle': isActive }" @click="toggleNav">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderSection',
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    toggleNav() {
      this.isActive = !this.isActive;
    },
    closeNav() {
      this.isActive = false;
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&display=swap');

header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #000;
  padding: 1rem 0;
  color: #fff;
  z-index: 1000;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo a {
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: 'Manrope', sans-serif;
}

nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav ul li {
  margin-left: 30px;
}

nav ul li a {
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  letter-spacing: 2px;
  font-family: 'Manrope', sans-serif;
}

.burger {
  display: none;
  cursor: pointer;
}

.burger div {
  width: 25px;
  height: 3px;
  background-color: #fff;
  margin: 5px;
  transition: all 0.3s ease;
}

.nav-active ul {
  transform: translateX(0);
}

@media screen and (max-width: 768px) {
  nav ul {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    background-color: #333;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: translateX(100%);
    transition: transform 0.5s ease-in-out;
  }

  nav ul li {
    margin: 20px 0;
  }

  .nav-active ul {
    transform: translateX(0);
  }

  .burger {
    display: block;
  }

  .burger.toggle .line1 {
    transform: rotate(-45deg) translate(-5px, 6px);
  }

  .burger.toggle .line2 {
    opacity: 0;
  }

  .burger.toggle .line3 {
    transform: rotate(45deg) translate(-5px, -6px);
  }
}
</style>