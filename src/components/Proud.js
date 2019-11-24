import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
// import { makeStyles } from '@material-ui/core/styles'

// const useStyles = makeStyles(theme => ({
// }))

export default function Proud (props) {
  return (
    <div>
      <Typography variant='h4'>
        <Link href={props.link} target='_blank' rel='noopener' color='inherit' >
          {props.title}
        </Link>
      </Typography>
      <Typography>{props.summary}</Typography>
    </div>
  )
}

Proud.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired
}
