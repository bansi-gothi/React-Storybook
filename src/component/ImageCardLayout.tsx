import React from "react";
import { CardMedia } from "@material-ui/core";

export interface ImageCardType {
  imageSrc: string;
  imageAlt: string;
}

export const ImageCardLayout = ({ imageSrc, imageAlt }: ImageCardType) => {
  return (
    <React.Fragment>
      <CardMedia
        component="img"
        height="100px"
        image={imageSrc}
        alt={imageAlt}
      />
    </React.Fragment>
  );
};
