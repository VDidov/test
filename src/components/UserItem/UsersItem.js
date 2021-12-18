import * as React from "react";
import { Typography, CardContent, Card } from "@material-ui/core";

const BasicCard = ({ name, lastName, age, sex }) => {
  return (
    <Card sx={{ minWidth: 275 }} style={{ marginRight: "45px" }}>
      <CardContent>
        <Typography>Name:{name}</Typography>
        <Typography>lastName:{lastName}</Typography>
        <Typography>Age: {age}</Typography>
        <Typography>Sex:{sex}</Typography>
      </CardContent>
    </Card>
  );
};

export default BasicCard;
