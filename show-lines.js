const fs = require('fs');
const linesToFix = {
  'src/app/not-found.js': [54],
  'src/components/BlogSidebar.js': [46, 47],
  'src/components/contactus/ContactUs.js': [22, 25, 95],
  'src/components/FormSection.js': [30],
  'src/components/Fullstack/FullStackDev.js': [30],
  'src/components/Funnel/Checkout.js': [54],
  'src/components/Funnel/Countdown.js': [46],
  'src/components/Funnel/FunelBanner.js': [29],
  'src/components/laravel/LaravelDev.js': [30],
  'src/components/laravel/LaravelElevate.js': [36],
  'src/components/MarketingTeam.js': [186],
  'src/components/mobileapp/MobileDev.js': [27],
  'src/components/nodejs/NodeDev.js': [27],
  'src/components/ourworks/WorksGetInTouch.js': [35],
  'src/components/php/PhpDev.js': [27, 30],
  'src/components/team/OurTeam.js': [107],
  'src/components/Wp/WpDev.js': [20, 30]
};

for (const [file, lines] of Object.entries(linesToFix)) {
  const content = fs.readFileSync(file, 'utf8').split('\n');
  lines.forEach(l => {
    console.log(`[${file}:${l}]`);
    console.log(content[l-1]);
  });
}
