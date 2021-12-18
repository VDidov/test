import React, { useState, useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import {
  Container,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { useStyles } from "./style";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [name, setName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [age, setAge] = useState(null);
  const [sex, setSex] = useState({
    m: false,
    f: false,
  });
  const { filterUsersList } = useActions();

  const usersList = useSelector((state) => state.usersList.usersList);

  const classes = useStyles();

  useEffect(() => {
    filterUsersList(usersList, name, lastName, age, sex);
  }, [name, lastName, age, sex]);

  const getSexValues = (e) => {
    setSex({ ...sex, [e.target.value]: e.target.checked });
  };

  return (
    <Container className={classes.textFieldWrapper}>
      <TextField
        id="outlined-basic"
        label={"name"}
        variant="outlined"
        size="small"
        className={classes.TextField}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label={"lastName"}
        variant="outlined"
        size="small"
        className={classes.TextField}
        onChange={(e) => setLastName(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label={"age"}
        variant="outlined"
        size="small"
        className={classes.TextField}
        onChange={(e) => setAge(e.target.value)}
      />
      <FormGroup className={classes.checkboxWrapper}>
        <FormControlLabel
          value="m"
          control={
            <Checkbox onClick={getSexValues} className={classes.ckeckBox} />
          }
          label="m"
        />
        <FormControlLabel
          value="f"
          control={
            <Checkbox onClick={getSexValues} className={classes.ckeckBox} />
          }
          label="f"
        />
      </FormGroup>
    </Container>
  );
};

export default Navbar;
