<template>
    <div class="wrapper">
      <div class="card">
        <img :src="imageUrl" alt="Card Image">
        <div class="card-content">
          <h3 class="project-title">{{ title }}</h3>
          <p class="about-project">{{ content }}</p>
        </div>
        <div class="view-project">
          <a :href="link" target="_blank" rel="noopener noreferrer">See Project</a>
          <svg fill="#000000" width="20px" height="20px" viewBox="0 0 24 24" id="right-arrow" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color">
            <path id="primary" d="M21.71,11.29l-3-3a1,1,0,0,0-1.42,1.42L18.59,11H3a1,1,0,0,0,0,2H18.59l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3-3A1,1,0,0,0,21.71,11.29Z"></path>
          </svg>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      imageUrl: String,
      title: String,
      content: String,
      link: String,
    },
  };
  </script>
  
  <style scoped>
  .card {
    width: 300px;
    height: 450px;
    border: 1px solid #1f1f1f;
    border-radius: 20px;
    background: #1f1f1f;
    padding: 20px;
    padding-bottom: 30px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .card:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  .card img {
    width: 100%;
    height: 60%;
    border-radius: 15px 15px 0 0;
    object-fit: cover;
  }
  .card h3 {
    font-size: 1.5rem;
    color: #a3a2a2;
    margin: 10px 0;
    padding: 10px 0;
    letter-spacing: 2px;
  }
  .card-content p {
    font-size: 1rem;
    color: #fff;
    text-align: left;
    margin: 0;
    line-height: 1.5;
    font-family: "Young Serif", serif;
    font-weight: 400;
  }
  .view-project {
    display: flex;
    align-items: center;
    margin-top: 20px;
    cursor: pointer;
  }
  .view-project:hover {
    transform: translateX(10px);
  }
  .view-project a {
    font-size: 1rem;
    color: white;
    margin-right: 5px;
    text-decoration: none;
  }
  .view-project svg path {
    fill: #ffff;
  }
  @media screen and (max-width: 768px) {
    .card {
      width: 100%;
      height: auto;
      border: 1px solid #1f1f1f;
      border-radius: 20px;
      background: #1f1f1f;
      padding: 15px;
      padding-bottom: 20px;
      margin: 20px 0;
      margin-left: -20px;
    }
    .card img {
      height: auto;
    }
    .card h3 {
      font-size: 1.2rem;
    }
    .card-content p {
      font-size: 0.9rem;
    }
    .view-project a {
      font-size: 0.9rem;
    }
    .view-project svg {
      width: 18px;
      height: 18px;
    }
  }
  </style>