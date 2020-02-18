module.exports = {
  title: "Ample Dev Playbook",
  description: "We're Ample developers. This is how we do work.",
  port: 8000,
  head: [["link", { rel: "icon", href: "/favicon.png" }]],
  themeConfig: {
    docsRepo: "ample/dev-playbook",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "Make this page better",
    nav: [
      { text: "Home", link: "/" },
      { text: "Work", link: "/work/" },
      { text: "Code", link: "/code/" },
      { text: "Clients", link: "/clients/" }
    ],
    sidebar: {
      "/work/": [
        {
          title: "Working at Ample",
          collapsable: false,
          children: [
            ["/work/", "Overview"],
            "/work/setup/",
            "/work/project-start/",
            "/work/project-work/",
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
            "/code/dev-concepts/",
            "/code/syntax-styleguides/",
            "/code/working-with-gatsby/",
            "/code/testing/",
            "/code/data-architecture/",
            "/code/component-architecture/"
          ]
        }
      ],
      "/clients/": [
        {
          title: "Our Clients",
          collapsable: false,
          children: [
            ["/clients/", "Overview"],
            "/clients/crossroads/",
            "/clients/patient-point/",
            "/clients/kroger/"
          ]
        }
      ]
    }
  }
}
