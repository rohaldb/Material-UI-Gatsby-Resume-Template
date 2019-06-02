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
    padding: theme.spacing(1),
    flexShrink: 0
  },
  divider: {
    width: '100%',
    borderBottom: `1px solid black`
  },
  section: {
    padding: '80px 0'
  },
  footer: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0)
  }
}))

const sections = [
  'About Me',
  'Education',
  'Experience',
  'Skills',
  'Contact'
]

export default function Blog () {
  const classes = useStyles()

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='md'>
        <Toolbar className={classes.toolbar}>
          <Typography
            component='h2'
            variant='h5'
            color='inherit'
            noWrap
            className={classes.toolbarTitle}
          >
            Blog
          </Typography>
          {sections.map(section => (
            <Link
              color='inherit'
              noWrap
              key={section}
              variant='body2'
              href='#'
              className={classes.toolbarLink}
              >
              {section}
            </Link>
            ))}
        </Toolbar>

        <Divider />

        <Grid container direction='row' justify='center' className={classes.section}>
          <Grid item xs={12} sm={6}>
            <img alt='profilePic' src='https://uploads-ssl.webflow.com/5a382927284c460001a09b30/5a3857d862014a00011814fc_Picture.jpg'
              style={{width: '90%', filter: 'grayscale(100%)'}} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography>About me</Typography>
            <Typography variant='h1'>I’m an interactive designer with more than 5 years of experience and a wide range of skills in the industry.</Typography>
            <Typography>I’m an interactive designer with more than 5 years of experience and a wide range of skills in the industry</Typography>
          </Grid>
        </Grid>

        <Divider />

        {/* Education */}
        <Grid container direction='row' className={classes.section}>
          <Grid item xs={3}>
            <Typography>Education</Typography>
          </Grid>
          <Grid item xs={9}>
            <Grid container direction='row' spacing={4}>
              <Grid item xs={6} sm={4}>
                <Education />
              </Grid>
              <Grid item xs={6} sm={4}>
                <Education />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Divider />

        {/* Experience */}
        <Grid container direction='row' className={classes.section}>
          <Grid item xs={3}>
            <Typography>Experience</Typography>
          </Grid>
          <Grid item xs={9}>
            <Grid container direction='column' spacing={4}>
              <Grid item>
                <Experience />
              </Grid>
              <Grid item>
                <Experience />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Divider />

        {/* Skills */}
        <Grid container direction='column' className={classes.section}>
          <Grid item xs={12} style={{textAlign: 'center', marginBottom: '60px'}}>
            <Typography variant='h1'>Skills & Abilities</Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container direction='row' spacing={4}>
              <Grid item xs={4}>
                <Skill />
              </Grid>
              <Grid item xs={4}>
                <Skill />
              </Grid>
              <Grid item xs={4}>
                <Skill />
              </Grid>
              <Grid item xs={4}>
                <Skill />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Divider />

        {/* Contact */}
        <Grid container direction='row' className={classes.section}>
          <Grid item xs={3}>
            <Typography>Contact</Typography>
          </Grid>
          <Grid item xs={9}>
            <Grid item xs={12}>
              <Grid container direction='row' spacing={4}>
                <Grid item xs={4}>
                  <Skill />
                </Grid>
                <Grid item xs={4}>
                  <Skill />
                </Grid>
                <Grid item xs={4}>
                  <Skill />
                </Grid>
                <Grid item xs={4}>
                  <Skill />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

      </Container>

      {/* Footer */}
      <footer className={classes.footer}>
        <Container maxWidth='lg'>
          <Typography variant='h6' align='center' gutterBottom>
            Text
          </Typography>
          <Typography variant='subtitle1' align='center' color='textSecondary' component='p'>
            Something here to give the footer a purpose!
          </Typography>
        </Container>
      </footer>
      {/* End footer */}
    </React.Fragment>
  )
}
