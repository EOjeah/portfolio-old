import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton";
import logo_1 from "../logo_1_2.svg";
import Link from "@material-ui/core/Link";
import { grey } from "@material-ui/core/colors";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
  typographyStles: {
    flex: 1,
  },
}));

const Header = (): React.ReactElement => {
  const classes = useStyles();
  return (
    <AppBar elevation={1} color="default" position="static">
      <Toolbar>
        {/* <IconButton style={{ color: grey[50] }} edge="start" aria-label="home">
          <Link href="#">
            <img
              alt="Emmanuel Ojeah logo"
              src={logo_1}
              width="48"
              height="48"
            />
          </Link>
        </IconButton> */}
        <Typography
          className={classes.typographyStles}
          variant="h5"
        ></Typography>
        <IconButton href="https://github.com/eojeah">
          <GitHubIcon
            style={{
              color: grey[900],
              fontSize: 36,
            }}
            aria-label="GitHub Repository"
          />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/emmanuel-ojeah-bb3a87a5/">
          <LinkedInIcon
            style={{
              color: grey[900],
              fontSize: 40,
            }}
            color="action"
            aria-label="LinkedIn icon"
          />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
