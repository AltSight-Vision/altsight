// src/components/Navbar.tsx
import React, { FC, useState, MouseEvent } from "react";
import { NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  useTheme,
  useMediaQuery,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import desktopLogo from "../assets/logos/logo-desktop.svg";
import mobileLogo from "../assets/logos/logo-mobile.svg";

const NAV_LINKS = [
  { label: "Início", to: "/" },
  { label: "Visão Computacional", to: "/products/comp-vision" },
  { label: "Análise de Documentos", to: "/products/doc-analisys" },
];

const Navbar: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleMenuOpen = (e: MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <AppBar
      elevation={0}
      sx={{
        backgroundColor: "#222831",
        borderRadius: 0,
        top: 0,
        left: 0,
        right: 0,
        zIndex: theme.zIndex.tooltip,
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          px: isMobile ? 2 : 6,
          py: isMobile ? 1 : 1,
          minHeight: isMobile ? 56 : 64,
        }}
      >
        {/* Logo responsivo */}
        <Box
          component={NavLink}
          to="/"
          sx={{ display: "inline-flex", textDecoration: "none" }}
        >
          <Box
            component="img"
            src={isMobile ? mobileLogo : desktopLogo}
            alt="AltSight"
            sx={{
              height: isMobile ? 32 : 48,
              width: "auto",
            }}
          />
        </Box>

        {isMobile ? (
          <>
            <IconButton
              edge="end"
              aria-label="menu"
              onClick={handleMenuOpen}
              sx={{
                color: theme.palette.primary.main,
                "& svg": { fontSize: 30 },
                "&:hover": { color: theme.palette.secondary.main },
              }}
            >
              <MenuIcon />
            </IconButton>

            {/* Menu principal (mobile) */}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              PaperProps={{
                sx: {
                  backgroundColor: "#222831",
                  boxShadow: "0px 4px 16px rgba(0,0,0,0.1)",
                  mt: 1,
                  borderRadius: 0,
                },
              }}
            >
              {NAV_LINKS.map((link) => (
                <MenuItem
                  key={link.to}
                  component={NavLink}
                  to={link.to}
                  onClick={handleMenuClose}
                  sx={{
                    color: theme.palette.primary.main,
                    "&.active": {
                      fontWeight: 700,
                      color: theme.palette.secondary.main,
                    },
                  }}
                >
                  {link.label}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          /* Desktop */
          <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
            {NAV_LINKS.map((link) => (
              <Button
                key={link.to}
                component={NavLink}
                to={link.to}
                sx={{
                  backgroundColor: "rgba(0,0,0,0.05)",
                  borderRadius: 0,
                  px: 1.5,
                  py: 0.5,
                  color: theme.palette.primary.main,
                  textTransform: "none",
                  fontWeight: 400,
                  fontSize: "1rem",
                  "&.active": {
                    color: theme.palette.secondary.main,
                    backgroundColor: "rgba(0,0,0,0.1)",
                  },
                  "&:hover": {
                    backgroundColor: "rgba(0,0,0,0.1)",
                    color: theme.palette.secondary.main,
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default React.memo(Navbar);
