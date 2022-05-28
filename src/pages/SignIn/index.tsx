import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Form } from './styles';

export const SignIn = () => {
  const [fullName, setFullName] = useState('');
  const [isAgeChecked, setIsAgeChecked] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = (event: FormEvent) => {
    event.preventDefault();
    console.log(fullName);
    navigate('/breweries');
  }

  const onFullNameChange = (value: string) => {
    setFullName(value.trim());
  }

  useEffect(() => {
    setIsFormValid(fullName.length >= 8 && isAgeChecked);
  }, [fullName, isAgeChecked])

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