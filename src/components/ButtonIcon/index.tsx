import { Text, TouchableOpacity, Image, View, TouchableOpacityProps } from "react-native";
import React from "react";

import DiscordImg from "../../assets/discord.png";
import { styles } from "./styles";

{/* recebe minhas Props e porps especificas para o touchableOpacity props */}
type Props = TouchableOpacityProps & {
  title?: String;
};


{/* Pega minha propriedade e o resto delas */}
export function ButtonIcon({ title, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={styles.iconWraper}>
        <Image source={DiscordImg} style={styles.icon} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
