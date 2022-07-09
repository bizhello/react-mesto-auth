import Header from "./Header";
import React, {useState} from 'react';

function Login(props) {

    const [data, setData] = useState({
        login__email: '',
        login__password: ''
    })
    const handleChange = (e) => {
        const {name, value} = e.target;
        setData((oldData) => ({
            ...oldData,
            [name]:value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        props.handelLogin(data.login__email, data.login__password);
    }

    return(
      <>
        <Header text="Регистрация" href="/sign-up" mail="" logout={false}/>
        <form className="login" id="login" onSubmit={handleSubmit}>
          <h3 className="login__title">Вход</h3>
          <label className="login__input-container" onChange={handleChange}>
            <input
              className="login__name login__email"
              id="login__email"
              name="login__email"
              type="email"
              placeholder="Email"
              required
            />
          </label>
          <label className="login__input-container" onChange={handleChange}>
            <input
              className="login__name login__password"
              id="login__password"
              name="login__password"
              type="password"
              placeholder="Пароль"
              required
            />
          </label>
          <button className="login__button" type="submit">Войти</button>
        </form>
      </>
    )
}

export default Login;