const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Altheria Documentation',
  tagline: 'L\'emplacement de référence pour la documentation des produits Altheria',
  url: 'https://altheriaorg.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'AltheriaOrg', // Usually your GitHub org/user name.
  projectName: 'altheria-docs', // Usually your repo name.
  trailingSlash: false,
  themeConfig: {
    navbar: {
      title: 'Altheria Docs',
      logo: {
        alt: 'Altheria Logo',
        src: 'img/Logo_Monogram_Altheria_AltheBlue.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'introduction',
          position: 'left',
          label: 'Practice',
        },
      ],
    },    
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: 'practice',
          path: 'practice',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
         
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
