const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Altheria Documentation',
  tagline: 'The go-to place for the documentation of all Altheria products',
  url: 'https://altheriaorg.github.io',
  baseUrl: 'https://github.com/altheriaorg/altheria-docs/',
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
        alt: 'My Site Logo',
        src: 'img/Logo_Monogram_Altheria_AltheBlue.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'introduction',
          position: 'left',
          label: 'Practice Editor',
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
          routeBasePath: 'practice_editor',
          path: 'practice_editor',
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
