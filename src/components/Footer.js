import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(6, 0)
  }
}))

export default function Footer (props) {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Container maxWidth='lg'>
        <Typography align='center'>
          Made with <span role='img' aria-label='heart'>❤️</span> by <Link href={'http://www.benrohald.com'}>@rohaldb</Link>
        </Typography>
      </Container>
    </footer>
  )
}
