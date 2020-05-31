import {Navigation} from "react-native-navigation";
import MainScreen from "./src/screens/Main/Main";
import SetupScreen from "./src/screens/Setup/Setup"

import { addAlarm, deleteAlarm } from "./src/store/actions/index"
import {Provider} from 'react-redux'
import configureStore from './src/store/configureStore';

const store = configureStore();

Navigation.registerComponent("main-screen.MainScreen", () => MainScreen, store, Provider);
Navigation.registerComponent("setup-screen.SetupScreen", () => SetupScreen);

Navigation.startSingleScreenApp({
  screen:{
    screen: "main-screen.MainScreen",
    title: "Main Screen"
  }
});