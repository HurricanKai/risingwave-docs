// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RisingWave',
  tagline: 'Get started to RisingWave in 5 minutes',
  url: 'https://singularity-data.com',
  baseUrl: '/',
  trailingSlash: true,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'RisingWave Community', // Usually your GitHub org/user name.
  projectName: 'RisingWave', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          lastVersion: 'current',
          sidebarPath: require.resolve('./sidebars.js'),
          versions: {
            current: {
              label: 'Next',
              path: '/next',
            }
          },
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'myID',
          anonymizeIP: true
        }
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'RisingWave',
        logo: {
          alt: 'RisingWave Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            type: 'docsVersionDropdown',
            docsPluginId: 'default',
            position: 'right'
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/singularity-data/risingwave-dev',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                href: 'https://join.slack.com/t/risingwave-community/shared_invite/zt-120rft0mr-d8uGk3d~NZiZAQWPnElOfw',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/SingularityDatas',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/singularity-data/risingwave-dev',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'app_id',
  
        // Public API key: it is safe to commit it
        apiKey: 'api_key',
  
        indexName: 'index_name',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        //... other Algolia params
      },
      metadata: [{name: 'keywords', content: 'doc, blog'}],
      items: [
        { label: 'Next', to: 'docs/next/intro' },
        { label: '1.0.0', to: 'docs/1.0.0/intro' }
      ],
    }),
    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'fr'],
    },
};

module.exports = config;
