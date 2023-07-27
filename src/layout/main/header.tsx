import { useOffSetTop } from "@/hooks/use-off-set-top";
import { useResponsive } from "@/hooks/use-reponsive";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { HEADER } from "../config-layout";
import { bgBlur } from "@/theme/css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Badge, { badgeClasses } from "@mui/material/Badge";
import Link from "@mui/material/Link";

export default function Header() {
  const theme = useTheme();
  const mdUp = useResponsive("up", "md");

  const offsetTop = useOffSetTop(HEADER.H_DESKTOP);

  console.log("offsetTop", offsetTop);

  return (
    // https://mui.com/material-ui/react-app-bar/
    <AppBar>
      {/*  Toolbar: thanh ngang*/}
      <Toolbar
        // disableGutters: vo hieu css mac dinh
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create("height", {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(offsetTop && {
            ...bgBlur({
              color: theme.palette.background.default,
            }),
            height: {
              md: HEADER.H_DESKTOP_OFFSET,
            },
          }),
        }}
      >
        <Container sx={{ height: 1, display: "flex", alignItems: "center" }}>
          <Badge
            badgeContent={
              <Link
                // href={paths.changelog}
                target="_blank"
                rel="noopener"
                underline="none"
                sx={{ ml: 1, color: theme.palette.primary.contrastText }}
              >
                {/* <Label color="info" sx={{ textTransform: 'unset', height: 22, px: 0.5 }}>
                  v5.3.0
                </Label> */}
                v5.3.0
              </Link>
            }
            sx={{
              // click vao badgeClasses se hieu
              [`& .${badgeClasses.badge}`]: {
                top: 8,
                right: -16,
              },
            }}
          >
            logo
          </Badge>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
