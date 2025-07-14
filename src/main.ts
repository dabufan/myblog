import './style.css'

// 导航组件类型
type NavPath = '/' | '/about';

// 博客元数据类型
type BlogPost = { date: string; title: string; url: string };
type BlogYear = { year: number; posts: BlogPost[] };

// 全局导航组件
function renderNav(activePath: NavPath): string {
  return `
    <nav class="site-nav">
      <a href="/"${activePath === '/' ? ' class="active"' : ''}>Blog</a>
      <a href="/about"${activePath === '/about' ? ' class="active"' : ''}>About</a>
    </nav>
  `;
}

const blogTitle = '頻率 [pín lǜ]';
const blogSubtitle = '跳動的世界裡找你的頻率';
const blogYears: BlogYear[] = [
  {
    year: 2025,
    posts: [
      { date: '04/19', title: 'Migrate Astro Site From Cloudflare Pages to Workers', url: '#' },
      { date: '02/22', title: '人生第一台 Mac 祛魅最好的方式就是拥有', url: '#' },
      { date: '02/18', title: '新站点 新域名，新主题，新生成器', url: '#' },
      { date: '02/13', title: '任我行 以为留在原地不够遨游，就让它沙滩里戏水', url: '#' }
    ]
  },
  {
    year: 2024,
    posts: [
      { date: '09/21', title: '启航', url: '#' },
      { date: '09/03', title: '我们都是这样长大的 时而走近时而远去 谁散与聚 都居于心里', url: '#' },
      { date: '08/26', title: '夏 / 剑桥 明年即使有热血 初樱初雪 又如何约定', url: '#' }
    ]
  },
  {
    year: 2023,
    posts: [
      { date: '08/30', title: 'Try Astro My experience with Astro, a new static site generator.', url: '#' }
    ]
  },
  {
    year: 2022,
    posts: [
      { date: '07/24', title: '第一次体验 MacBook 我的下一台电脑，何必是 Mac', url: '#' }
    ]
  }
];

// About 页面渲染
function renderAbout(): string {
  return `
    <main class="about-main">
      <header class="about-header">
        ${renderNav('/about')}
        <h1>Hi! I'm Xiao Lee</h1>
        <h2>Front-end Developer & Open Source Enthusiast</h2>
      </header>
      <div class="about-content">
        <section class="about-text">
          <p>I love creating elegant and intuitive web experiences. Currently focusing on modern web development and contributing to open source projects.</p>
          <p>Based in Shanghai, working with React, TypeScript, and Node.js.</p>
        </section>
        <figure class="about-photo">
          <img src="https://placekitten.com/768/1024" alt="Xiao Lee's photo">
        </figure>
        <section class="contact-links">
          <h3>Contact</h3>
          <div class="links">
            <a href="mailto:hello@example.com">Email hello@example.com</a>
            <a href="https://github.com/example">GitHub @example</a>
          </div>
        </section>
      </div>
      <footer class="about-footer">
        <div class="copyright">© 2025 Xiao Lee</div>
      </footer>
    </main>
  `;
}

// 主页渲染
function renderHome(): string {
  return `
    <main class="blog-main">
      <header class="blog-header">
        ${renderNav('/')}
        <h1>${blogTitle}</h1>
        <h2>${blogSubtitle}</h2>
      </header>
      <section class="blog-years">
        ${blogYears.map((yearObj: BlogYear) => `
          <div class="year-block">
            <h3>${yearObj.year}</h3>
            <ul>
              ${yearObj.posts.map((post: BlogPost) => `<li><span class="date">${post.date}</span> <a href="${post.url}">${post.title}</a></li>`).join('')}
            </ul>
          </div>
        `).join('')}
      </section>
      <footer class="blog-footer">
        <div class="copyright">© 2025 Designed and developed by Q Lee.</div>
      </footer>
    </main>
  `;
}

const app = document.querySelector<HTMLDivElement>('#app');
if (app) {
  // 根据当前路径渲染不同页面
  const path = window.location.pathname;
  if (path === '/about' || path === '/about/') {
    app.innerHTML = renderAbout();
  } else {
    app.innerHTML = renderHome();
  }
}
