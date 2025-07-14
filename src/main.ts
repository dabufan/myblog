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
const blogSubtitle = '设计改变生活，编程改变命运';
const blogYears: BlogYear[] = [
  {
    year: 2025,
    posts: [
      { date: '07/14', title: '个人博客站点上线了！', url: '/posts/blog-launch' },
      { date: '06/30', title: 'React 18 新特性探索：并发渲染与 Suspense', url: '/posts/react-18-features' },
      { date: '05/15', title: '从零开始的前端工程化实践', url: '/posts/frontend-engineering' },
      { date: '04/01', title: 'TypeScript 5.0 新特性解析', url: '/posts/typescript-5-features' }
    ]
  },
  {
    year: 2024,
    posts: [
      { date: '12/25', title: '年终总结：我的 2024 技术之旅', url: '/posts/2024-summary' },
      { date: '11/18', title: 'Next.js 项目性能优化实践', url: '/posts/nextjs-optimization' },
      { date: '09/30', title: '浏览器渲染原理深度解析', url: '/posts/browser-rendering' }
    ]
  },
  {
    year: 2023,
    posts: [
      { date: '09/15', title: '现代CSS新特性实践', url: '/posts/modern-css-features' },
      { date: '05/04', title: 'Next.js 13架构解析', url: '/posts/nextjs-13-architecture' }
    ]
  },
  {
    year: 2022,
    posts: [
      { date: '05/24', title: 'TypeScript 4.7：新特性深度解析', url: '/posts/typescript-4-7' },
      { date: '03/29', title: 'React 18发布：新特性解析', url: '/posts/react-18-release' }
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
