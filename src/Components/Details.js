import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import {useState} from 'react';
import "./Details.css";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest
  })
}));

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+"
};

export default function RecipeReviewCard(props) {
  const { detail } = props;
  const [review , setReview]=useState("");
  const [dd , setdd]=useState(false);
  // console.log(detail)
  const {
    cover_image,
    titles,
    descriptions,
    score,
    season_year,
    episodes_count
  } = detail;
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  let msg=""

  return (
    <Card className="Card" sx={{ maxWidth: 900, height: 400, display: "flex" }}>
      <CardMedia
        className="cardmedial"
        component="img"
        height="300"
        width="300"
        image={cover_image}
        alt="Paella dish"
      />
      <CardContent className="cardcontent">
        <h2>{titles.en}</h2>
        <Typography variant="body2" color="text.secondary">
          {descriptions.en.slice(0, 300)}
        </Typography>
        <h4>Rating :{score}</h4>
        <h4>Session Year :{season_year}</h4>
        <h4>Number of Episode:{episodes_count}</h4>
        <Box
          sx={{
            width: 200,
            display: "flex",
            alignItems: "center"
          }}
        >
          <Rating
            name="hover-feedback"
            value={value}
            precision={0.5}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            emptyIcon={
              <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
            }
          />
          {value !== null && (
            <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
          )}
        </Box>
        <span>{dd?review:null}</span>
        <input type="text" placeholder="write review" onChange={(e)=>{
            console.log(e.target.value);
            setReview( e.target.value)
        }} />
        <button onClick={()=>{
          setdd(true)
        }}>Add review</button>
      </CardContent>

      <CardActions disableSpacing></CardActions>
      
    </Card>
  );
}
