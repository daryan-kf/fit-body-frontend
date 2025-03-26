// components/Icon.tsx
import React from 'react';
import iconMap, { IconName } from './iconsList';
import { View, ViewProps } from 'tamagui';

export interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
}

export const Icon: React.FC<IconProps & ViewProps> = ({
  name,
  size = 24,
  color = 'white',
  ...props
}) => {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon with name "${name}" does not exist.`);
    return null;
  }

  return (
    <View style={{ width: size, height: size }} {...props}>
      <IconComponent width={size} height={size} fill={color} />
    </View>
  );
};
