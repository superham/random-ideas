import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainFeaturedPost from "../post/mainFeaturedPost/MainFeaturedPost";
import theme from "../../theme";
import Header from "../Header/Header";

const sections = [{ title: "by alex kaariainen", url: "#" }];

const defaultTheme = createTheme();

export default function DarwinPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Darwin" sections={sections} />
      </Container>
    </ThemeProvider>
  );
}
