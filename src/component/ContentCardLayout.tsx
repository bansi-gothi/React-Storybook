import React from 'react';
import { CardContent, Typography } from '@material-ui/core';

export const ContentCardLayout = () => {
  return (
    <React.Fragment>
      <CardContent>
        <Typography variant="h5" component="div">
          Lizard
        </Typography>
      </CardContent>
    </React.Fragment>
  );
}
