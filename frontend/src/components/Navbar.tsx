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
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import desktopLogo from "../assets/logos/logo-desktop.svg";
import mobileLogo from "../assets/logos/logo-mobile.svg";

const NAV_LINKS = [
  { label: "Início", to: "/" },
  {
    label: "Produtos",
    subMenu: [
      { label: "Visão Computacional", to: "/products/comp-vision" },
      { label: "Análise de Documentos", to: "/products/doc-analisys" },
    ],
  },
];

const Navbar: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [anchorElMain, setAnchorElMain] = useState<null | HTMLElement>(null);
  const handleMainMenuOpen = (e: MouseEvent<HTMLElement>) =>
    setAnchorElMain(e.currentTarget);
  const handleMainMenuClose = () => {
    setAnchorElMain(null);
    handleProductsMenuClose();
  };

  const [anchorElProducts, setAnchorElProducts] = useState<null | HTMLElement>(
    null
  );
  const handleProductsMenuOpen = (e: MouseEvent<HTMLElement>) =>
    setAnchorElProducts(e.currentTarget);
  const handleProductsMenuClose = () => setAnchorElProducts(null);

  return (
    <AppBar
      position="absolute"
      elevation={0}
      sx={{
        backgroundColor: "#ffffff",
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
              onClick={handleMainMenuOpen}
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
              anchorEl={anchorElMain}
              open={Boolean(anchorElMain)}
              onClose={handleMainMenuClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              PaperProps={{
                sx: {
                  backgroundColor: "#ffffff",   // fundo branco
                  boxShadow: "0px 4px 16px rgba(0,0,0,0.1)",
                  mt: 1,
                  borderRadius: 0,
                },
              }}
            >
              {NAV_LINKS.map((link) =>
                !link.subMenu ? (
                  <MenuItem
                    key={link.to}
                    component={NavLink}
                    to={link.to}
                    onClick={handleMainMenuClose}
                    sx={{
                      "&.active .MuiListItemText-primary": {
                        fontWeight: 800,
                        color: theme.palette.secondary.main,
                      },
                    }}
                  >
                    <ListItemText
                      primary={link.label}
                      sx={{
                        fontSize: "1.25rem",
                        fontWeight: 500,
                        color: theme.palette.primary.main,
                      }}
                    />
                  </MenuItem>
                ) : (
                  <React.Fragment key={link.label}>
                    <MenuItem
                      onClick={handleProductsMenuOpen}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <ListItemText
                        primary={link.label}
                        sx={{
                          fontSize: "1.25rem",
                          fontWeight: 500,
                          color: theme.palette.primary.main,
                        }}
                      />
                      <ArrowDropDownIcon
                        sx={{ color: theme.palette.primary.main, fontSize: 30 }}
                      />
                    </MenuItem>
                    {/* Submenu Produtos (mobile) */}
                    <Menu
                      anchorEl={anchorElProducts}
                      open={Boolean(anchorElProducts)}
                      onClose={handleProductsMenuClose}
                      anchorOrigin={{ vertical: "center", horizontal: "right" }}
                      transformOrigin={{
                        vertical: "center",
                        horizontal: "left",
                      }}
                      PaperProps={{
                        sx: {
                          backgroundColor: "#ffffff", // fundo branco
                          boxShadow: "0px 4px 16px rgba(0,0,0,0.1)",
                          borderRadius: 0,
                        },
                      }}
                    >
                      {link.subMenu.map((sub) => (
                        <MenuItem
                          key={sub.to}
                          component={NavLink}
                          to={sub.to}
                          onClick={() => {
                            handleProductsMenuClose();
                            handleMainMenuClose();
                          }}
                        >
                          <ListItemText
                            primary={sub.label}
                            sx={{
                              fontSize: "1.2rem",
                              fontWeight: 400,
                              color: theme.palette.primary.main,
                            }}
                          />
                        </MenuItem>
                      ))}
                    </Menu>
                  </React.Fragment>
                )
              )}
            </Menu>
          </>
        ) : (
          /* Desktop */
          <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
            {NAV_LINKS.map((link) =>
              !link.subMenu ? (
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
              ) : (
                <Box key={link.label}>
                  <Button
                    onClick={handleProductsMenuOpen}
                    sx={{
                      backgroundColor: "rgba(0,0,0,0.05)",
                      borderRadius: 0,
                      px: 1.5,
                      py: 0.5,
                      color: theme.palette.primary.main,
                      textTransform: "none",
                      fontWeight: 400,
                      fontSize: "1rem",
                      display: "flex",
                      alignItems: "center",
                      gap: 0.5,
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
                    <ArrowDropDownIcon
                      sx={{ color: theme.palette.primary.main, fontSize: 20 }}
                    />
                  </Button>
                  {/* Submenu Produtos (desktop) */}
                  <Menu
                    anchorEl={anchorElProducts}
                    open={Boolean(anchorElProducts)}
                    onClose={handleProductsMenuClose}
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                    transformOrigin={{ vertical: "top", horizontal: "left" }}
                    PaperProps={{
                      sx: {
                        backgroundColor: "#ffffff", // fundo branco
                        boxShadow: "0px 4px 16px rgba(0,0,0,0.1)",
                        borderRadius: 0,
                        mt: 0.5,
                      },
                    }}
                  >
                    {link.subMenu.map((sub) => (
                      <MenuItem
                        key={sub.to}
                        component={NavLink}
                        to={sub.to}
                        onClick={handleProductsMenuClose}
                      >
                        <ListItemText
                          primary={sub.label}
                          sx={{
                            fontSize: "1rem",
                            fontWeight: 400,
                            color: theme.palette.primary.main,
                          }}
                        />
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              )
            )}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default React.memo(Navbar);
