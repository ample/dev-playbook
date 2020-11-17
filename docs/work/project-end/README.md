# Launching a Project
## Introduction
At Ample, we pride ourselves on our ability to deliver quality digital products. Building website and applications can be difficult, especially in today’s ecosystem with the plethora of options available. You can think of this guide as your North Star; an escort in navigating the murky depths of deploying an exceptional website.
This guide assumes that you’ve completed the [setup steps](../project-start/README.md), and aren’t restricted by internal or client scope. You should have the following ready to go
- A github reposity for your gatsby project
- A staging site on Netlify
- A CMS (Contentful, Dato, or forestry) hooked up to your project
Here’s a list of what you will need to keep in mind when you’re preparing for a launch.
    1. [eContent](#1.-econtent)
    2. [SEO](#2.-seo)
    3. [Social](#3.-social)
    4. [Validation](#4.-validation)
    5. [Accessibility](#5.-accessibility)
    6. [Rendering](#6.-rendering)
    7. [Funcitonality](#7.-funcitonality)
    8. [Optimization](#8.-optimization)
    9. [Security](#9.-security)
    10.[Post Launch](#10.-post-launch)
## 1. eContent
If you plan on building a site where editors can add content via a headless CMS, it’s important to make sure that the content is polished when you deploy.
- All content copy should be free from spelling errors
- The Page and content formatting should be appropriate on all pages
- All Placeholder text is removed
- All pages have content
- Privacy Policy included (Generate one at getterms.io)
- Print stylesheet exists and tested
- A Favicon icon created and displays correctly (retina included)
- Footer includes copyright statement
- 404 page exists and informative
- 500 page exists and informative
- Correct author is attributed to pages and posts (as required)
## 2. SEO
You are making a website, and you’re going to want people to see it.
- Page titles are descriptive and SEO friendly
- All page titles are unique
  - Note: In most CMSs you can configure your models to ensure title uniqueness.
- Meta data included and appropriate
- H1s used for page titles and only one H1 per page
- XML sitemap has been generated and added to root of website
- XML sitemap is setup to get regenerated on a daily basis (and/or via publish)
- robots.txt is generated and added to root of website (exclude /admin)
- 301 redirects for existing website are prepared and in place
- Website can be accessed by search engines (remove noindex, nofollow for pages)
- Google Analytics (or GTM) and relevant analytics/tracking tools installed
## 3. Social
Here are some thing you should consider adding when trying to keep you site connected to socials.
- Open Graph tags included across website and appropriate?
- Social accounts integrated, linking to correct URLs and use API for integrations
- Yext integration where appropriate
- Schema.org microdata where appropriate
## 4. Validation
Your code should be clean. You can setup seamless integration into your editor to help with this, ESLint and Stylelint are good options.
- HTML has passed validation (or known issues noted)
- CSS has passed validation (or known issues noted)
- CSS linted (to hurt your feelings)
- Site links have been tested and resolve correctly
- JavaScript is error free
## 5. Accessibility
The project should adhere to a high standard of accessibility.
- Website meets appropriate level of [WCAG compliance](https://www.w3.org/WAI/standards-guidelines/wcag/)
- ARIA Landmark Roles specified
- Semantic headings and structure used
- Links are clearly recognizable and have :focus state
- Images use appropriate ALT text
- Alternatives provided for users with Javascript disabled
- Forms have logical tab indexes (if custom controls)
- Associated label for all form controls
- Color contrast tested
- Website accessibility has been checked with Total Validator Pro or WAVE and issues resolved (exceptions noted)
## 6. Rendering
Everything should look as it’s intended. Using tools like Storybook and browerstack can help with this.
- Displays & functions correctly in all supported browsers / platforms (see SOW)
- All content renders reasonably well on large screens
- All content renders reasonably well on small screens (sweet, sweet graceful “deg”)
## 7. Functionality
Funcionality means your code should function as intended. Storybook can be helpful here as well.
- Forms have been tested and processed correctly
- Required fields have been tested
- Review input validation (min/max lengths, character limits)
- Forms send to the correct recipient
- Forms have confirmation URL or event tracking so submissions can be tracked
- Forms process correctly with JavaScript disabled
- Website search and search results function correctly
## 8. Optimization
Your project should be optimized.
- Imgix or equivalent image optimization strategy in place
- CSS is minified and combined
- JavaScript is minified and combined (as much as possible)
- Enable gzip compression
- Ensure only necessary fonts, weights and character sets are installed
- Ensure fonts are tied to client’s account
- Run Google speed test and optimize accordingly (record score and known issues)
- Run Web page test and optimize accordingly (record results)
- CDN / Caching as required
## 9. Security
Your project should be secure.
- Secure areas are locked down and not accessible by search engines
- Default CMS login URL is changed
- Default CMS username is changed
- SSL Certificate is requested (Automatically generated on Netlify)
## 10. Launching
The last step in launching a Netflify website - lift off! Here are a few things you’ll want to check off before you bring out the champagne.
- If you haven’t created a staging branch on your project, create one and point the initial netlify site to that branch.
- Create a production site on Netlify for your project, and connect it to your master branch.
  - Note: you may have to make some adjustments in your `netlify.toml` to accomodate for a production build.
- [Register a new domain](https://docs.netlify.com/domains-https/netlify-dns/domain-registration/), and add it to your team’s domains on Netlify.
## Post Launch
Once you’ve launched to production you’re going to want go through these last steps to ensure everything is humming.
###
- Ensure site is visible to search engines
- Images, media and links reference live URL
- Webfonts integrated and working correctly on live site
- Webfonts set to production (as required)
- 301 redirects are in place and working correctly
- Website URL has been submitted to Google
- Generate a new sitemap.xml and upload to root
- Site added to Google Webmaster tools and sitemap submitted
- Analytics has been setup and integrated into website
Congratulations, you just launched an exceptional website! :rocket: