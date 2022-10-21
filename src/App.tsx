import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box } from '@mui/material';
import { Palette }  from './Theme/palette'
import {MyInfo} from "./Componets/MyInfo"

function App() {
  return (
   <Box sx={{backgroundColor: Palette.primary.main, height:"100vh" }}>
      <MyInfo  />
   </Box>
  );
}

export default App;
