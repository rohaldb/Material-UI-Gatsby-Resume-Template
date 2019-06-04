module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Blog`,
    author: `Kyle Mathews`,
    description: `A starter blog demonstrating what Gatsby can do.`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.com/`,
    social: {
      twitter: `kylemathews`
    },
    resume: {
      about: {
        name: 'Ben Rohald',
        title: 'Engineer, Computer Scientist & Coding Wizard.',
        summary: 'Ambitious and motivated 5th year Software Engineering and Mathematics student, driven by a passion for technology and application software. Experienced junior developer with a rare combination of quantitative skills and creative insights. As you can tell, I like making websites.'
      },
      education: [
        {
          degree: 'Software Engineering, Statistics',
          dateRange: 'September 2015 ─ Present',
          school: 'UNSW'
        },
        {
          degree: 'Arts',
          dateRange: 'September 2018 ─ Present',
          school: 'USYD'
        }
      ],
      experience: [
        {
          title: 'Senior Web Designer, Webflow',
          dateRange: 'September 2015 ─ Present',
          summary: 'Harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum.'
        },
        {
          title: 'Intern, Optiver',
          dateRange: 'September 2015 ─ Present',
          summary: 'Harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum.'
        }
      ],
      skills: [
        {
          title: 'Algorithms',
          summary: 'Skill summary - this will be an optional explanation of the skill'
        },
        {
          title: 'C++',
          summary: 'Skill summary - this will be an optional explanation of the skill'
        }
      ],
      connect: [
        'https://twitter.com/jaketrent',
        'http://linkedin.com/in/jaketren',
        'http://tumblr.com',
        'http://youtube.com'
      ]
    }
  },
  plugins: [
    'gatsby-plugin-top-layout',
    {
      resolve: 'gatsby-plugin-material-ui',
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: `ADD YOUR TRACKING ID HERE`,
      }
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`
  ]
}
