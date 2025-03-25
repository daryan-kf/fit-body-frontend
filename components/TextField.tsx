import { Input, InputProps, styled, Label, YStack } from 'tamagui';

interface TextFieldTypes {
  placeholder: string;
  label?: string;
}

export const TextField = ({
  placeholder,
  label,
  ...props
}: TextFieldTypes & InputProps) => {
  return (
    <YStack>
      {label && (
        <Label color="#FFF" fontWeight="medium" fontSize={16}>
          {label}
        </Label>
      )}
      <TextFieldStyled placeholder={placeholder} {...props} />
    </YStack>
  );
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
