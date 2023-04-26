import React from 'react'
import Button from "@mui/material/Button";
const Brassbutton = (props) => {
  return (
    <Button
    variant="contained"
    size="medium"
    style={{
      background: props.bck,
      color: props.color,
      textTransform:'none',
      padding: '14px 30px'
    }}
  >
    
    {props.text}
  </Button>
  )
}

export default Brassbutton
