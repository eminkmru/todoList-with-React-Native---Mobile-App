import React, { useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "./components/Task";

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss(); // Dismisses the keyboard
    setTaskItems([...taskItems, { text: task, complated: false }]);
    setTask(null);
  };

  const completeTask = (index) => {
    const itemsCopy = [...taskItems];
    itemsCopy[index].complated = !itemsCopy[index].complated;
    if (itemsCopy[index].complated) {
      itemsCopy.push(itemsCopy[index]);
      itemsCopy.splice(index, 1);
    } else {
      itemsCopy.unshift(itemsCopy[index]);
      itemsCopy.splice(index + 1, 1);
    }
    setTaskItems(itemsCopy);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("./assets/navIcon.png")}
          style={{ width: 50, height: 50 }}
        />
        <Text style={styles.sectionTitle}>Today's tasks</Text>
      </View>
      <View style={styles.tasksWrapper}>
        <View style={styles.items}>
          {/* {This is where the tasks will go} */}
          {taskItems.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => completeTask(index)}>
              <Task key={index} text={item.text} complated={item.complated} />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* {Write to Task} */}

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write a task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE1BD",
    paddingTop: 50,
  },
  tasksWrapper: {
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFE794",
    width: "100% ",
    height: 80,
    justifyContent: "center",
    paddingRight: 100,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 15,
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addWrapper: {
    width: 50,
    height: 50,
    backgroundColor: "#FFFFFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {
    fontSize: 30,
    color: "#C0C0C0",
  },
});
