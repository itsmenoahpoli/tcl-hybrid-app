import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import type { StackParamsList } from "types/navigation.d";
import {
  WelcomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  HomeScreen,
} from "screens/app";

const { Navigator, Screen } = createNativeStackNavigator<StackParamsList>();

const NAVIGATOR_OPTS = {
  headerShown: false,
};

export const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={NAVIGATOR_OPTS}
        initialRouteName="WELCOME_SCREEN"
      >
        <Screen name="WELCOME_SCREEN" component={WelcomeScreen} />
        <Screen name="LOGIN_SCREEN" component={LoginScreen} />
        <Screen name="REGISTER_SCREEN" component={RegisterScreen} />
        <Screen
          name="FORGOT_PASSWORD_SCREEN"
          component={ForgotPasswordScreen}
        />
        <Screen name="HOME_SCREEN" component={HomeScreen} />
      </Navigator>
    </NavigationContainer>
  );
};
