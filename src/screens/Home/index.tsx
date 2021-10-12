import React, {useState} from "react";
import { View, Text} from "react-native";
import { styles } from "./styles";
import { Profile } from "../../components/Profile";
import { Background } from "../../components/Background";
import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";

export function Home() {
  const [category, setCategory] = useState('')

  function handleCategorySelect(categoryId: string){
    {/* se o id que estou clicando for o mesmo ele desmarca se não ele marca*/}
    categoryId === category ? setCategory('') : setCategory(categoryId)
  }

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd/>
      </View>
      <View>
        <CategorySelect CategorySelected={category} setCategory={handleCategorySelect}/>
      </View>
    </Background>
  );
}
