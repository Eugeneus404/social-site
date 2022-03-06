import Link from 'next/link';
import { useState } from 'react';
import {LoginForm, Welcome, Input, FlexBox} from '../styles/Login';
import {ButtonContainer, Button, ButtonContent} from '../styles/Button';

const Form = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    if (name == '' || password == '') {
       return;
    }
   e.preventDefault();
   const data = {
     name,
     password,
   };

   fetch('/api/formData', {
     method: 'post',
     body: JSON.stringify(data),
   })
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
      </FlexBox>
    </LoginForm>
  )
}

export {Form}
