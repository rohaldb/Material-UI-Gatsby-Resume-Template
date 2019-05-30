import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

function MadeWithLove () {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Built with love by the '}
      <Link color='inherit' href='https://material-ui.com/'>
        Material-UI
      </Link>
      {' team.'}
    </Typography>
  )
}

const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid black`,
    marginTop: '55px'
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0
  },
  main: {
    paddingTop: '90px'
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
      <Container maxWidth='lg'>
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
        <main className={classes.main}>
          <Grid container direction='row' justify='center'>
            <Grid item xs='12' sm='6' style={{border: '2px solid black'}}>
              <p>skdjf</p>
            </Grid>
            <Grid item xs='12' sm='6' style={{border: '2px solid black'}}>
              <p>skdjf</p>
            </Grid>
          </Grid>
        </main>
      </Container>
      {/* Footer */}
      <footer className={classes.footer}>
        <Container maxWidth='lg'>
          <Typography variant='h6' align='center' gutterBottom>
            Footer
          </Typography>
          <Typography variant='subtitle1' align='center' color='textSecondary' component='p'>
            Something here to give the footer a purpose!
          </Typography>
          <MadeWithLove />
        </Container>
      </footer>
      {/* End footer */}
    </React.Fragment>
  )
}
