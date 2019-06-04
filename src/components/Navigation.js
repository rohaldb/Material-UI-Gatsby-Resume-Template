import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import MoreIcon from '@material-ui/icons/MoreVert'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  toolbar: {
    marginTop: '55px'
  },
  toolbarLink: {
    flexShrink: 0,
    fontSize: '13.75px',
    fontWeight: '500',
    padding: '20px'
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  mobileMenu: {
    backgroundColor: theme.palette.background.default
  },
  menuItem: {
    backgroundColor: theme.palette.background.default,
    padding: '0px 30px'
  }
}))

export default function Navigation () {
  const classes = useStyles()
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

  const sections = [
    'About',
    'Education',
    'Experience',
    'Skills',
    'Connect'
  ]

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

  function handleMobileMenuClose () {
    setMobileMoreAnchorEl(null)
  }

  function handleMobileMenuOpen (event) {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      classes={{list: classes.mobileMenu }}
    >
      {sections.map(section => (
        <Link
          color='inherit'
          noWrap
          variant='body2'
          key={section}
          className={classes.toolbarLink}
          href={`#${section}`}
          onClick={() => handleMobileMenuClose()}
    >
          <MenuItem className={classes.menuItem}>

            {section}
          </MenuItem>
        </Link>

    ))}
    </Menu>
  )

  return (
    <div className={classes.grow}>
      <Toolbar className={classes.toolbar}>
        <Typography
          variant='h1'
          color='inherit'
          noWrap
          className={classes.toolbarTitle}
      >
          Ben Rohald
        </Typography>
        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>
          {sections.map(section => (
            <Link
              color='inherit'
              noWrap
              key={section}
              variant='body2'
              className={classes.toolbarLink}
              href={`#${section}`}
              >
              {section}
            </Link>
            ))}
        </div>
        <div className={classes.sectionMobile}>
          <IconButton aria-haspopup='true' onClick={handleMobileMenuOpen} color='inherit'>
            <MoreIcon />
          </IconButton>
        </div>
      </Toolbar>
      {renderMobileMenu}
    </div>
  )
}
