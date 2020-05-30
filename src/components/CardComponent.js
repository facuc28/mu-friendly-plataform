import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import TimerIcon from "@material-ui/icons/Timer";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Grid from "@material-ui/core/Grid";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "100%",
    backgroundColor: "#bdc3c7"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: "transparent"
  }
}));

export default function CardComponent(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let card = {
    avatar: props.avatar ? (
      props.avatar
    ) : (
      <TimerIcon style={{ color: "black" }} fontSize="large" />
    ),
    title: props.title ? props.title : "Titulo Recompensa",
    timer: props.timer ? props.timer : "00:00:00",
    image: props.image
      ? props.image
      : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_muonline.jpg/800px-Logo_muonline.jpg",
    shortDescription: props.shortDescription
      ? props.shortDescription
      : "Descripcion de Evento/Recompensa"
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {card.avatar}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={card.title}
        subheader={card.timer}
      />
      <CardMedia
        className={classes.media}
        image={card.image}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {card.shortDescription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </Grid>
          <Grid item xs={8}>
            <Button
              style={{ marginTop: "7px" }}
              variant="contained"
              size="small"
              color="secondary"
            >
              Reclamar
            </Button>
          </Grid>
          <Grid item xs={2}>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </Grid>
        </Grid>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>Descripcion 1</Typography>
          <Typography paragraph>Descripcion 2</Typography>
          <Typography paragraph>Descripcion 3</Typography>
          <Typography>Descripcion 4</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
