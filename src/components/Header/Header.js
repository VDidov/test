import React from "react";
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./style";
const Header = () => {
  const classes = useStyles();

  return (
    <header>
      <Box className={classes.topHeader}>
        <Typography component={"p"}>Test App</Typography>
      </Box>
    </header>
  );
};

export default Header;
