import React from 'react';
import styled from 'styled-components';
import Text from 'components/form/Text';
import Button, { LinkButton, ButtonsWrapper } from 'components/elements/Button';
import { Form } from 'components/form/RawElements';

export const CreateAuction = ({ className, onSubmit }) => {
  return (
    <Form
      onSubmit={onSubmit}
    >
      {
          (formApi) => {
            return (
              <form className={className} onSubmit={formApi.submitForm}>
                <Text
                  placeholder="Item name"
                  id="itemName"
                />
                <ButtonsWrapper>
                  <Button type="submit" bgColor="#d2e686" grow>
                    <span>Create</span>
                  </Button>
                  <LinkButton grow to="/auction/list">Back</LinkButton>
                </ButtonsWrapper>
              </form>
            );
          }
        }
    </Form>
  );
};

const Styled = styled(CreateAuction)`
  display: flex;
  align-self: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
  width: 240px;

  ${ButtonsWrapper} {
    width: 100%;
  }
`;

export default Styled;
