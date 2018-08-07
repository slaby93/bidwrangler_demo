import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import canSubmit from 'utils/form/canSubmit';
import * as fieldsValidator from 'utils/form/fieldsValidator';
import { Form } from 'components/form/RawElements';
import Text from 'components/form/Text';
import Checkbox from 'components/form/Checkbox';
import Button, { LinkButton } from 'components/elements/Button';
import Header from 'components/elements/Header';
import Loader from 'components/special/Loader';

export class Login extends React.PureComponent {
  static errorValidator = (values) => {
    const { email, password } = values;

    return {
      email: fieldsValidator.requiredField(email) || fieldsValidator.email(email),
      password: fieldsValidator.requiredField(password) || fieldsValidator.password(password),
    };
  }

  static propTypes = {
    isLogging: PropTypes.bool,
    onSubmit: PropTypes.func.isRequired,
    className: PropTypes.string.isRequired,
  }

  static defaultProps = {
    isLogging: false,
  }

  render() {
    const { className, onSubmit, isLogging } = this.props;

    return (
      <div className={className} data-automation-id="LoginForm">
        {isLogging && <Loader container />}
        <Header>Log In</Header>
        <Form
          onSubmit={onSubmit}
          validateError={Login.errorValidator}
        >
          {
          (formApi) => {
            this.formApi = formApi;
            const emailError = formApi.touched.email && formApi.errors.email;
            const passwordError = formApi.touched.password && formApi.errors.password;

            return (
              <form onSubmit={formApi.submitForm}>
                <Text
                  error={emailError}
                  placeholder="Email"
                  id="email"
                />
                <Text
                  type="password"
                  error={passwordError}
                  id="password"
                  placeholder="Password"
                />
                <ButtonsWrapper>
                  <Button disabled={!canSubmit(formApi.errors)} type="submit" bgColor="#d2e686" grow>
                    <span>Sign In</span>
                  </Button>
                  <LinkButton to="/authorize/register" grow>
                    <span>Register</span>
                  </LinkButton>
                </ButtonsWrapper>
              </form>
            );
          }
        }
        </Form>
      </div>
    );
  }
}

const StyledComponent = styled(Login)`
  min-width: 270px;
  display: flex;
  flex-direction: column;
  h1 {
    align-self: center;
    margin-bottom: 60px;
  }
  ${Checkbox}{
    justify-content: flex-end;
  }
`;

const ButtonsWrapper = styled.div`
display: flex;
flex-direction: column;

& > button:first-child {
  margin-bottom: 10px;
}
`;

export default StyledComponent;
