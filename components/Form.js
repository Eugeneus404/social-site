import Link from 'next/link';
import { useState } from 'react';
import Router from 'next/router';
import {LoginForm, Welcome, Input, FlexBox} from '../styles/Login';
import {ButtonContainer, Button, ButtonContent} from '../styles/Button';
import {Alert} from './Alert'

const Form = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [state, setState] = useState(1);

  const handleSubmit = async (e) => {
    if (name == '' || password == '') {
      setState(2);
      setTimeout(() => setState(1), 1600)
      return;
    }

   e.preventDefault();

   const data = {
     name,
     password,
   };

   const users = await fetch('/api/allUsers', {
     method: 'post',
     body: JSON.stringify(data)
   });
     if (users.status === 202) {
       setState(3);
       setTimeout(() => setState(1), 1600)
       return;
     }

   const helloUser = await fetch('/api/newUser', {
     method: 'post',
     body: JSON.stringify(data),
   })

   if (helloUser.status === 200) {
     const username = data.name;
     Router.push('/profile');
   }
 };
 

  return (
    <LoginForm>
      <Welcome>
        <h1>Регистарция</h1>
      </Welcome>
      <FlexBox>
        <Input id="username" placeholder='Ваше имя' type='text' onChange={e => setName(e.target.value)}/>
      </FlexBox>
      <FlexBox>
        <Input id="password" placeholder='Пароль' type='password' onChange={e => setPassword(e.target.value)}/>
      </FlexBox>
      <FlexBox>
        <Button onClick={handleSubmit}><ButtonContent>Создать!</ButtonContent></Button>
        <Alert isHidden={state}/>
      </FlexBox>
    </LoginForm>
  )
}

export {Form}
