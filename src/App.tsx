import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './components/Home';

interface LoginForm {
  email: string;
  password: string;
}

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [formData, setFormData] = useState<LoginForm>({
    email: '',
    password: ''
  });
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated');
    if (auth) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Credenciales temporales
    if (formData.email === 'admin' && formData.password === 'admin') {
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', 'true');
      setError('');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  const handleForgotPassword = (e: React.MouseEvent) => {
    e.preventDefault();
    alert('Función de recuperación de contraseña en desarrollo');
  };

  const handleRegister = (e: React.MouseEvent) => {
    e.preventDefault();
    alert('Función de registro en desarrollo');
  };

  if (isAuthenticated) {
    return <Home />;
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Usuario</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-button">
            Iniciar Sesión
          </button>
        </form>
        <div className="login-footer">
          <p className="login-hint">
            Usuario: admin | Contraseña: admin
          </p>
          <button onClick={handleForgotPassword} className="link-button">
            ¿Olvidaste tu contraseña?
          </button>
          <p>
            ¿No tienes cuenta?{' '}
            <button onClick={handleRegister} className="link-button">
              Regístrate
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App; 