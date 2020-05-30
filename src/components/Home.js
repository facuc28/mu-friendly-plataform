import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Card from "./CardComponent";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    background: "transparent"
  },
  paper1: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "100px",
    backgroundImage:
      'url("https://scontent.fcor5-1.fna.fbcdn.net/v/t31.0-8/24059420_1097798257028328_5720340315645472661_o.jpg?_nc_cat=102&_nc_sid=cdbe9c&_nc_eui2=AeHeu7-LP0dl6fetwhRTTNMEV1yOh--HHdVXXI6H74cd1WOGDujAtE2nHUIfQBWsWjcfzi8n8L3myRHsg-GvX0ml&_nc_ohc=pQNWFGliPp4AX-5z2Jj&_nc_ht=scontent.fcor5-1.fna&oh=8d690ab22129395d7110386da4073f84&oe=5EF5D41C")'
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.root} spacing={2}>
        <Grid item container xs={12}>
          <Grid item xs={0} sm={2} />
          <Grid item xs={12} sm={9}>
            <Paper className={classes.paper1}>xs=12</Paper>
          </Grid>
          <Grid item sm={2} xs={0} />
        </Grid>
        <Grid item sm={4} xs={12}>
          <Paper className={classes.paper}>
            <Card />
          </Paper>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Paper className={classes.paper}>
            <Card />
          </Paper>
        </Grid>
        <Grid item sm={4} xs={12}>
          <Paper className={classes.paper}>
            <Card />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
