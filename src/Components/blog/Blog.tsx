import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainFeaturedPost from "../post/mainFeaturedPost/MainFeaturedPost";
import FeaturedPost from "../post/featuredPost/FeaturedPost";
import Main from "./Main";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import post1 from "../../content/blog-post.1.md";
import post2 from "../../content/blog-post.2.md";
import post3 from "../../content/blog-post.3.md";
import theme from "../../theme";
import paintImg from "../../content/paint.png";
import hmi from "../../content/hmi.jpg";
import int from "../../content/int.png";
import darwin from "../../content/darwin.png";
import overtones from "../../content/overtones.png";

const sections = [{ title: "by alex kaariainen", url: "#" }];

const mainFeaturedPost = {
  title: "Overtones, Harmonics, and Fundamental Frequencies",
  description:
    "(a lot of this is an oversimplification but all you really need to care about is the open high e string spectrogram showing a bunch of different frequencies and our ability to isolate the harmonic frequencies which can be seen in the other plots)",
  image: overtones,
  imageText: "main image description",
  linkText: "Continue reading…",
};

const featuredPosts = [
  {
    title: "paint",
    date: "Fall, 2018",
    description: "An image manipulation program developed for MacOS.",
    image: paintImg,
    imageLabel: "Image Text",
  },
  {
    title:
      "Recreating the prism adaptation paradigm in an immersive virtual environment",
    date: "Spring, 2020",
    description: "Research.",
    image: hmi,
    imageLabel: "Image Text",
  },
  {
    title: "Arithmetic Coding - Integer Implementation",
    date: "Fall, 2020",
    description: "Research.",
    image: int,
    imageLabel: "Image Text",
  },
  {
    title: "Darwin's Playground",
    date: "Fall, 2020",
    description:
      "Darwin's Playground is an arcade-style RTS game, inspired by the mechanics of other games such as Sid Meier's Civilization, Plague Inc., Spore, and Settlers of Catan. Made with Dusten Knull and Ellis Archuleta",
    image: darwin,
    imageLabel: "Image Text",
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: "About",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  archives: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 1999", url: "#" },
    { title: "October 1999", url: "#" },
    { title: "September 1999", url: "#" },
    { title: "August 1999", url: "#" },
    { title: "July 1999", url: "#" },
    { title: "June 1999", url: "#" },
    { title: "May 1999", url: "#" },
    { title: "April 1999", url: "#" },
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="random ideas" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            {/* <Main title="From the firehose" posts={posts} /> */}
            {/* <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            /> */}
          </Grid>
        </main>
      </Container>
      <Footer title="Footer" description="I just think this stuff is neat" />
    </ThemeProvider>
  );
}
