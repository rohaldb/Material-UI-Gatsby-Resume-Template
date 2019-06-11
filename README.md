# Gatsby Resume Template

A [Material-UI](https://material-ui.com/) [Gatsby](https://www.gatsbyjs.org) resume website (websume) template. Checkout the [demo](https://www.benrohald.com).

## How to use

### Content

Inside of `gatsby-config.js` you'll find a `resume` js object nested inside of `siteMetadata`. Simply update this object to reflect the content from your resume and the content will be loaded automatically.

Here is a sample of what it could look like:
```js
resume: {
  about: {
    name: 'Ben Rohald',
    title: 'Headline',
    summary: 'Explanation'
  },
  education: [
    {
      degree: 'Degree I did',
      dateRange: 'Date I did it',
      school: 'Where I did it'
    }
  ],
  experience: [
    {
      title: 'Place I worked',
      dateRange: 'Dates I worked',
      summary: 'Stuff I did'
    },
  ],
  connect: [
    'https://github.com/rohaldbUni',
  ]
}
```

The `connect` section takes in a list of urls and automatically renders the appropriate icons using [React icons](https://github.com/react-icons/react-icons). **Note:** if you want to include an email address, make sure it is of the form `mailto: email@address.com`.

### Assets

`src/assets` houses the three assets for the site:
- A downloadable PDF version of your resume `resume.pdf`
- An image of you (smile!) `Profile.jpg`
- A favicon for the site `icon.png`

Replace these with your own, making sure your new files have the same names.

When youre done, run the following to run it the site locally.

```sh
npm install
npm run develop
```

## Advanced Modification

Not happy with the template? Feel free to chop it up! The site is built on top of [Material-UI's Gatsby Template](https://github.com/mui-org/material-ui/tree/master/examples/gatsby). I built this to help bootstrap, not to be a complete product.


## Deployment

Ready to deploy? See these resources to get going
- [Gatsby Deploying and Hosting](https://www.gatsbyjs.org/docs/deploying-and-hosting/)
- [Using Github Pages with Gatsby](https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/) - My preferred method
- [GoDaddy Domain with GitHub Pages
](https://medium.com/@JinnaBalu/godaddy-domain-with-github-pages-62aed906d4ef)
