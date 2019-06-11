import React from 'react'
import PropTypes from 'prop-types'
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
      <Typography variant='h4' className={classes.degree}>{props.degree}</Typography>
      <Typography className={classes.dateRange}>{props.dateRange}</Typography>
      <Typography className={classes.school}>{props.school}</Typography>
    </div>
  )
}

Education.propTypes = {
  school: PropTypes.string.isRequired,
  dateRange: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired
}

