import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  skill: {
    color: '#222228',
    margin: '0px'
  }
}))

export default function Skill (props) {
  const classes = useStyles()

  return (
    <div>
      <Typography className={classes.skill}>Algorithms</Typography>
      <Typography>Skill description - this will be an optional explanation of the skill</Typography>
    </div>
  )
}
