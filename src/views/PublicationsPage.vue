<template>
  <div class="publications-page">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-content">
        <h1 class="page-title">Publications</h1>
        <p class="page-subtitle">Sharing knowledge through technical writing and insights</p>
        <div class="blog-link">
          <a href="https://nero.hashnode.dev" target="_blank" class="blog-button">
            <i class="fas fa-external-link-alt"></i>
            Visit My Blog
          </a>
        </div>
      </div>
    </div>

    <!-- Stats Section -->
    <!-- <div class="stats-section">
      <div class="stats-container">
        <div class="stat-item">
          <div class="stat-number">10+</div>
          <div class="stat-label">Articles Published</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">5K+</div>
          <div class="stat-label">Readers Reached</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">50+</div>
          <div class="stat-label">Likes & Reactions</div>
        </div>
      </div>
    </div> -->

    <!-- Featured Articles Section -->
    <div class="section">
      <div class="section-card">
        <div class="section-heading">
          <h2>Featured Articles</h2>
          <p class="section-description">My most popular and impactful technical articles</p>
        </div>
        <div class="articles-grid">
          <article class="article-card featured">
            <div class="article-header">
              <div class="article-category">CSS</div>
              <div class="article-date">May 6, 2023</div>
            </div>
            <h3 class="article-title">A Beginner's Guide to Understanding the Basics of CSS Positions</h3>
            <p class="article-excerpt">CSS (Cascading Style Sheets) is a styling language that is used to style web pages. Understanding CSS positioning is crucial for creating well-structured layouts and responsive designs.</p>
            <div class="article-tags">
              <span class="tag">CSS</span>
              <span class="tag">Web Development</span>
              <span class="tag">Frontend</span>
            </div>
            <div class="article-footer">
              <!-- <div class="article-stats">
                <span class="stat"><i class="fas fa-eye"></i> 1.2K views</span>
                <span class="stat"><i class="fas fa-heart"></i> 45 likes</span>
              </div> -->
              <a href="https://nero.hashnode.dev/css-position-property" target="_blank" class="read-more">
                Read More <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </article>

          <article class="article-card">
            <div class="article-header">
              <div class="article-category">JavaScript</div>
              <div class="article-date">May 5, 2023</div>
            </div>
            <h3 class="article-title">Understanding JavaScript Data Types: Primitives and Objects</h3>
            <p class="article-excerpt">JavaScript has eight data types, seven of which are primitive. Learn the fundamental differences between primitive and reference types in JavaScript.</p>
            <div class="article-tags">
              <span class="tag">JavaScript</span>
              <span class="tag">Programming</span>
              <span class="tag">Fundamentals</span>
            </div>
            <div class="article-footer">
              <!-- <div class="article-stats">
                <span class="stat"><i class="fas fa-eye"></i> 890 views</span>
                <span class="stat"><i class="fas fa-heart"></i> 32 likes</span>
              </div> -->
              <a href="https://nero.hashnode.dev" target="_blank" class="read-more">
                Read More <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </article>

          <article class="article-card">
            <div class="article-header">
              <div class="article-category">Optimization</div>
              <div class="article-date">May 3, 2023</div>
            </div>
            <h3 class="article-title">SEO for Developers: Best Practices for Optimizing Websites</h3>
            <p class="article-excerpt">As a developer, you should be bothered about SEO because it is essential to ensure that the websites and web applications you develop are visible and accessible to users through search engines.</p>
            <div class="article-tags">
              <span class="tag">React</span>
              <span class="tag">Tailwind CSS</span>
              <span class="tag">Responsive Design</span>
            </div>
            <div class="article-footer">
              <!-- <div class="article-stats">
                <span class="stat"><i class="fas fa-eye"></i> 1.5K views</span>
                <span class="stat"><i class="fas fa-heart"></i> 67 likes</span>
              </div> -->
              <a href="https://nero.hashnode.dev" target="_blank" class="read-more">
                Read More <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </article>
        </div>
      </div>
    </div>

    <!-- Recent Articles Section -->
    <!-- <div class="section">
      <div class="section-card">
        <div class="section-heading">
          <h2>Recent Articles</h2>
          <p class="section-description">Latest insights and technical explorations</p>
        </div>
        <div class="articles-list">
          <article class="article-item">
            <div class="article-info">
              <div class="article-meta">
                <span class="category">Vue.js</span>
                <span class="date">February 14, 2023</span>
              </div>
              <h4 class="article-title">Mastering Vue 3 Composition API: A Complete Guide</h4>
              <p class="article-summary">Dive deep into Vue 3's Composition API and learn how to build more maintainable and scalable applications.</p>
            </div>
            <div class="article-actions">
              <div class="article-stats">
                <span><i class="fas fa-eye"></i> 756</span>
                <span><i class="fas fa-heart"></i> 28</span>
              </div>
              <a href="https://nero.hashnode.dev" target="_blank" class="read-link">
                <i class="fas fa-external-link-alt"></i>
              </a>
            </div>
          </article>

          <article class="article-item">
            <div class="article-info">
              <div class="article-meta">
                <span class="category">Node.js</span>
                <span class="date">January 30, 2023</span>
              </div>
              <h4 class="article-title">Building RESTful APIs with Express.js and MongoDB</h4>
              <p class="article-summary">Learn how to create robust backend APIs using Express.js and MongoDB with proper error handling and authentication.</p>
            </div>
            <div class="article-actions">
              <div class="article-stats">
                <span><i class="fas fa-eye"></i> 1.1K</span>
                <span><i class="fas fa-heart"></i> 42</span>
              </div>
              <a href="https://nero.hashnode.dev" target="_blank" class="read-link">
                <i class="fas fa-external-link-alt"></i>
              </a>
            </div>
          </article>

          <article class="article-item">
            <div class="article-info">
              <div class="article-meta">
                <span class="category">TypeScript</span>
                <span class="date">January 12, 2023</span>
              </div>
              <h4 class="article-title">TypeScript Best Practices for Large-Scale Applications</h4>
              <p class="article-summary">Essential TypeScript patterns and practices for building maintainable enterprise-level applications.</p>
            </div>
            <div class="article-actions">
              <div class="article-stats">
                <span><i class="fas fa-eye"></i> 923</span>
                <span><i class="fas fa-heart"></i> 35</span>
              </div>
              <a href="https://nero.hashnode.dev" target="_blank" class="read-link">
                <i class="fas fa-external-link-alt"></i>
              </a>
            </div>
          </article>

          <article class="article-item">
            <div class="article-info">
              <div class="article-meta">
                <span class="category">Performance</span>
                <span class="date">December 20, 2022</span>
              </div>
              <h4 class="article-title">Web Performance Optimization: Core Web Vitals</h4>
              <p class="article-summary">Practical strategies to improve your website's Core Web Vitals and overall user experience.</p>
            </div>
            <div class="article-actions">
              <div class="article-stats">
                <span><i class="fas fa-eye"></i> 1.3K</span>
                <span><i class="fas fa-heart"></i> 58</span>
              </div>
              <a href="https://nero.hashnode.dev" target="_blank" class="read-link">
                <i class="fas fa-external-link-alt"></i>
              </a>
            </div>
          </article>
        </div>
      </div>
    </div> -->

    <!-- Topics Section -->
    <div class="section">
      <div class="section-card">
        <div class="section-heading">
          <h2>Topics I Write About</h2>
          <p class="section-description">Areas of expertise and interests</p>
        </div>
        <div class="topics-grid">
          <div class="topic-item">
            <div class="topic-icon">
              <i class="fab fa-js-square"></i>
            </div>
            <h3>JavaScript & TypeScript</h3>
            <p>Modern JavaScript features, TypeScript best practices, and advanced programming concepts.</p>
          </div>
          <div class="topic-item">
            <div class="topic-icon">
              <i class="fab fa-react"></i>
            </div>
            <h3>React & Vue.js</h3>
            <p>Component architecture, state management, and building scalable frontend applications.</p>
          </div>
          <div class="topic-item">
            <div class="topic-icon">
              <i class="fas fa-server"></i>
            </div>
            <h3>Backend Development</h3>
            <p>Node.js, Express.js, database design, and API development best practices.</p>
          </div>
          <div class="topic-item">
            <div class="topic-icon">
              <i class="fas fa-tachometer-alt"></i>
            </div>
            <h3>Web Performance</h3>
            <p>Optimization techniques, Core Web Vitals, and improving user experience.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PublicationsPage'
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

