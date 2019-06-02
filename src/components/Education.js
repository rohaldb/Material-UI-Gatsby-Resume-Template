import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  dateRange: {
    margin: '0',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '11.75px'
  },
  school: {
    margin: '0'
  },
  degree: {
    marginBottom: '0'
  }

}))

export default function Education (props) {
  const classes = useStyles()

  return (
    <div>
      <Typography variant='h4' className={classes.degree}>Software Engineering, Statistics</Typography>
      <Typography className={classes.dateRange}>September 2015 ─ Present</Typography>
      <Typography className={classes.school}>UNSW</Typography>
    </div>
  )
}
