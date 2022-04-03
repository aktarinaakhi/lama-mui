import React from 'react'
import { Button, makeStyles } from "@material-ui/core";
import { Person } from "@mui/icons-material";
import Navbar from './components/Navbar';


const useStyles = makeStyles((theme) => ({
  botton: {
    color: 'white',
    backgroundColor: 'black'
  }
}))

const App = () => {

  const classes = useStyles();
  return (
    <div>
      <Navbar></Navbar>
      {/* <Button variant="contained"
        size="large"
        startIcon={<Person />}
        className={classes.botton}
      >

        Materail ui
      </Button> */}
    </div>
  );
}

export default App;
