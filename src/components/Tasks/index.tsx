import { Circle, Trash } from "phosphor-react-native";
import { View, Text, TouchableOpacity } from "react-native";

import { styles } from './styles';

type TasksProps = {
  content: string;
  checked?: false;
  onRemove: () => void; // tipar uma função com propriedade
}

export function Tasks({ content, onRemove }: TasksProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Circle size={17.5} color="#4EA8DE"/>
      </TouchableOpacity>

      <Text style={styles.taskText}>{content}</Text>

      <TouchableOpacity onPress={onRemove}>
        <Trash size={17.5} color="#FFFFFF"/>
      </TouchableOpacity>
    </View>
  )
}