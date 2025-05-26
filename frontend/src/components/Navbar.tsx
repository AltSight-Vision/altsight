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
      { label: "Percepção de Profundidade", to: "/products/video-depth" },
      { label: "Segmentação de Imagens", to: "/products/image-seg" },
      { label: "Análise de Documentos", to: "/products/doc-analisys" },
    ],
  },
];

const Navbar: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Estado para o menu principal (mobile)
  const [anchorElMain, setAnchorElMain] = useState<null | HTMLElement>(null);
  const handleMainMenuOpen = (e: MouseEvent<HTMLElement>) => {
    setAnchorElMain(e.currentTarget);
  };
  const handleMainMenuClose = () => {
    setAnchorElMain(null);
    handleProductsMenuClose();
  };

  // Estado para o submenu "Produtos"
  const [anchorElProducts, setAnchorElProducts] = useState<null | HTMLElement>(null);
  const handleProductsMenuOpen = (e: MouseEvent<HTMLElement>) => {
    setAnchorElProducts(e.currentTarget);
  };
  const handleProductsMenuClose = () => {
    setAnchorElProducts(null);
  };

  return (
    <AppBar
      position="absolute"
      elevation={0}
      sx={{
        backgroundColor: "transparent",
        top: 0,
        left: 0,
        right: 0,
        zIndex: theme.zIndex.tooltip,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: isMobile ? 2 : 6 }}>
        {/* Logo responsivo (sem blur) */}
        {isMobile ? (
          <Box
            component={NavLink}
            to="/"
            sx={{
              display: "inline-flex",
              textDecoration: "none",
            }}
          >
            <Box
              component="img"
              src={mobileLogo}
              alt="AltSight"
              sx={{
                height: 32,
                width: "auto",
                filter: `invert(1)`,
              }}
            />
          </Box>
        ) : (
          <Box
            component={NavLink}
            to="/"
            sx={{
              display: "inline-flex",
              textDecoration: "none",
            }}
          >
            <Box
              component="img"
              src={desktopLogo}
              alt="AltSight"
              sx={{
                height: 90,
                width: "auto",
                filter: `invert(1)`,
              }}
            />
          </Box>
        )}

        {/* Mobile: ícone de menu que abre todos os links e submenus */}
        {isMobile ? (
          <>
            <IconButton
              edge="end"
              aria-label="menu"
              aria-controls="nav-menu"
              aria-haspopup="true"
              onClick={handleMainMenuOpen}
              sx={{
                color: theme.palette.primary.main,
                "&:hover": {
                  color: theme.palette.secondary.main,
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="nav-menu"
              anchorEl={anchorElMain}
              open={Boolean(anchorElMain)}
              onClose={handleMainMenuClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              PaperProps={{
                sx: {
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  mt: 1,
                },
              }}
            >
              {NAV_LINKS.map((link) => {
                if (!link.subMenu) {
                  // Link simples
                  return (
                    <MenuItem
                      key={link.to}
                      component={NavLink}
                      to={link.to}
                      onClick={handleMainMenuClose}
                      sx={{
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                        backdropFilter: "blur(4px)",
                        borderRadius: 1,
                        mx: 1,
                        my: 0.5,
                        "&.active .MuiListItemText-primary": {
                          fontWeight: 800,
                          color: theme.palette.secondary.main,
                        },
                        "&:hover": {
                          backgroundColor: "rgba(0, 0, 0, 0.4)",
                        },
                      }}
                    >
                      <ListItemText
                        primary={link.label}
                        sx={{
                          fontSize: "1.25rem",
                          fontWeight: 400,
                          color: theme.palette.primary.main,
                        }}
                      />
                    </MenuItem>
                  );
                } else {
                  // Link "Produtos" com submenu
                  return (
                    <React.Fragment key={link.label}>
                      <MenuItem
                        onClick={handleProductsMenuOpen}
                        sx={{
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          backdropFilter: "blur(4px)",
                          borderRadius: 1,
                          mx: 1,
                          my: 0.5,
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          "&:hover": {
                            backgroundColor: "rgba(0, 0, 0, 0.4)",
                          },
                        }}
                      >
                        <ListItemText
                          primary={link.label}
                          sx={{
                            fontSize: "1.25rem",
                            fontWeight: 400,
                            color: theme.palette.primary.main,
                          }}
                        />
                        <ArrowDropDownIcon sx={{ color: theme.palette.primary.main }} />
                      </MenuItem>

                      <Menu
                        id="products-submenu-mobile"
                        anchorEl={anchorElProducts}
                        open={Boolean(anchorElProducts)}
                        onClose={handleProductsMenuClose}
                        anchorOrigin={{ vertical: "center", horizontal: "right" }}
                        transformOrigin={{ vertical: "center", horizontal: "left" }}
                        PaperProps={{
                          sx: {
                            backgroundColor: "rgba(0, 0, 0, 0.3)",
                            backdropFilter: "blur(4px)",
                            boxShadow: "none",
                            mt: 0,
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
                            sx={{
                              backgroundColor: "transparent",
                              "&:hover": {
                                backgroundColor: "rgba(0, 0, 0, 0.4)",
                              },
                            }}
                          >
                            <ListItemText
                              primary={sub.label}
                              sx={{
                                fontSize: "1.1rem",
                                fontWeight: 400,
                                color: theme.palette.primary.main,
                              }}
                            />
                          </MenuItem>
                        ))}
                      </Menu>
                    </React.Fragment>
                  );
                }
              })}
            </Menu>
          </>
        ) : (
          /* Desktop: links e dropdown para "Produtos" */
          <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
            {NAV_LINKS.map((link) => {
              if (!link.subMenu) {
                // Link simples
                return (
                  <Button
                    key={link.to}
                    component={NavLink}
                    to={link.to}
                    sx={{
                      backgroundColor: "rgba(0, 0, 0, 0.3)",
                      backdropFilter: "blur(4px)",
                      borderRadius: 1,
                      px: 1.5,
                      py: 0.5,
                      color: theme.palette.primary.main,
                      textTransform: "none",
                      fontWeight: 400,
                      fontSize: "1.25rem",
                      "&.active": {
                        color: theme.palette.secondary.main,
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                      },
                      "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                        color: theme.palette.secondary.main,
                        transform: "translateY(-2px)",
                      },
                    }}
                  >
                    {link.label}
                  </Button>
                );
              } else {
                // Link "Produtos" com dropdown
                return (
                  <Box key={link.label}>
                    <Button
                      onClick={handleProductsMenuOpen}
                      sx={{
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                        backdropFilter: "blur(4px)",
                        borderRadius: 1,
                        px: 1.5,
                        py: 0.5,
                        color: theme.palette.primary.main,
                        textTransform: "none",
                        fontWeight: 400,
                        fontSize: "1.25rem",
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        "&.active": {
                          color: theme.palette.secondary.main,
                          backgroundColor: "rgba(0, 0, 0, 0.4)",
                        },
                        "&:hover": {
                          backgroundColor: "rgba(0, 0, 0, 0.4)",
                          color: theme.palette.secondary.main,
                          transform: "translateY(-2px)",
                        },
                      }}
                    >
                      {link.label}
                      <ArrowDropDownIcon sx={{ color: theme.palette.primary.main }} />
                    </Button>

                    <Menu
                      id="products-submenu-desktop"
                      anchorEl={anchorElProducts}
                      open={Boolean(anchorElProducts)}
                      onClose={handleProductsMenuClose}
                      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                      transformOrigin={{ vertical: "top", horizontal: "left" }}
                      PaperProps={{
                        sx: {
                          backgroundColor: "rgba(0, 0, 0, 0.3)",
                          backdropFilter: "blur(4px)",
                          boxShadow: "none",
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
                          sx={{
                            backgroundColor: "transparent",
                            "&:hover": {
                              backgroundColor: "rgba(0, 0, 0, 0.4)",
                            },
                          }}
                        >
                          <ListItemText
                            primary={sub.label}
                            sx={{
                              fontSize: "1.1rem",
                              fontWeight: 400,
                              color: theme.palette.primary.main,
                            }}
                          />
                        </MenuItem>
                      ))}
                    </Menu>
                  </Box>
                );
              }
            })}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default React.memo(Navbar);
