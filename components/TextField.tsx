import { Input, InputProps, styled } from 'tamagui';

interface TextFieldTypes {
  placeholder: string;
}

export const TextField = ({
  placeholder,
  ...props
}: TextFieldTypes & InputProps) => {
  return <TextFieldStyled placeholder={placeholder} {...props} />;
};

const TextFieldStyled = styled(Input, {
  backgroundColor: '#000',
  color: '#FFF',
  borderWidth: 1,
  borderColor: '#666666',
  borderRadius: 6,
  fontFamily: 'Poppins',
  fontSize: 14,
  hoverStyle: {
    borderColor: '#DAF029'
  },
  focusStyle: {
    borderColor: '#DAF029'
  }
});
