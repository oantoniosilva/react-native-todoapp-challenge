import { useState } from "react";
import { Image, View, Alert, Text, TouchableOpacity, TextInput, FlatList } from "react-native";
import { PlusCircle } from "phosphor-react-native";

import { Header } from "../../components/Header";
import { Tasks } from "../../components/Tasks";


import { styles } from './styles';

import clipboardImg from "../../assets/clipboard.png";

export function Home() {
  const [tasks, setTasks] = useState<string[]>([])
  const [taskName, setTaskName] = useState('')

  function handleTaskAdd() {
    if (tasks.includes(taskName)) {
      return Alert.alert('Já existe uma task na lista com o mesmo nome!')
    }

    setTasks(prevState => [...prevState, taskName])
    setTaskName('')

  }

  function handleTaskRemove(content: string) {

    Alert.alert('Remover', `Você removeu a task ${content}?`, [
      {
        text: 'Sim',
        onPress: () => setTasks(prevState => prevState.filter(task => task !== content))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.form}>
        <TextInput style={styles.input}
          placeholder="Add a new task"
          placeholderTextColor="#808080"
          // onChangeText={event => setTaskName(event)}
          onChangeText={setTaskName}
          value={taskName}
        />

        <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
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

      <FlatList
        data={tasks}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Tasks
            key={item}
            content={item}
            onRemove={() => handleTaskRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
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
        )}
      />
    </View>
  )
}
