import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signIn } from '../reducks/users/signInSlice'

const Login = () => {
    const navigate = useNavigate()
    const selecter = useSelector(state => state)
    const dispatch = useDispatch()

    console.log(selecter.users)
  return (
    <div>
        <h2>ログイン</h2>
        <button onClick={() => {
            dispatch(signIn({uid: "00001", username: "yamashita"}))
            navigate('/')}}>
            ログイン
        </button>
    </div>
  )
}

export default Login