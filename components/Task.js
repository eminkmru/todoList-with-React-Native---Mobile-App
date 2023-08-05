import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Task = (props) => {
  return (
    <View>
      {props.complated ? (
        <View style={styles.itemComplated}>
          <View style={styles.itemLeft}>
            <TouchableOpacity style={styles.square}></TouchableOpacity>
            {props.complated ? (
              <Text style={styles.itemRightComplated}>{props.text}</Text>
            ) : (
              <Text style={styles.itemRight}>{props.text}</Text>
            )}
          </View>
          <View style={styles.circular}></View>
        </View>
      ) : (
        <View style={styles.item}>
          <View style={styles.itemLeft}>
            <TouchableOpacity style={styles.square}></TouchableOpacity>
            {props.complated ? (
              <Text style={styles.itemRightComplated}>{props.text}</Text>
            ) : (
              <Text style={styles.itemRight}>{props.text}</Text>
            )}
          </View>
          <View style={styles.circular}></View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FAA136",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemComplated: {
    backgroundColor: "#FFC074",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#FEFFDF",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  text: {
    maxWidth: "80%",
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 5,
  },
  itemRight: {
    maxWidth: "80%",
  },
  itemRightComplated: {
    maxWidth: "80%",
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    textDecorationColor: "#000",
  },
});

export default Task;
