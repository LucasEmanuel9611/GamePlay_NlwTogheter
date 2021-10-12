import React from "react";
import { View, Text, TextInput, Image, StatusBar } from "react-native";
import { styles } from "./styles";
import { ButtonIcon } from "../../components/ButtonIcon/index";
import IllustrationImg from "../../assets/illustration.png";
import { Background } from "../../components/Background";
import { useNavigation } from "@react-navigation/native";


export function SignIn() {
  const navigation = useNavigation();

  return (
    <Background>
      <View style={styles.container}>
        <Image
          source={IllustrationImg}
          style={styles.img}
          resizeMode="stretch"
        />
        <View style={styles.content}>
          <Text style={styles.title}>
            Conect-se{"\n"}e Organize suas{"\n"}
            Jogatinas{"\n"}
          </Text>
          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games favoritos com seus amigos
          </Text>
          <ButtonIcon title="Entrar com Discord" onPress={() => navigation.navigate('Home')}/>
        </View>
      </View>
    </Background>
  );
}
