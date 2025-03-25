// components/Icon.tsx
import React from 'react';
import { View } from 'react-native'; // or use a Tamagui container like YStack if needed
import iconMap, { IconName } from './iconsList';

export interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = 'white'
}) => {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    console.warn(`Icon with name "${name}" does not exist.`);
    return null;
  }

  return (
    <View style={{ width: size, height: size }}>
      <IconComponent width={size} height={size} fill={color} />
    </View>
  );
};
