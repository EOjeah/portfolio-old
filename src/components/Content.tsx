import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import logo_1 from "../logo_512.png";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    media: {
      height: "0",
      width: "56%",
      paddingTop: "46.25%",
    },
  })
);

const Content = (): React.ReactElement => {
  const classes = useStyles();
  return (
    <>
      <CardMedia className={classes.media} image={logo_1} title="EO logo" />
      <CardContent>
        <Typography variant="h5" component="p">
          Hi, I'm Emmanuel Ojeah, DevOps Engineer with experience with
          ElasticSearch, Docker, AWS, Jenkins and Chef. Programming languages
          and other technologies I use include JavaScript, Python, React and
          Django :)
        </Typography>
      </CardContent>
    </>
  );
};

export default Content;
