import Header from "./Header";
import {loginAuth} from "./Auth";
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
        loginAuth(data.login__email, data.login__password)
            .then((res) => {
                if(res){
                    localStorage.setItem('jwt', res.token);
                    props.data({
                        email: data.login__email,
                        id: ''
                    })
                    props.navigate('../main', props.loggedIn(true));
                } else {
                    props.infoTooltipSuccess(false);
                    props.openInfoTooltip(true);
                }
            })
            .catch(err => {
                console.log(err);
            });
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