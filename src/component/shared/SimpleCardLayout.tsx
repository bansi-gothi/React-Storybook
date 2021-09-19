import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

export const SimpleCardLayout = () => {
  return (
    <React.Fragment>
      <Grid item>
        <Card style={{ backgroundColor: "pink", marginLeft: "10px", marginRight: "10px" }}>
          <CardContent>
            <Typography variant="h5" component="div" >
              <img style={{ height: "100px" }} src="https://images.unsplash.com/photo-1631702926488-7db7e82b9049?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" />
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </React.Fragment>
  );
}
