import { View, Text, TouchableOpacity, Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

export default function DayDetailsScreen() {
  return (
    <View>
      <Stack.Screen options={{ title: "Day 2: Onboarding" }} />
      <Text>DayDetailsScreen</Text>
      <Link href="days/day2/onboarding" asChild>
        <Button title="Go to onboarding" />
      </Link>
    </View>
  );
}
