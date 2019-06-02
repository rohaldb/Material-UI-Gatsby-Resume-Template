import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  smallTitle: {
    marginBottom: '8px',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '11.75px'
  }
}))

export default function Experience (props) {
  const classes = useStyles()

  return (
    <div>
      <Typography variant='h4'>Senior Web Designer, Webflow</Typography>
      <Typography className={classes.smallTitle}>September 2015 ─ Present</Typography>
      <Typography>Harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum.</Typography>
    </div>
  )
}
