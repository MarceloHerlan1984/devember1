import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import { Stack, router } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";

import { StatusBar } from "expo-status-bar";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import { Directions } from "react-native-gesture-handler";

const onboardingSteps = [
  {
    title: "Welcome to Devember",
    description:
      " Daily React Native tutorials for Devember. Learn how to build a React Native app with Devember.",
    icon: "people-arrows",
  },
  {
    title: "Learn and Build a React Native App",
    description:
      "Learn by building a React Native app with Devember. Learn how to build a React Native app with Dev",
    icon: "snowflake",
  },
  {
    title: "Education for Children",
    description:
      "Education by building a React Native app with Devember. Learn how to build a React Native app with",
    icon: "slideshare",
  },
];

export default function OnboardingScreen() {
  const [currentStep, setCurrentStep] = React.useState(0);
  const swipeForward = Gesture.Fling()
    .direction(Directions.LEFT)
    .onEnd((e) => {
      onContinue();
    });
  const swipeBackward = Gesture.Fling()
    .direction(Directions.RIGHT)
    .onEnd((e) => {
      onBack();
    });

  const data = onboardingSteps[currentStep];

  const onContinue = () => {
    const isLastStep = currentStep === onboardingSteps.length - 1;
    if (isLastStep) {
      endOnboarding();
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const onBack = () => {
    const isFirstStep = currentStep === 0;
    if (isFirstStep) {
      endOnboarding();
    } else {
      setCurrentStep(currentStep - 1);
    }
  };

  const Swipe = Gesture.Simultaneous(swipeForward, swipeBackward);

  const endOnboarding = () => {
    setCurrentStep(0);
    router.back();
  };

  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />
      <View style={styles.stepIndicatorContainer}>
        {onboardingSteps.map((step, index) => (
          <View
            key={index}
            style={[
              styles.stepIndicator,
              index === currentStep && styles.stepIndicatorActive,
            ]}
          />
        ))}
      </View>
      <GestureDetector gesture={Swipe}>
        <View style={styles.pageContent}>
          <FontAwesome5
            name={data.icon}
            size={90}
            color="#CEF202"
            style={styles.image}
          />
          <View style={styles.footer}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.description}>{data.description}</Text>

            <View style={styles.buttonsRow}>
              <Pressable onPress={endOnboarding} style={styles.buttonTextSkip}>
                <Text style={styles.buttonSkip}>Skip</Text>
              </Pressable>
              <Pressable style={styles.button} onPress={onContinue}>
                <Text style={styles.buttonText}>Continue</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </GestureDetector>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#15141A",
    padding: 20,
  },
  title: {
    color: "#FDFDFD",
    letterSpacing: 2,
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  description: {
    color: "gray",
    fontSize: 18,
    lineHeight: 25,
  },
  image: {
    alignSelf: "center",
    margin: 20,
  },
  footer: {
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
  },
  buttonsRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    gap: 10,
    marginTop: 50,
  },
  button: {
    color: "white",
    backgroundColor: "#CEF202",
    padding: 20,
    borderRadius: 50,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonTextSkip: {
    borderWidth: 2,
    color: "#CEF202",
    borderColor: "#CEF202",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  buttonSkip: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#CEF202",
  },
  stepIndicatorContainer: {
    padding: 10,
    gap: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  stepIndicator: {
    flex: 1,
    height: 7,
    borderRadius: 5,
    marginRight: 5,
    backgroundColor: "gray",
  },
  stepIndicatorActive: {
    backgroundColor: "#CEF202",
  },
  pageContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
