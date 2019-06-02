import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  dateRange: {
    marginBottom: '8px',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '11.75px'
  }
}))

export default function Experience (props) {
  const classes = useStyles()

  return (
    <div>
      <Typography variant='h4'>{props.title}</Typography>
      <Typography className={classes.dateRange}>{props.dateRange}</Typography>
      <Typography>{props.summary}</Typography>
    </div>
  )
}

Experience.propTypes = {
  title: PropTypes.string.isRequired,
  dateRange: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired
}
