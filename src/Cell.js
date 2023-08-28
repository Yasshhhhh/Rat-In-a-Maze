import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: props => props.color, // Use the color prop to set the background color dynamically
    border: "2px solid black",
  },
}));

function Cell(props) 
{
  const classes = useStyles(props); // Pass the props to useStyles to access the color prop

  return (
    <Grid item sm={3}>
      <Paper className={classes.paper}>
        {props.children}
      </Paper>
    </Grid>
  );
}

export default Cell;
