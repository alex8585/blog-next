import React from "react"

import Grid from "@material-ui/core/Grid"

import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/styles"

import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"

import ListItemText from "@material-ui/core/ListItemText"

import ButtonBase from "@material-ui/core/ButtonBase"
import Avatar from "@material-ui/core/Avatar"
import Container from "@material-ui/core/Container"
import FrontendLayout from "../components/FrontendLayout"
import Head from "next/head"
import { getImgUrl } from "../utils/utils"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: "960px",
    margin: "0 auto",
    marginTop: 50,
  },
  paper: {
    padding: "12px",
    marginTop: 20,
    maxWidth: 960,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  large: {
    width: "120px",
    height: "120px",
  },
  heroContent: {
    padding: "20px 0px 5px",
  },
  ListItemText: {
    "& .MuiTypography-body2": {
      fontWeight: "bold",
    },
  },
}))


type Props = {
    match: any,
    location:any,
    history:any,
    staticTags:any,
}
import { NextPage } from 'next/types';


const About: NextPage<Props> = ({ match, location, history }) => {
  const classes = useStyles()

  return (
    <FrontendLayout>
        <div>
      <Head>
        <title>About me</title>
        <meta name="description" content="About alex 85 page with contacts" />
      </Head>
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          About me
        </Typography>
      </Container>
      <Container maxWidth="md" component="main" className={classes.heroContent}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <Avatar
                className={classes.large}
                alt="Remy Sharp"
                src={getImgUrl("thumbnail_profile_acc7f1cf03.jpg")!}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Hi, there! I am a Full Stack Web Developer from Ukraine with
                  over 7+ years of experience in software development and
                  maintenance.
                </Typography>
                <Typography gutterBottom variant="subtitle1">
                  Now I work with these technologies:
                </Typography>
                <List dense={true} className={classes.ListItemText}>
                  <ListItem>
                    <ListItemText primary="- PHP / Laravel / WordPress" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="- JS / React.js / Vue.js" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="- MySQL / MogngoDB" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="- Linux / Windows" />
                  </ListItem>
                </List>

                <div>
                  <List dense={true}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar
                          src={getImgUrl("thumbnail_gmail3_29ef9d63b6.png")!}
                        ></Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="blyakher85@gmail.com" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar
                          src={getImgUrl("thumbnail_telegram2_407376bdb8.png")!}
                        ></Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="@cumar85" />
                    </ListItem>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar
                          src={getImgUrl("thumbnail_skype2_bd6195992e.png")!}
                        ></Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="cumar8585" />
                    </ListItem>
                  </List>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
  </div>
    </FrontendLayout>
  )
}

export default About
