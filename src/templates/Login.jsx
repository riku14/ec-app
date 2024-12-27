import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signIn } from '../reducks/users/operations'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const selecter = useSelector(state => state)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    console.log(selecter.users)
  return (
    <div>
        <h2>ログイン</h2>
        <button onClick={() => {
            dispatch(signIn()).then(() => {
              navigate('/')})}}>
            ログイン
        </button>
    </div>
  )
}

export default Login