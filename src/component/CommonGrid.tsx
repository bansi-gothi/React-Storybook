import React from 'react';
import { Grid } from "@material-ui/core";
 
export interface CommonGridType {
    children?: React.ReactNode;
}

export const CommonGrid: React.FC<CommonGridType> = ({
   children,
    ...props
  }) => {
    return (
      <Grid container spacing={3} columns={3} xs={12}>
           {children}
      </Grid>
    );
}