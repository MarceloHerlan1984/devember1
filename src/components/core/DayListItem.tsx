import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function DayListItem({ day }) {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{day}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#F9EDE3",
    flex: 1,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    elevation: 1,
    borderRadius: 10,
  },
  text: {
    fontSize: 70,
  },
});
