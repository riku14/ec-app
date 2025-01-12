import React, { useCallback, useState } from 'react'
import {TextInput} from '../compornents/UIkit'
import PrimaryButton from '../compornents/UIkit/PrimaryButton';
import { signIn } from '../reducks/users/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const SignIn = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { error } = useSelector((state) => state.signIn);


  const [email, setEmail] = useState(""),
        [password, setPassword] = useState("");

  const inputEmail = useCallback((event) => {
    setEmail(event.target.value)
  }, [setEmail])

  const inputPassword = useCallback((event) => {
    setPassword(event.target.value)
  }, [setPassword])

  //APIリクエスト
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("メールアドレスが無効です");
      return;
    }
  
    dispatch(signIn({ email, password }))
        .unwrap()
        .then(() => {
            console.log("サインイン成功");
            navigate('/'); // 成功した場合のみ遷移
        })
        .catch((error) => {
            console.error("SignIn Error:", error);
            alert({error})
            // エラーがあれば、ログイン画面にエラーメッセージを表示する
        });
  };
  

  return (
    <div className='c-section-container'>
        <h2 className='u-u-text-center u-text__headline'>アカウント登録</h2>
        <div className="module-spacer--medium" />
        <form onSubmit={handleSubmit}>
          <TextInput
              fullWidth={true} label={"メールアドレス"} multiline={false} required={true} rows={1} value={email} type={"email"} onChange={inputEmail}
          />
          <TextInput
              fullWidth={true} label={"パスワード"} multiline={false} required={true} rows={1} value={password} type={"password"} onChange={inputPassword}
          />
          <div className='center'>
            <PrimaryButton 
              label={"ログイン"}
            />
          </div>
        </form>
        {error && <div className="error-message">{error}</div>} {/* エラーメッセージを表示 */}
    </div>
  )
}

export default SignIn