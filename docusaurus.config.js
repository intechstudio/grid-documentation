// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Intech Studio Documentation ',
  tagline: 'A Guide for Our Products',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Intech Studio', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          lastVersion: 'current'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        }
      }),
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },

      navbar: {
        title: 'Intech Studio Documentation',
        logo: {
          alt: 'Intech Studio Documentation Logo',
          src: 'img/logo.svg',
          srcDark: 'img/icon-logo-square-white-transparent.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'guides/introduction',
            position: 'left',
            label: 'Guides',
            to: 'guides',
            sidebarid: 'guidesSidebar'
          },
          {
            type: 'doc',
            docId: 'wiki/introduction',
            position: 'left',
            label: 'Wiki',
            to: 'wiki',
            sidebarid: 'wikiSidebar'
          },
          {
            type: 'doc',
            docId: 'reference-manual/introduction',
            position: 'left',
            label: 'Reference Manual',
            to: 'reference-manual',
            sidebarid: 'referenceManualSidebar'
          },
          {
            href: 'https://intech.studio/',
            label: 'Intech Studio',
            position: 'right',
          },     
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: `THINGS CAN'T MISS`,
            items: [
              {
                label: 'Privacy Policy',
                href: 'https://intech.studio/common/privacy-policy',
              },
            ],
          },
          {
            title: 'FOLLOW US',
            items: [
              {
                html: `
                <div style="display:flex; flex-direction: column; ">
                
                            <a style="display: flex; align-items: center; " href="https://www.instagram.com/intechstudio/" target="_blank" rel="noreferrer noopener" aria-label="Instagram icon">
              <img src="/img/icon/instagram.svg"  alt="Instagram icon" width="24" height="16"  /><span>Instagram</span>
            </a>
                        <a style="display: flex; align-items: center; " href="https://www.facebook.com/intechstudio/" target="_blank" rel="noreferrer noopener" aria-label="Facebook icon">
              <img src="/img/icon/facebook.svg" alt="Facebook icon" width="24"  height="16" /><span>Facebook</span>
            </a>
                        <a style="display: flex; align-items: center; " href="https://twitter.com/intechstudio" target="_blank" rel="noreferrer noopener" aria-label="Twitter icon">
              <img src="/img/icon/twitter.svg" alt="Twitter icon" width="24"  height="16" /><span>Twitter</span>
            </a>
                        <a style="display: flex; align-items: center; " href="https://youtube.com/intechstudio" target="_blank" rel="noreferrer noopener" aria-label="Youtube icon">
              <img src="/img/icon/youtube.svg" alt="Youtube icon" width="24"  height="16" /><span>Youtube</span>
            </a>
                </div>

          `,
              },
            ],
          },
          {
            title: 'CONTACT & ADDRESS',
            items: [
              {
                html: `
                <div style="display:flex; flex-direction: column; gap:15px">

                  <div style="display:flex; flex-direction: column;">
                    <strong>Email</strong>
                    <a href="mailto:support@intech.studio" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">support@intech.studio</a>
                  </div>

                  <div style="display:flex; flex-direction: column;">
                    <strong>Business Details</strong>
                      <span>Intech Studio Kft.</span>
                      <span>6640 Csongrád, Tanya 40.</span>
                      <span>VAT: HU-26696092</span>
                  </div>

                </div>

          `,
              },
            ],
          },
          {
            title: 'LINKS',
            items: [
              {
                label: 'Intech Studio',
                href: 'https://intech.studio/',
              },

              {
                label: 'GitHub',
                href: 'https://github.com/intechstudio',
              },
              {
                label: 'Feature Request',
                href: 'https://intechstudio.hellonext.co/',
              },
            ],
          },
        ],

        copyright: `Copyright © ${new Date().getFullYear()} Intech Studio`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
