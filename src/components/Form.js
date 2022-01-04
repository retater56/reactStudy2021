import React, { useState } from "react";
import {
  Container,
  TextField,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  Stack,
  FormControlLabel,
  Checkbox,
  Switch,
  Button,
} from "@mui/material";
import Card from './Card'

const formStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  padding: "30px",
  height: "60vh",
  border: "1px solid black",
  borderRadius: "10px",
  boxShadow: "0px 5px 20px 0px rgba(34, 60, 80, 0.35)",
};

const Form = () => {
  const [state, setState] = useState([])
  const [count, setCount] = useState(0)
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [country, setCountry] = useState("Canada");
  const [robot, setRobot] = useState(false);
  const [notifications, setNotifications] = useState(true);

  const handleChangeName = (event) => {
    setName(event.target.value);
    document.querySelector('#outlined-basic').style.backgroundColor = '';
  };
  const handleChangeBirthday = (event) => {
    setBirthday(event.target.value);
    document.querySelector('#date').style.backgroundColor = '';
  };
  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };
  const handleChangeRobot = () => {
    setRobot(!robot);
    document.querySelector('#robot').style.color = ''
  };
  const handleChangeNotifications = () => {
    setNotifications(!notifications);
  };

  const handleSubmit = () => {
    if (name === '') {
      document.querySelector('#outlined-basic').style.backgroundColor = '#ffe50073';
    }
    if (birthday === '') {
      document.querySelector('#date').style.backgroundColor = '#ffe50073';
    }
    if (robot === false) {
      document.querySelector('#robot').style.color = '#ff0000'
    }

    if (name && birthday && robot) {
      setCount(prevState => prevState + 1)
      setState(prevState => [{
        "name": name,
        "birthday": birthday,
        "country": country,
        "notifications": String(notifications),
        "id": count
      }, ...prevState
      ])
      setName('');
      setBirthday('')
      setRobot(!robot);
      document.querySelector('#date').value = ''
    }
  }

  return (
    <>
    <Container maxWidth="sm" style={formStyle}>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        value={name}
        onChange={handleChangeName}
      />
      <Stack component="form" spacing={3}>
        <TextField
          id="date"
          label="Birthday"
          type="date"
          sx={{ minWidth: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={handleChangeBirthday}
        />
      </Stack>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={country}
          label="Country"
          onChange={handleChangeCountry}
        >
          <MenuItem value={"Canada"}>Canada</MenuItem>
          <MenuItem value={"Japan"}>Japan</MenuItem>
          <MenuItem value={"Germany"}>Germany</MenuItem>
          <MenuItem value={"Switzerland"}>Switzerland</MenuItem>
          <MenuItem value={"Australia"}>Australia</MenuItem>
          <MenuItem value={"United States"}>United States</MenuItem>
          <MenuItem value={"New Zealand"}>New Zealand</MenuItem>
          <MenuItem value={"United Kingdom"}>United Kingdom</MenuItem>
          <MenuItem value={"Sweden"}>Sweden</MenuItem>
          <MenuItem value={"Netherlands"}>Netherlands</MenuItem>
        </Select>
      </FormControl>
      <FormControlLabel
        id = "robot"
        control={<Checkbox />}
        label="I am not robot"
        checked = {robot}
        onClick={handleChangeRobot}
      />
      <FormControlLabel
        control={<Switch />}
        label="Receive notifications"
        checked = {notifications}
        onClick={handleChangeNotifications}
      />
      <Button
        variant="contained"
        size="medium"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Container>
    <Container maxWidth="sm">
      {state.length != 0 && state.map(card => <Card item = {card} key = {card.id}/>) }
    </Container>
    </>
  );
};

export default Form;
