import { View, Text, ScrollView } from "react-native";

import { Header } from "../../components/Header";
import { TaskEmpty } from "../../components/TaskEmpty";
import { TaskForm } from "../../components/TaskForm";
import { Tasks } from "../../components/Tasks";

import { styles } from './styles';

export function Home() {
  const tasks = [
    'Estudar Rust',
    'Estudar Java',
    'Estudar Javascript',
    'Estudar Html',
    'Estudar Css',
    'Estudar Git',
    'Estudar Springboot',
  ]

  function handleTaskRemove() {
    console.log('Você removeu uma task!')
  }

  return (
    <View style={styles.container}>
      <Header />
      <TaskForm />

      <ScrollView showsVerticalScrollIndicator={false}>
        {
          tasks.map(task => (
            <Tasks key={task} content={task} onRemove={handleTaskRemove} />
          )) 
        }
      </ScrollView>

      {/* <TaskEmpty /> */}
    </View>
  )
}