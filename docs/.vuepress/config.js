module.exports = {
  title: "Ample Dev Playbook",
  description: "We're Ample developers. This is how we do work.",
  port: 8000,
  head: [["link", { rel: "icon", href: "/favicon.png" }]],
  plugins: [
    [
      "vuepress-plugin-code-copy",
      {
        selector: 'div[class*="language-"] pre',
        backgroundTransition: true,
        staticIcon: false
      }
    ]
  ],
  themeConfig: {
    docsRepo: "ample/dev-playbook",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "Make this page better",
    nav: [
      { text: "Home", link: "/" },
      { text: "Work", link: "/work/" },
      { text: "Code", link: "/code/" }
    ],
    sidebar: {
      "/work/": [
        {
          title: "Working at Ample",
          collapsable: false,
          children: [
            ["/work/", "Overview"],
            "/work/coverage-notes/",
            "/work/setup/",
            "/work/project-start/",
            "/work/project-work/",
            "/work/quality-assurance/",
            "/work/project-end/"
          ]
        }
      ],
      "/code/": [
        {
          title: "Writing Code",
          collapsable: false,
          children: [
            ["/code/", "Overview"],
            "/code/syntax-styleguides/",
            "/code/starter-kit/",
            "/code/testing/",
            "/code/data-architecture/",
            "/code/component-architecture/"
          ]
        }
      ]
    }
  },
  plugins: [
    [
      "robots",
      {
        host: "https://playbook.helloample.com",
        disallowAll: true,
        policies: [
          {
            userAgent: "*",
            disallow: ["/"],
          }
        ]
      }
    ],
    [
      "vuepress-plugin-container",
      {
        type: "info",
        defaultTitle: ""
      }
    ]
  ]
}
