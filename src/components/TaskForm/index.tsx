import { PlusCircle } from "phosphor-react-native";
import { TextInput, TouchableOpacity, View, Text } from "react-native";

import { styles } from './styles';

export function TaskForm() {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput style={styles.input}
          placeholder="Add a new task"
          placeholderTextColor="#808080"
        />

        <TouchableOpacity style={styles.button}>
          <PlusCircle size={16} color="#F2F2F2"/>
        </TouchableOpacity>
      </View>

      <View style={styles.counterContainer}>
        <View style={styles.containerCounterCreate}>
          <Text style={styles.textCreate}>Create</Text>

          <View style={styles.counter}>
            <Text style={styles.textCounter}>0</Text>
          </View>
        </View>

        <View style={styles.containerCounterCompleted}>
          <Text style={styles.textCompleted}>Completed</Text>

          <View style={styles.counter}>
            <Text style={styles.textCounter}>2</Text>
          </View>
        </View>
      </View>
    </View>
  )
}