module.exports = {
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
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet'
  ],
  siteMetadata: {
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
          title: 'C, C++',
          summary: 'Skill summary - this will be an optional explanation of the skill'
        },
        {
          title: 'Shell/Bash',
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
  }
}
