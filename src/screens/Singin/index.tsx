import React, { useState } from "react";
import { View, Text, TextInput, Image, StatusBar} from "react-native";
import { styles } from "./styles";
import IllustrationImg from "../../assets/illustration.png";
import { ButtonIcon } from "../../components/ButtonIcon/index";

export function SignIn() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Image source={IllustrationImg} style={styles.img} resizeMode="stretch" />
      <View style={styles.content}>
        <Text style={styles.title}>
          Organize{"\n"}
          suas Jogatinas{"\n"}
          facilmente
        </Text>
        <Text style={styles.subtitle}>Crie grupos para jogar seus games favoritos com seus amigos</Text>
        <ButtonIcon title="Entrar com Discord" activeOpacity={0.5}/>
      </View>
    </View>
  );
}
 