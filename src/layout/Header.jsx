import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Link as RouterLink } from 'react-router-dom'

export default function Header() {
  const [open, setOpen] = React.useState(false)

  const navItems = [
    { title: 'Home', to: '/' },
    { title: 'Services', to: '/services' },
    { title: 'Portfolio', to: '/portfolio' },
    // { title: 'Team', to: '/team' },
    { title: 'About', to: '/about' },
    { title: 'Contact', to: '/contact' },
  ];

  return (
    <>
      {/* sticky AppBar to remain visible on scroll */}
      <AppBar position="sticky" color="primary" elevation={3} sx={{ top: 0 }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Logo for Desktop */}
            <Typography
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{
                color: 'inherit',
                textDecoration: 'none',
                fontWeight: 700,
                letterSpacing: '.1rem',
                display: { xs: 'none', md: 'flex' },
                mr: 4,
              }}
            >
              Linkific
            </Typography>

            {/* Mobile Menu Icon */}
            <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1 }}>
              <Typography
                variant="h6"
                component={RouterLink}
                to="/"
                sx={{
                  flexGrow: 1,
                  color: 'inherit',
                  textDecoration: 'none',
                  fontWeight: 700,
                }}
              >
                Linkific
              </Typography>

              <IconButton color="inherit" onClick={() => setOpen(true)}>
                <MenuIcon />
              </IconButton>
            </Box>

            {/* Desktop Nav Items */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                flexGrow: 1,
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.title}
                  component={RouterLink}
                  to={item.to}
                  sx={{
                    color: 'white',
                    textTransform: 'none',
                    fontSize: '1rem',
                    mx: 1,
                  }}
                >
                  {item.title}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250 }} role="presentation">
          <List>
            {navItems.map((item) => (
              <ListItem key={item.title} disablePadding>
                <ListItemButton
                  component={RouterLink}
                  to={item.to}
                  onClick={() => setOpen(false)}
                >
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
