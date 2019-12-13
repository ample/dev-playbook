module.exports = {
  title: "Dev Playbook",
  description: "We're Ample developers. This is how we do work.",
  port: 8000,
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Guide", link: "/guide/" }
    ],
    sidebar: {
      "/guide/": [
        {
          title: "Guide",
          collapsable: false,
          children: ["/guide/", "/guide/getting-started/"]
        }
      ]
    }
  }
}
