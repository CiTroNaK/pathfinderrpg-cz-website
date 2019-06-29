module.exports = {
  title: 'Pathfinder RPG',
  description: 'První Edice',
  themeConfig: {
    repo: 'https://gitlab.com/citronak/pathfinder-rpg-cz',
    editLinks: true,
    editLinkText: 'Pomoz mi zlepšit obsah!',
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
      updatePopup: true
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