.publications-page {
  background-color: #000;
  min-height: 100vh;
  padding: 20px 0;
  color: white;
  font-family: 'Roboto', sans-serif;
}

/* Hero Section */
.hero-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 20px 60px;
  background-color: #000;
  text-align: center;
}

.hero-content {
  max-width: 800px;
}

.page-title {
  font-size: 6rem;
  font-weight: bold;
  background: linear-gradient(270deg, #3f5efb, #ee0979, #fdbb2d, #22c1c3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-animation 20s ease infinite;
  margin-bottom: 20px;
  font-family: "Young Serif", serif;
}

.page-subtitle {
  font-size: 1.5rem;
  color: #a3a2a2;
  letter-spacing: 2px;
  margin-bottom: 30px;
}

.blog-link {
  margin-top: 30px;
}

.blog-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(270deg, #3f5efb, #ee0979);
  color: white;
  padding: 12px 25px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(63, 94, 251, 0.3);
}

.blog-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(63, 94, 251, 0.4);
}

/* Stats Section */
.stats-section {
  padding: 40px 20px;
  display: flex;
  justify-content: center;
}

.stats-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  max-width: 800px;
  width: 100%;
}

.stat-item {
  text-align: center;
  padding: 20px;
  background: #0c0c0c;
  border-radius: 15px;
  border: 1px solid #333;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  background: linear-gradient(270deg, #3f5efb, #ee0979);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Young Serif", serif;
}

