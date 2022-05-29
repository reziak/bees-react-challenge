import { FormEvent, useContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

import { Container, Form } from './styles';

export const SignIn = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  const [cookies, setCookies] = useCookies(['user']);
  const [fullName, setFullName] = useState('');
  const [isAgeChecked, setIsAgeChecked] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSignIn = (event: FormEvent) => {
    event.preventDefault();
    setUser(fullName);
    setCookies('user', fullName, { path: '/'});
    navigate('/breweries');
  }

  const onFullNameChange = (value: string) => {
    const regex = /^[a-z\s]+$/i;
    const trimValue = value.trim()
    const testValue = trimValue.match(regex);

    if (testValue && trimValue.length >= 8) {
      setFullName(trimValue);
    } else {
      setFullName('');
    }
  }

  useEffect(() => {
    setIsFormValid(fullName.length >= 8 && isAgeChecked);
  }, [fullName, isAgeChecked]);

  if (cookies.user) {
    return <Navigate to="/breweries" />;
  }

  return (
    <Container>
      <div>
        <p>Please, enter your full name below</p>
        <p>Only alphabetical characters are accepted</p>
        <Form onSubmit={handleSignIn}>
          <input
            type="text"
            placeholder="Full name"
            id="full-name"
            name="full-name" 
            onChange={event => onFullNameChange(event.target.value)}
          />
          <label htmlFor="age-check">
            <input
              type="checkbox"
              name="age-check" 
              id="age-check" 
              onChange={event => setIsAgeChecked(event.target.checked)}
            />
            <span>Are you older than 18 years old?</span>
          </label>
          <button type="submit" disabled={!isFormValid}>Enter</button>
        </Form>
      </div>
    </Container>
  )
}