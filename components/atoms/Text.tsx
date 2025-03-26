import { Text as TamaguiText, TextProps, styled } from 'tamagui';

interface TextTypes extends TextProps {
  variant?:
    | 'title'
    | 'subtitle'
    | 'label'
    | 'inputError'
    | 'link'
    | 'button'
    | 'small'
    | 'body';
}

export const Text = ({ children, variant, ...props }: TextTypes) => {
  return (
    <StyledText variant={variant} {...props}>
      {children}
    </StyledText>
  );
};

export const StyledText = styled(TamaguiText, {
  name: 'StyledText',
  color: 'white',

  variants: {
    variant: {
      title: {
        fontSize: 28,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 10
      },
      subtitle: {
        fontSize: 16,
        textAlign: 'center',
        color: '#A0A0A0',
        marginBottom: 20
      },
      label: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 4
      },
      inputError: {
        fontSize: 12,
        color: 'red',
        marginTop: 4
      },
      link: {
        fontSize: 14,
        color: '#D3FF33',
        textDecorationLine: 'underline'
      },
      button: {
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center'
      },
      small: {
        fontSize: 12,
        color: '#A0A0A0',
        textAlign: 'center'
      },
      body: {
        fontSize: 14,
        color: '#FFF'
      }
    }
  } as const,

  defaultVariants: {
    variant: 'body'
  } as const
}) as React.FC<TextTypes>;
