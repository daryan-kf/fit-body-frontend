import { Input, InputProps, styled, Label, YStack, YStackProps } from 'tamagui';
import { Text } from '@/components';

interface TextFieldTypes {
  placeholder: string;
  label?: string;
  error?: string;
}

export const TextField = ({
  placeholder,
  label,
  onChangeText,
  value,
  error,
  ...props
}: TextFieldTypes & InputProps & YStackProps) => {
  return (
    <YStack {...props}>
      {label && (
        <Label color="#FFF" fontWeight="medium" fontSize={16} lineHeight={30}>
          {label}
        </Label>
      )}
      <TextFieldStyled
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        borderColor={error ? '#F14141' : '#666666'}
      />
      {error && <Text color="#F14141">{error}</Text>}
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
