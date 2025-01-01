import React from 'react'
import Button from '@mui/material/Button'

const PrimaryButton = (props) => {
    return (
      <Button
        variant="contained"
        onClick={props.onClick}
        sx={{
          backgroundColor: '#4dd0e1',
          color: '#000',
          fontSize: 16,
          height: 48,
          marginBottom: 16,
          width: 256,
          "&:hover": {
            backgroundColor: 'primary.light',
          },
        }}
      >
        {props.label}
      </Button>
    );
  };
export default PrimaryButton