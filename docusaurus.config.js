// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Intech Studio Documentation ",
  tagline: "A Guide for Our Products",
  url: "https://docs.intech.studio",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/newicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Intech Studio", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          path: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
          lastVersion: "current",
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
        googleTagManager: {
          containerId: "GTM-PZCPN6B",
        },
      }),
    ],
  ],

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },

    // [
    //   '@docusaurus/plugin-google-tag-manager',
    //   {

    //   },
    // ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/2023-03-getting-started.jpg",
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },

      navbar: {
        //title: 'Home',
        logo: {
          alt: "Intech Studio Documentation Logo",
          //src: 'img/logo_wave_black_background.svg',
          //srcDark: 'img/logo_wave_white_background.svg',
          src: "img/logo_square_512x512.png",
          srcDark: "img/logo_square_dark_mode_512x512.png",
        },
        items: [
          {
            type: "doc",
            docId: "guides/introduction",
            position: "left",
            label: "Guides",
            to: "guides",
            sidebarid: "guidesSidebar",
          },
          {
            type: "doc",
            docId: "wiki/introduction",
            position: "left",
            label: "Wiki",
            to: "wiki",
            sidebarid: "wikiSidebar",
          },
          {
            type: "doc",
            docId: "reference-manual/introduction",
            position: "left",
            label: "Reference Manual",
            to: "reference-manual",
            sidebarid: "referenceManualSidebar",
          },
          {
            href: "https://intech.studio/",
            label: "Intech Studio",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: `THINGS CAN'T MISS`,
            items: [
              {
                label: "Privacy Policy",
                href: "https://intech.studio/common/privacy-policy",
              },
            ],
          },
          {
            title: "FOLLOW US",
            items: [
              {
                html: `
                <div style="display:flex; flex-direction: column;  ">
                
                            <a style="display: flex; align-items: center; gap: 0.3rem;  " href="https://www.instagram.com/intechstudio/" target="_blank" rel="noreferrer noopener" aria-label="Instagram icon">
              <img src="/img/icon/instagram.svg"  alt="Instagram icon" width="16"  /><span>Instagram</span>
            </a>
                        <a style="display: flex; align-items: center; gap: 0.3rem;" href="https://www.facebook.com/intechstudio/" target="_blank" rel="noreferrer noopener" aria-label="Facebook icon">
              <img src="/img/icon/facebook.svg" alt="Facebook icon" width="16"   /><span>Facebook</span>
            </a>

                                 <a style="display: flex; align-items: center; gap: 0.3rem;" href="https://https://github.com/intechstudio" target="_blank" rel="noreferrer noopener" aria-label="Github icon">
              <img src="/img/icon/github.svg" alt="Github icon" width="16"   /><span>Github</span>
            </a>
                        <a style="display: flex; align-items: center; gap: 0.3rem;" href="https://x.com/intechstudio" target="_blank" rel="noreferrer noopener" aria-label="Twitter icon">
              <img src="/img/icon/x.svg" alt="X icon" width="16"   /><span>X</span>
            </a>
                        <a style="display: flex; align-items: center; gap: 0.3rem;" href="https://youtube.com/intechstudio" target="_blank" rel="noreferrer noopener" aria-label="Youtube icon">
              <img src="/img/icon/youtube.svg" alt="Youtube icon" width="16"   /><span>Youtube</span>
            </a>

                               <a style="display: flex; align-items: center; gap: 0.3rem;" href="https://www.tiktok.com/@intechstudio" target="_blank" rel="noreferrer noopener" aria-label="TikTok icon">
              <img src="/img/icon/tiktok.svg" alt="Tiktok icon" width="16"   /><span>Tiktok</span>
            </a>
                </div>

          `,
              },
            ],
          },
          {
            title: "CONTACT & ADDRESS",
            items: [
              {
                html: `
                <div style="display:flex; flex-direction: column; gap:15px">

                  <div style="display:flex; flex-direction: column;">
                    <strong>Support Email Address</strong>
                    <a href="mailto:support@intech.studio" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">support@intech.studio</a>
                  </div>

                  <div style="display:flex; flex-direction: column;">
                    <strong>Business Details</strong>
                      <span>Intech Studio Kft.</span>
                      <span>1053 Budapest, Kecskeméti u. 13. I/2</span>
                      <span>VAT: HU-26696092</span>
                  </div>

                </div>

          `,
              },
            ],
          },
          {
            title: "IMPORTANT LINKS",
            items: [
              {
                label: "Intech Studio",
                href: "https://intech.studio/",
              },

              {
                label: "GitHub",
                href: "https://github.com/intechstudio",
              },
              {
                label: "Feature Request",
                href: "https://intechstudio.hellonext.co/",
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
};

module.exports = config;
