module.exports = {
  title: 'Pathfinder RPG',
  description: 'První Edice',
  themeConfig: {
    repo: 'https://github.com/CiTroNaK/pathfinderrpg-cz-website',
    editLinks: true,
    editLinkText: 'Pomoz mi zlepšit obsah!',
    head: [
      ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' }],
      ['link', {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-32x32.png',
        sizes: '32x32'
      }],
      ['link', {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-16x16.png',
        sizes: '16x16'
      }],
      ['link', {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: '#5bbad5'
      }],
      ['meta', {
        name: 'theme-color',
        content: '#ffffff'
      }],
    ],
    nav: [
      {
        text: 'O hře',
        link: '/o-hre/',
      },
      {
        text: 'Jak začít hrát',
        link: '/jak-si-hru-vyzkouset/',
      },
      {
        text: 'Pravidla',
        link: '/pravidla/',
      },
      {
        text: 'Publikace',
        link: '/publikace/',
      },
      {
        text: 'O webu',
        link: '/o-webu/',
      }
    ],
    sidebar: {
      '/pravidla/': genPravidlaSidebarConfig('Pravidla'),
      '/publikace/': genPublikaceSidebarConfig('Publikace')
    }
  },
  plugins: {
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: {
        message: "Nový obsah k dispozici.",
        buttonText: "Aktualizovat"
      }
    },
    '@vuepress/google-analytics': {
      ga: 'UA-96539393-1'
    },
    '@vuepress/back-to-top': {}
  }
}

function genPravidlaSidebarConfig(title) {
  return [{
    title,
    collapsable: false,
    children: [
      '',
      'boj'
    ]
  }]
}

function genPublikaceSidebarConfig(title) {
  return [{
    title,
    collapsable: false,
    children: [
      ''
    ]
  }]
}
