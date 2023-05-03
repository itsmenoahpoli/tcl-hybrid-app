import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";

interface Props {
  children: React.ReactNode;
  hasBackButton?: boolean;
}

export const BaseLayout = (props: Props) => {
  const navigation = useNavigation();

  const handleGoBack = (): void => {
    navigation.goBack();
  };

  return (
    <React.Fragment>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.container}>
          {props.hasBackButton ? (
            <View style={styles.backContainer}>
              <Pressable onPress={handleGoBack}>
                <MaterialIcons
                  name="keyboard-arrow-left"
                  size={30}
                  color="#464646"
                />
              </Pressable>
            </View>
          ) : null}
          {props.children}
        </View>
      </SafeAreaView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  backContainer: {
    paddingTop: 30,
    paddingHorizontal: 15,
  },
});
