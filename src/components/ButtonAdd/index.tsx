import  React from 'react';
import { View, Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { styles } from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../../global/styles/themes";


export function ButtonAdd({ ...rest }: RectButtonProps) {
  return (
    <View style={styles.container}>
      <RectButton style={styles.container} {...rest}>
        <MaterialCommunityIcons
          name="plus"
          color={theme.colors.heading}
          size={24}
        />
      </RectButton>
    </View>
  );
}
