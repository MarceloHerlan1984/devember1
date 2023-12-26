import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";

type DayListItem = {
  day: number;
};

export default function DayListItem({ day }: DayListItem) {
  return (
    <Link href={`/days/day${day}`} asChild>
      <Pressable style={styles.box}>
        <Text style={styles.text}>{day}</Text>
      </Pressable>
    </Link>
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
