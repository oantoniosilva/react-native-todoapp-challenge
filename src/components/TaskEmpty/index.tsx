import { Image, View, Text } from "react-native";

import { styles } from './styles';

import clipboardImg from "../../assets/clipboard.png";

export function TaskEmpty() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image 
          source={clipboardImg}
        />

        <Text style={styles.text1}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.text2}>Crie tarefas e organize seus itens a fazer</Text>
      </View>
    </View>
  )
}