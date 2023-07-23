import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { styled } from "@mui/system";

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

const ShadowText = styled("span")({
  textShadowColor: "rgba(0, 170, 0, 1)",
  textShadowOffset: { width: -1, height: 1 },
  textShadowRadius: 10,
});

export default function Header(props: HeaderProps) {
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Typography
          component="h1"
          variant="h4"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
        <Typography
          component="h2"
          variant="subtitle1"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {"by alex kaariainen"}
        </Typography>
      </Toolbar>
    </React.Fragment>
  );
}
