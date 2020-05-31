import React from "react";
import Grid from "@material-ui/core/Grid";
import Header from "./Header";
import Content from "./Content";

function App() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item sm={2} />
        <Grid container justify="center" item xs={12} sm={8}>
          <Content />
        </Grid>
        <Grid item sm={2} />
      </Grid>
      <Grid item container>
        {/* <Footer /> */}
      </Grid>
    </Grid>
  );
}

export default App;
