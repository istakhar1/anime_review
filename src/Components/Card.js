import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import './Card.css';

export default function TitlebarImageList(props) {
  const { topanime, animelist } = props;
  let data = topanime;
  // console.log(animelist.length);
  if (animelist!==undefined && animelist.length !== 0) {
    data = animelist;
  }

  return (<>
      <h2 className="heading">Top Animes</h2>
    <ImageList className="imageList" cols={4} sx={{ width: 1300, height: 450 }}>
      {data.map((item) => (
        <ImageListItem className="imagelistitem" key={item.id}>
          <img
            src={`${item.cover_image}?w=248&fit=crop&auto=format`}
            srcSet={`${item.cover_image}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
            onClick={() => {
              props.createtemp({
                detail: item,
                flag: true
              });
            }}
          />
          <ImageListItemBar
           className="ImageListItemBar"
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 1)" }}
                aria-label={`info about ${item.title}`}
              >
                <span>{item.score}</span>
                <br />
                <span>{item.titles.en}</span>
                <br />
                {/* <h5>{item.descriptions.en}</h5> */}
                <span>{item.season_year}</span>
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
    </>
  );
}
