import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  title: {
    color: '#222228',
    margin: '0px'
  }
}))

export default function Skill (props) {
  const classes = useStyles()

  return (
    <div>
      <Typography className={classes.title}>{props.title}</Typography>
      {props.summary !== null ?
        <Typography>{props.summary}</Typography>
        :
        null
      }
    </div>
  )
}

Skill.propTypes = {
  title: PropTypes.string.isRequired,
  summary: PropTypes.string
}
