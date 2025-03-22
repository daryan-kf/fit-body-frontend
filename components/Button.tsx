import React from 'react';
import { Button as TamButton, ButtonProps, styled } from 'tamagui';

interface TextFieldTypes {
  children: string | React.ReactDOM;
}

export const Button = ({
  children,
  ...props
}: TextFieldTypes & ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
export const StyledButton = styled(TamButton, {
  backgroundColor: '#DAF029',
  color: '#0D0D0D',
  borderRadius: 8,
  fontFamily: 'Poppins',
  fontSize: 16,
  borderWidth: 0,
  borderColor: 'none',
  paddingVertical: 8,
  paddingHorizontal: 16,
  hoverStyle: {
    opacity: 0.9
  },
  pressStyle: {
    backgroundColor: '#DAF029',
    opacity: 0.7
  }
});
