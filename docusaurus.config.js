// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'C3D.ORG',
    tagline: 'The biomechanics standard file format',
    //tagline: 'The C3D file format specification and format description',
    favicon: 'img/c3dfile.ico',

    // Set the production url of your site here
    url: 'http://c3d.org',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/c3d.org/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'c3d-community', // Usually your GitHub org/user name.
    projectName: 'c3d.org', // Usually your repo name.
    deploymentBranch: 'gh-pages',
    trailingSlash: false,

    onBrokenLinks: 'ignore',
    markdown: {
        hooks: {
            onBrokenMarkdownLinks: 'ignore',
        }
    },

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    routeBasePath: '/',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                },
                blog: false,
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/c3d-social-card.jpg',
            navbar: {
                title: 'C3D.ORG',
                logo: {
                    alt: 'C3D Logo',
                    src: 'img/C3DIconv4.png',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'Specification',
                    },
                    {
                        type: 'dropdown',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'Documentation',
                        items: [
                            {
                                label: 'Documents',
                                to: '/documents',
                            },
                            {
                                label: 'Introduction',
                                to: '/introduction',
                            },
                            {
                                label: 'Overview',
                                to: '/overview',
                            },
                        ],
                    },
                    {
                        type: 'dropdown',
                        position: 'left',
                        label: 'Support',
                        items: [
                            {
                                // companies and organizations that support the c3d file standard
                                label: 'Manufacturers',
                                to: '/manufacturers',
                            },
                            {
                                label: 'Applications',
                                to: '/applications',
                            },
                            {
                                label: 'Sample C3D Files',
                                to: '/sample-files',
                            },
                        ]
                    },
                    {
                        label: 'About',
                        to: '/about',
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
                                label: 'Specification',
                                to: '/the-c3d-file-format',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Discussion',
                                href: 'https://github.com/c3d-community/c3d.org',
                            },
                        ],
                    },
                    {
                        title: 'Contact',
                        items: [
                            {
                                label: 'info@c3d.org',
                                href: 'mailto:info@c3d.org',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} C3D Community CIC.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;
