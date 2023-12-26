import { View, Text, SafeAreaView, Button } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";

export default function Day3() {
  return (
    <SafeAreaView>
      <Stack.Screen options={{ headerShown: false }} />
      <Text>Day 3</Text>
      <Link href="/days/day3/editor" asChild>
        <Button title="go to Editor" />
      </Link>
    </SafeAreaView>
  );
}
