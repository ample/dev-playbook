# Starting a New Project

This guide assumes that you're starting a new project and don't have limitations from either client or scope on following Ample's recommendations. If you do, you will have to veer from this guide. The goal is to stay as close as possible to maintain consistency across our work.

That ideal process looks like this:

1. **Install the [Gatsby command-line interface](https://yarnpkg.com/en/package/gatsby-cli)** for creating new sites and running Gataby commands.

   ```
   $ yarn global add gatsby-cli
   ```

1. **Clone the [Gatsby starter](https://github.com/ample/gatsby-starter-ample)**.

   ```
   $ gatsby new [PROJECT_NAME] ample/gatsby-starter-ample
   ```

   Our convention is for the names we use to mimic the domains to which the project(s) will be deployed. For example, if the project will be deployed to https://www.helloample.com, the repo should be `helloample-com`. (Note: We tend to omit the `www` unless necessary.)

   In cases where we don't know the domain or it isn't relevant, name it semantically and concisely. We can always come back and change it later.

   For staging sites, we treat the variance as though it were a subdomain. For example, if the production site is `helloample-com`, then the staging site would be `staging-helloample-com`.

1. **Create a repository** in [Ample's Github organization](https://github.com/organizations/ample/repositories/new).

1. **Adjust the Git remote URL** to reflect the new repo, then push.

   ```
   $ git remote set-url origin [NEW_REPO_URL]
   $ git push origin master
   ```

1. **Create a new Netlify site**. If the client already has a team account, or if you can get the client's credit card to set one up on their behalf, or if you can have the client setup their account, _great!_ But usually that doesn't happen out of the gate. In most cases, you can start by creating the project under [the Ample team](https://app.netlify.com/teams/ample/sites).

   If using our Gatsby starter, the build command should be `yarn netlify:build`, and the publish directory should be `public`. But these will be set automatically by `netlify.toml`.

1. **Rename the site**. Netlify names the project automatically. Rename the site to match the repo name.

1. **Add a [password](https://docs.netlify.com/visitor-access/password-protection/#site-wide-protection) to the site.** Even though this will _eventually_ be our production site, we're treating it like it's a staging site until it's launched.

Now you're ready to go! Eventually you'll want to register third-party services, but that's the base set of tasks that will get you up and running.

For more information on the code, visit [_Working with Gatsby_](/code/working-with-gatsby).
