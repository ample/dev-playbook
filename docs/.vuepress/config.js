module.exports = {
  title: "Ample Dev Playbook",
  description: "We're Ample developers. This is how we do work.",
  port: 8000,
  head: [["link", { rel: "icon", href: "/favicon.png" }]],
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
