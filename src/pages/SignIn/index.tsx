import { Container, Form } from './styles';

export const SignIn = () => {
  return (
    <Container>
      <div>
        <p>Please, enter your full name below</p>
        <p>Only alphabetical characters are accepted</p>
        <Form>
          <input type="text" placeholder="Full name" id="full-name" name="full-name" />
          <label htmlFor="age-check">
            <input type="checkbox" name="age-check" id="age-check" />
            <span>Are you older than 18 years old?</span>
          </label>
          <button type="submit" disabled>Enter</button>
        </Form>
      </div>
    </Container>
  )
}