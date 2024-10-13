import React from 'react';
import './Login.css';
import App from '../../App';

function Login(){
    return (
        <div className="login-container">
          <div className="login-box">
            <h2>Вхід</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Ім'я</label>
                <input
                  name="name"
                  className="form-control"
                 
                  placeholder="Введіть ваше ім'я"
                />
                
              </div>
    
              <div className="form-group">
                <label htmlFor="password">Пароль</label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  
                  placeholder="Введіть ваш пароль"
                />
                
              </div>
    
              <div className="form-group">
                <button type="submit" className="btn-login">Увійти</button>
              </div>
            </form>
    
            <div className="signup-link">
              <p>Відсутній акаунт? <a>Реєстрація</a></p>
            </div>
          </div>
        </div>
      );
}
export default Login;