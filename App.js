import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native'

import ListNotesScreen from './src/screens/ListNotesScreen';
import CreateNoteScreen from './src/screens/CreateNoteScreen';
import ShowNoteScreen from './src/screens/ShowNoteScreen';
import EditNoteScreen from './src/screens/EditNoteScreen';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NotesProvider} from "./src/context/NotesContext"


const Stack = createNativeStackNavigator()


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="index"
          component={ListNotesScreen}
          options={{
            title: "Notes",
            headerTitleAlign: "center",

          }} />
        <Stack.Screen name="listnotes" component={ListNotesScreen} options={{ title: "List Notes", headerTitleAlign: "center" }} />
        <Stack.Screen name="createnote" component={CreateNoteScreen} options={{ title: "Create Note", headerTitleAlign: "center" }} />
        <Stack.Screen name="shownote" component={ShowNoteScreen} options={{ title: "Show", headerTitleAlign: "center" }} />
        <Stack.Screen name="editnote" component={EditNoteScreen} options={{ title: "Edit Note", headerTitleAlign: "center" }} />
        {/* <Stack.Screen name="create" component={CreateScreen} options={{title:"create",headerTitleAlign:"center"}} /> */}
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default () => {
  return (
    <NotesProvider >
      <App/>
    </NotesProvider>

  )
}