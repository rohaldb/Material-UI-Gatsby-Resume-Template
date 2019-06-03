import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Skill from '../components/Skill'
import { SocialIcon } from 'react-social-icons'
import Button from '@material-ui/core/Button'
import { graphql } from 'gatsby'
import _ from 'lodash'

function Divider () {
  const classes = useStyles()
  return (
    <div className={classes.divider} />
  )
}

const useStyles = makeStyles(theme => ({
  toolbar: {
    marginTop: '55px'
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarLink: {
    flexShrink: 0,
    fontSize: '13.75px',
    fontWeight: '500',
    padding: '20px'
  },
  divider: {
    width: '100%',
    borderBottom: `1px solid black`
  },
  profilePic: {
    width: '90%',
    filter: 'grayscale(100%)'
  },
  downloadResume: {
    marginTop: theme.spacing(3),
    borderRadius: '0px',
    backgroundColor: 'black',
    color: 'white',
    '&:hover': {
      backgroundColor: 'transparent',
      border: '1px solid black',
      color: 'black'
    }
  },
  section: {
    padding: '80px 0'
  },
  icon: {
    margin: '0px 10px 10px 10px'
  },
  footer: {
    padding: theme.spacing(6, 0)
  }
}))

const sections = [
  'About',
  'Education',
  'Experience',
  'Skills',
  'Connect'
]

export default ({data}) => {
  const classes = useStyles()
  console.log(data)
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='md'>
        <Toolbar className={classes.toolbar}>
          <Typography
            variant='h1'
            color='inherit'
            noWrap
            className={classes.toolbarTitle}
          >
            {data.site.siteMetadata.resume.about.name}
          </Typography>
          {sections.map(section => (
            <Link
              color='inherit'
              noWrap
              key={section}
              variant='body2'
              className={classes.toolbarLink}
              href={`#${section}`}
              >
              {section}
            </Link>
            ))}
        </Toolbar>

        <Divider />

        <Grid container direction='row' justify='center' className={classes.section} id='About'>
          <Grid item xs={12} sm={6}>
            <img alt='profilePic' className={classes.profilePic} src='https://i.ibb.co/zxmcpch/IMG-5700-copy.jpg' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>About me</Typography>
            <Typography variant='h1'>{data.site.siteMetadata.resume.about.title}</Typography>
            <Typography>{data.site.siteMetadata.resume.about.summary}</Typography>
            <Button size='large' className={classes.downloadResume}>Download Resume</Button>
          </Grid>
        </Grid>

        <Divider />

        {/* Education */}
        <Grid container direction='row' className={classes.section} id='Education'>
          <Grid item xs={3}>
            <Typography>Education</Typography>
          </Grid>
          <Grid item xs={9}>
            <Grid container direction='row' spacing={4}>
              {_.map(data.site.siteMetadata.resume.education, (edu, i) => (
                <Grid item xs={6} sm={4} key={i}>
                  <Education school={edu.school} dateRange={edu.dateRange} degree={edu.degree} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Divider />

        {/* Experience */}
        <Grid container direction='row' className={classes.section} id='Experience'>
          <Grid item xs={3}>
            <Typography>Experience</Typography>
          </Grid>
          <Grid item xs={9}>
            <Grid container direction='column' spacing={4}>
              {_.map(data.site.siteMetadata.resume.experience, (exp, i) => (
                <Grid item key={i}>
                  <Experience title={exp.title} dateRange={exp.dateRange} summary={exp.summary} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Divider />

        {/* Skills */}
        <Grid container direction='column' className={classes.section} id='Skills'>
          <Typography variant='h1' align='center' style={{ marginBottom: '60px'}} >Skills & Abilities</Typography>
          <Grid item xs={12}>
            <Grid container direction='row' spacing={4}>
              {_.map(data.site.siteMetadata.resume.skills, (skill, i) => (
                <Grid item xs={4} key={i}>
                  <Skill title={skill.title} summary={skill.summary} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Divider />

        {/* Connect */}
        <Grid container direction='row' className={classes.section} id='Connect'>
          <Grid item xs={3}>
            <Typography>Connect</Typography>
          </Grid>
          <Grid item xs={9}>
            {_.map(data.site.siteMetadata.resume.connect, (x, i) =>
              <SocialIcon url={`${x}`} key={i} className={classes.icon} />
            )}
          </Grid>
        </Grid>

        <Divider />

        {/* Footer */}
        <footer className={classes.footer}>
          <Container maxWidth='lg'>
            <Typography align='center'>
              Designed with <span role='img' aria-label='heart'>❤️</span> by @rohaldb
            </Typography>
          </Container>
        </footer>
        {/* End footer */}

      </Container>
    </React.Fragment>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        resume {
          experience {
            title
            dateRange
            summary
          }
          education {
            degree
            dateRange
            school
          }
          connect
          skills {
            title
            summary
          }
          about {
            name
            title
            summary
          }
        }
      }
    }
  }
`
