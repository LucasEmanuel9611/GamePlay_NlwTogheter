import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import {Avatar} from '../Avatar'

export function Profile() {
  return (
    <View style={styles.container}>

        <Avatar urlImage="https://github.com/LucasEmanuel9611.png"/>
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>Olá, </Text>

          <Text style={styles.username}>Lucas</Text>
        </View>

        <Text style={styles.message}>Hoje é dia de Vitória</Text>
      </View>
    </View>
  );
}
