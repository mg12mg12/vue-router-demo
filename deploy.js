//https://github.com/mg12mg12/vue-router-demo.git
//一鍵部署，請跑npm run deploy，會直接更新網頁
// deploy.js（用 ES module 語法）
import { execSync } from 'child_process';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const repo = 'https://github.com/mg12mg12/vue-router-demo.git';
const branch = 'gh-pages';

try {
  console.log('🔧 Building project...');
  execSync('npm run build', { stdio: 'inherit' });

  console.log('🚀 Deploying to GitHub Pages...');
  execSync(`npx gh-pages -d dist -b ${branch} -r ${repo}`, { stdio: 'inherit' });

  console.log('✅ 部署成功！可以到 GitHub Pages 查看你的網站啦 🎉');
} catch (err) {
  console.error('❌ 部署失敗：', err);
}