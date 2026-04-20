import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'ObsidianMC',
  description: 'Вики сервера ObsidianMC',
  lang: 'ru-RU',

  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com' }],
    ['link', { 
      href: 'https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap', 
      rel: 'stylesheet' 
    }],
    ['link', { 
      href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap', 
      rel: 'stylesheet' 
    }],
    ['link', { 
      href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap', 
      rel: 'stylesheet' 
    }],
  ],

  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'ObsidianMC',

    nav: [
      { text: 'Discord', link: 'https://discord.obsidianmc.ru/' },
      { text: 'Map', link: 'https://map.obsidianmc.ru/' },
    ],

    sidebar: [
      {
        text: '📖 Общая Информация',
        items: [
          { text: '💻 О сервере', link: '/wiki/' },
          { text: '❓ Как зайти на сервер?', link: '/wiki/kak-zaiti-na-server' },
          { text: '🛠️ Представители сервера', link: '/wiki/predstaviteli-servera' },
        ],
      },
      {
        text: '🌍 Игровая информация',
        items: [
          {
            text: '🕹️ Игровые механики "1 сезона"', link: '/wiki/igrovye-mekhaniki-1-sezona',
            collapsed: true,
            items: [
              { text: '💬 Игровой чат', link: '/wiki/1-igrovoi-chat' },
              { text: '🎤 PlasmoVoice', link: '/wiki/2-plasmovoice' },
              { text: '🌟 Невидимые рамки и свет', link: '/wiki/3-nevidimye-ramki-i-svet' },
              { text: '💸 Магазины', link: '/wiki/4-magaziny' },
              { text: '🏤 Кланы', link: '/wiki/5-klany' },
              { text: '🍺 Различные напитки', link: '/wiki/6-razlichnye-napitki' },
              { text: '🎂 Различная еда', link: '/wiki/7-razlichnaya-eda' },
              { text: '🪓 Авто срубка деревьев', link: '/wiki/8-avto-srubka-derevev' },
              { text: '⛓️ Цепочки', link: '/wiki/9-cepochki' },
              { text: '🌄 Кастомная генерация', link: '/wiki/10-kastomnaya-generaciya' },
              { text: '🗺️ Карта мира', link: '/wiki/11-karta-mira' },
              { text: '🎅 Скины', link: '/wiki/12-skiny' },
            ],
          },
          {
            text: '🕹️ Игровые механики "межсезонья I"', link: '/wiki/igrovye-mekhaniki-mezhsezonya-i',
            collapsed: true,
            items: [
              { text: '🏳️ Страны', link: '/wiki/13-strany' },
              { text: '🚀 Система ракет', link: '/wiki/14-sistema-raket' },
              { text: '🗺️ Карта мира', link: '/wiki/15-karta-mira' },
              { text: '🚃 Скоростные вагонетки', link: '/wiki/16-skorostnye-vagonetki' },
              { text: '💬 Игровой чат', link: '/wiki/17-igrovoi-chat' },
              { text: '🎤 PlasmoVoice', link: '/wiki/18-plasmovoice' },
              { text: '🌟 Невидимые рамки и свет', link: '/wiki/19-nevidimye-ramki-i-svet' },
              { text: '🎅 Скины', link: '/wiki/20-skiny' },
              { text: '⚠️ Небольшие изменения геймплея', link: '/wiki/21-nebolshie-izmeneniya-geimpleya' },
            ],
          },
        ],
      },
      {
        text: '🌍 Прочее',
        items: [
          { text: '📩 Тикеты', link: '/wiki/tikety' },
        ],
      },
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Поиск',
                buttonAriaLabel: 'Поиск',
              },
              modal: {
                displayDetails: 'Раскрыть список',
                resetButtonTitle: 'Сбросить поиск',
                backButtonTitle: 'Закрыть поиск',
                noResultsText: 'Нет результатов по запросу',
                footer: {
                  selectText: 'выбрать',
                  selectKeyAriaLabel: 'выбрать',
                  navigateText: 'перейти',
                  navigateUpKeyAriaLabel: 'стрелка вверх',
                  navigateDownKeyAriaLabel: 'стрелка вниз',
                  closeText: 'закрыть',
                  closeKeyAriaLabel: 'esc',
                },
              },
            },
          },
        },
      },
    },

    outline: {
      label: 'На этой странице',
      level: [2, 3],
    },

    docFooter: {
      prev: 'Предыдущая',
      next: 'Следующая',
    },

    darkModeSwitchLabel: 'Тема',
    lightModeSwitchTitle: 'Светлая тема',
    darkModeSwitchTitle: 'Тёмная тема',
    sidebarMenuLabel: 'Меню',
    returnToTopLabel: 'Наверх',

    footer: {
      message: 'ObsidianMC Wiki',
    },
  },
})
