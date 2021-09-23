import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/themes";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    backgroundColor: theme.colors.background,
  },
  input:{
      height: 50,
      width: 200,
      borderBottomWidth: 2,
  },
  img:{
    width: '100%',
    height: 360,
  },
  title: {
      color: theme.colors.heading,      
      textAlign: 'center',
      fontSize: 40,
      marginBottom: 16,
  },
  content:{
    marginTop: 16,
    paddingHorizontal: 50
  },
  subtitle:{
      color:theme.colors.heading,
      fontSize: 15,
      textAlign: 'center',
      marginBottom: 64
  }
});