.stat-label {
  color: #a3a2a2;
  font-size: 1rem;
  margin-top: 5px;
}

/* Section Styles */
.section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
}

.section-card {
  background: #0c0c0c;
  box-shadow: 0 4px 8px rgba(37, 37, 37, 0.1);
  border-radius: 15px;
  padding: 50px;
  max-width: 1400px;
  width: 100%;
  margin: 20px;
}

.section-heading {
  text-align: center;
  margin-bottom: 40px;
}

.section-heading h2 {
  font-size: 2.5rem;
  color: #fff;
  margin: 0;
  padding: 20px 0 10px;
  letter-spacing: 4px;
  font-family: "Young Serif", serif;
  background: linear-gradient(270deg, #3f5efb, #ee0979);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-description {
  color: #a3a2a2;
  font-size: 1.1rem;
  margin: 0;
}

/* Articles Grid */
.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 30px;
}

.article-card {
  background: #1a1a1a;
  border-radius: 15px;
  padding: 25px;
  border: 1px solid #333;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.article-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(63, 94, 251, 0.2);
  border-color: #3f5efb;
}

.article-card.featured {
  border: 2px solid #3f5efb;
  box-shadow: 0 0 20px rgba(63, 94, 251, 0.1);
}

.article-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.article-category {
  background: linear-gradient(270deg, #3f5efb, #ee0979);
  color: white;
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
}

.article-date {
  color: #a3a2a2;
  font-size: 0.9rem;
}

.article-title {
  font-size: 1.3rem;
  color: #fff;
  margin-bottom: 15px;
  font-family: "Young Serif", serif;
  line-height: 1.4;
}

.article-excerpt {
  color: #a3a2a2;
  line-height: 1.6;
  margin-bottom: 20px;
}

.article-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.tag {
  background: #333;
  color: #fff;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
}

.article-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}

.article-stats {
  display: flex;
  gap: 15px;
}

.stat {
  color: #a3a2a2;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 5px;
}

.read-more {
  color: #3f5efb;
  text-decoration: none;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: all 0.3s ease;
}

.read-more:hover {
  color: #ee0979;
}

/* Articles List */
.articles-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.article-item {
  background: #1a1a1a;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
}

.article-item:hover {
  border-color: #3f5efb;
  background: #222;
}

.article-info {
  flex: 1;
}

.article-meta {
  display: flex;
  gap: 15px;
  margin-bottom: 8px;
}

.category {
  background: linear-gradient(270deg, #3f5efb, #ee0979);
  color: white;
  padding: 2px 10px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
}

.date {
  color: #a3a2a2;
  font-size: 0.9rem;
}

.article-item .article-title {
  font-size: 1.1rem;
  margin-bottom: 8px;
}

.article-summary {
  color: #a3a2a2;
  font-size: 0.95rem;
  line-height: 1.5;
}

.article-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

.read-link {
  color: #3f5efb;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.read-link:hover {
  color: #ee0979;
  transform: scale(1.1);
}

/* Topics Grid */
.topics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  margin-top: 30px;
}

.topic-item {
  background: #1a1a1a;
  border-radius: 12px;
  padding: 25px;
  text-align: center;
  border: 1px solid #333;
  transition: all 0.3s ease;
}

.topic-item:hover {
  transform: translateY(-3px);
  border-color: #3f5efb;
  box-shadow: 0 8px 20px rgba(63, 94, 251, 0.1);
}

.topic-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
  background: linear-gradient(270deg, #3f5efb, #ee0979);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.topic-item h3 {
  font-size: 1.3rem;
  color: #fff;
  margin-bottom: 10px;
  font-family: "Young Serif", serif;
}

.topic-item p {
  color: #a3a2a2;
  line-height: 1.6;
  margin: 0;
}

/* Animations */
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

/* Mobile Responsive */
@media screen and (max-width: 768px) {
  .page-title {
    font-size: 3.5rem;
  }
  
  .page-subtitle {
    font-size: 1.2rem;
  }
  
  .section-card {
    padding: 30px 20px;
  }
  
  .section-heading h2 {
    font-size: 2rem;
  }
  
  .articles-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .article-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
  
  .article-actions {
    align-self: flex-end;
  }
  
  .stats-container {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .hero-section {
    padding: 60px 20px 40px;
  }
}

@media screen and (max-width: 480px) {
  .page-title {
    font-size: 2.8rem;
  }
  
  .section-heading h2 {
    font-size: 1.8rem;
    letter-spacing: 2px;
  }
  
  .article-card {
    padding: 20px;
  }
  
  .article-item {
    padding: 15px;
  }
}
</style>