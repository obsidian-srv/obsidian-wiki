import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'ObsidianMC',
  description: 'Вики сервера ObsidianMC',
  lang: 'ru-RU',

  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
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
          { text: '💻 О сервере', link: '/' },
          { text: '❓ Как зайти на сервер?', link: '/obshaya-informaciya/kak-zaiti-na-server' },
          { text: '🛠️ Представители сервера', link: '/obshaya-informaciya/predstaviteli-servera' },
        ],
      },
      {
        text: '🌍 Игровая информация',
        items: [
          {
            text: '🕹️ Игровые механики 1 сезона',
            collapsed: true,
            items: [
              { text: '💬 Игровой чат', link: '/igrovaya-informaciya/igrovye-mekhaniki-1-sezona/igrovoi-chat' },
              { text: '🎤 PlasmoVoice', link: '/igrovaya-informaciya/igrovye-mekhaniki-1-sezona/plasmovoice' },
              { text: '🌟 Невидимые рамки и свет', link: '/igrovaya-informaciya/igrovye-mekhaniki-1-sezona/nevidimye-ramki-i-svet' },
              { text: '💸 Магазины', link: '/igrovaya-informaciya/igrovye-mekhaniki-1-sezona/magaziny' },
              { text: '🏤 Кланы', link: '/igrovaya-informaciya/igrovye-mekhaniki-1-sezona/klany' },
              { text: '🍺 Различные напитки', link: '/igrovaya-informaciya/igrovye-mekhaniki-1-sezona/razlichnye-napitki' },
              { text: '🎂 Различная еда', link: '/igrovaya-informaciya/igrovye-mekhaniki-1-sezona/razlichnaya-eda' },
              { text: '🪓 Авто срубка деревьев', link: '/igrovaya-informaciya/igrovye-mekhaniki-1-sezona/avto-srubka-derevev' },
              { text: '⛓️ Цепочки', link: '/igrovaya-informaciya/igrovye-mekhaniki-1-sezona/cepochki' },
              { text: '🌄 Кастомная генерация', link: '/igrovaya-informaciya/igrovye-mekhaniki-1-sezona/kastomnaya-generaciya' },
              { text: '🗺️ Карта мира', link: '/igrovaya-informaciya/igrovye-mekhaniki-1-sezona/karta-mira' },
              { text: '🎅 Скины', link: '/igrovaya-informaciya/igrovye-mekhaniki-1-sezona/skiny' },
            ],
          },
          {
            text: '🕹️ Игровые механики межсезонья I',
            collapsed: true,
            items: [
              { text: '🏳️ Страны', link: '/igrovaya-informaciya/igrovye-mekhaniki-mezhsezonya-i/strany' },
              { text: '🚀 Система ракет', link: '/igrovaya-informaciya/igrovye-mekhaniki-mezhsezonya-i/sistema-raket' },
              { text: '🗺️ Карта мира', link: '/igrovaya-informaciya/igrovye-mekhaniki-mezhsezonya-i/karta-mira' },
              { text: '🚃 Скоростные вагонетки', link: '/igrovaya-informaciya/igrovye-mekhaniki-mezhsezonya-i/skorostnye-vagonetki' },
              { text: '💬 Игровой чат', link: '/igrovaya-informaciya/igrovye-mekhaniki-mezhsezonya-i/igrovoi-chat' },
              { text: '🎤 PlasmoVoice', link: '/igrovaya-informaciya/igrovye-mekhaniki-mezhsezonya-i/plasmovoice' },
              { text: '🌟 Невидимые рамки и свет', link: '/igrovaya-informaciya/igrovye-mekhaniki-mezhsezonya-i/nevidimye-ramki-i-svet' },
              { text: '🎅 Скины', link: '/igrovaya-informaciya/igrovye-mekhaniki-mezhsezonya-i/skiny' },
              { text: '⚠️ Небольшие изменения геймплея', link: '/igrovaya-informaciya/igrovye-mekhaniki-mezhsezonya-i/nebolshie-izmeneniya-geimpleya' },
            ],
          },
          { text: '📩 Тикеты', link: '/igrovaya-informaciya/tikety' },
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
