const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'TUMO Knowledge Base',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Training Manuals',
        link: '/training-manuals/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
    ],
    sidebar: {
      '/training-manuals/': [
        {
          title: 'Center Manager Manual',
          collapsable: true,
          children: [
              {
                  title: 'You as a Center Manager',
                  path: 'asCenterManager'
              },
              {
                  title: 'Center Manager Scope of Responsibilities',
                  path: 'centerManagerScopeOfResponsabilities'
              },
              {
                  title: 'Access to Work Platforms',
                  path: 'accessToWorkPlatform'
              },
              {
                  title: 'TUMO Education Approach',
                  path: 'tumoEducationalApproach'
              },
              {
                  title: 'Student Registration',
                  path: 'studentRegistration'
              },
              {
                  title: 'Student Account Statuses',
                  path: 'studentAccountStatuses'
              },
          ]
        },
          {
              title: 'Workshop Leader Manual',
              collapsable: true,
              children: [
                  {
                      title: 'You as a Center Manager',
                      path: 'asCenterManager'
                  },
              ]
          }
      ],
    }
  },


  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}