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
      { text: 'Вики', link: '/wiki/' },
      { text: 'Правила', link: '/rules/' },
      { text: 'Discord', link: '/discord/' },
      { text: 'Map', link: '/map/' },
    ],

    sidebar: {
      '/wiki/': [
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
            {
              text: '🕹️ Игровые механики "Season 2"', link: '/wiki/igrovye-mekhaniki-season-2',
              collapsed: true,
              items: [
                { text: '💵 Банк', link: '/wiki/22-bank' },
                { text: '🏳️ Регионы', link: '/wiki/23-regions' },
                { text: '💬 Игровой чат', link: '/wiki/24-igrovoi-chat' },
                { text: '🎤 PlasmoVoice', link: '/wiki/25-plasmovoice' },
                { text: '📑 Профили', link: '/wiki/26-profiles' },
                { text: '🏤 Кланы', link: '/wiki/27-clans' },
                { text: '🌄 Кастомная генерация', link: '/wiki/28-kastomnaya-generaciya' },
                { text: '🗺️ Карта мира', link: '/wiki/29-karta-mira' },
                { text: '💡 Свет и рамки', link: '/wiki/30-lightframe' },
                { text: '🛡️ Защита спавна', link: '/wiki/31-spawn-defender' },
                { text: '⚙️ Кастомные предметы', link: '/wiki/32-custom-crafts' },
                { text: '🍺 Различные напитки', link: '/wiki/33-custom-drinks' },
                { text: '💡 Прочее', link: '/wiki/34-other' },
              ],
            },
          ],
        },
        {
          text: '🌍 Прочее',
          items: [
            { text: '📩 Тикеты', link: '/wiki/tikety' },
            { text: '❤️ Подписка', link: '/wiki/donate' },
          ],
        },
      ],
      '/rules/': [
        {
          text: '📖 Правила',
          items: [
            { text: '💻 Немного о правилах', link: '/rules/' },
            { text: '❓ Правила', link: '/rules/rules' },
          ],
        },
      ]
    },

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
      message: 'Obsidian',
    },
  },
})
