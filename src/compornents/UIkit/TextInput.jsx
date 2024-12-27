import React from 'react'
import TextField from '@mui/material/TextField'

const TextInput = (props) => {
  return (
    <TextField 
        fullWidth={props.fullWidth} //画面の幅を、100％に、する or しない
        label={props.label}
        margin='dense'
        multiline={props.multiline}
        repuired={props.repuired}
        rows={props.rows}
        value={props.value}
        type={props.type}
        onChange={props.onChange}
    />
  )
}

export default TextInput