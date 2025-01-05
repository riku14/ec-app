import React, { useCallback, useState } from 'react'
import {TextInput} from '../compornents/UIkit'
import PrimaryButton from '../compornents/UIkit/PrimaryButton';
import { signUp } from '../reducks/users/operations';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [username, setUsername] = useState(""),
        [email, setEmail] = useState(""),
        [password, setPassword] = useState(""),
        [confirmPassword, setConfirmPassword] = useState("");

  // Todo（useCallback　メモ化　）
  const inputUsername = useCallback((event) => {
    setUsername(event.target.value)
  }, [setUsername])
  
  const inputEmail = useCallback((event) => {
    setEmail(event.target.value)
  }, [setEmail])

  const inputPassword = useCallback((event) => {
    setPassword(event.target.value)
  }, [setPassword])
  
  const inputConfirmPassword = useCallback((event) => {
    setConfirmPassword(event.target.value)
  }, [setConfirmPassword])

  //APIリクエスト
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (password !== confirmPassword) {
      alert("パスワードが一致しません");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("メールアドレスが無効です");
      return;
    }
  
    dispatch(signUp({username, email, password}))
      .then(() => {
        console.log("サインアップ成功");
        navigate('/');
      })
      .catch((error) => {
        console.error("SignUp Error:", error);
      });
  };
  

  return (
    <div className='c-section-container'>
        <h2 className='u-u-text-center u-text__headline'>アカウント登録</h2>
        <div className="module-spacer--medium" />
        <form onSubmit={handleSubmit}>
          <TextInput
              fullWidth={true} label={"ユーザー名"} multiline={false} required={true} rows={1} value={username} type={"text"} onChange={inputUsername}
          />
          <TextInput
              fullWidth={true} label={"メールアドレス"} multiline={false} required={true} rows={1} value={email} type={"email"} onChange={inputEmail}
          />
          <TextInput
              fullWidth={true} label={"パスワード"} multiline={false} required={true} rows={1} value={password} type={"password"} onChange={inputPassword}
          />
          <TextInput
              fullWidth={true} label={"パスワード（再確認）"} multiline={false} required={true} rows={1} value={confirmPassword} type={"password"} onChange={inputConfirmPassword}
          />
          <div className='center'>
            <PrimaryButton 
              label={"アカウント登録"}
            />
          </div>
        </form>
    </div>
  )
}

export default SignUp