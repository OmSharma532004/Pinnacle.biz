const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const links = [
  { url: '/', changefreq: 'daily', priority: 0.8 },
  { url: '/about', changefreq: 'weekly', priority: 0.5 },
  // Add more URLs here
];

const sitemap = new SitemapStream({ hostname: 'https://pinnacle.biz' });

try {
  streamToPromise(sitemap.pipe(createWriteStream('./public/sitemap.xml')))
    .then(() => console.log('Sitemap created!'))
    .catch((err) => console.error('Error creating sitemap: ', err));

  links.forEach((link) => sitemap.write(link));
  sitemap.end();
} catch (err) {
  console.error('Error: ', err);
}
