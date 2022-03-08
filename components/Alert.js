import {Error} from '../styles/Error';

const Alert = (props) => {
    
  const isHidden = props.isHidden;

  if (isHidden == 1) {
    return <Error hidden></Error>;
  } else if (isHidden == 2) {
    return <Error>Введите имя и пароль!</Error>
  } else if (isHidden == 3) {
    return <Error>Пользователь с таким именем уже существует!</Error>
  }
}

export {Alert}
