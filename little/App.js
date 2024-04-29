import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import LittleLemonHeader from './Components/LittleLemonHeader';
import LittleLemonFooter from './Components/LittleLemonFooter';
import WelcomeScreen from './Components/WelcomeScreen';
import WelcomeScreen2 from './Components/WelcomeScreen2';
import MenuItemsFlat from './Components/MenuItemsFlat';
import MenuSections from './Components/MenuItems';
import Keyboards from './Components/Keyboards';
import Form from './Components/Form';
import FeedbackForm from './Components/FeedbackForm';
import LoginScreen from './Components/LoginScreen';
import MenuItems from './Components/MenuItems';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


<ion-icon name="home-outline"></ion-icon>;
<ion-icon name="log-in-outline"></ion-icon>;
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
    <NavigationContainer>
      <View style={styles.container}>
          <LittleLemonHeader />
          <Tab.Navigator 
              screenOptions={({ route, }) => ({
              tabBarIcon: ({size, }) => {
              let iconName;
              if (route.name === 'Welcome') {
              iconName = 'home-outline'
              } else if (route.name === 'Login') {
                iconName = 'log-in-outline';
              }
              return <Ionicons name={iconName} size={size} />;
               },
               })}
               initialRouteName="Login">
              <Tab.Screen name="Welcome" component={WelcomeScreen} />
              <Tab.Screen name="Login" component={LoginScreen} />
           </Tab.Navigator>
      </View>
      <View style={styles.footerContainer}>
           <LittleLemonFooter />
      </View>
    </NavigationContainer>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },

});






//my colors :   308687 for the BG && C0DDDE for the text.

///////////   NAVIGATION   /////////////
// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//         <NavigationContainer>
//           <Stack.Navigator initialRouteName='Menu' screenOptions={{headerStyle: '#FDBABB'}}>
//             <Stack.Screen options={{title: 'Home'}} name='Welcome' component={WelcomeScreen}/>
//             <Stack.Screen option={{title: 'Menu'}} name='Menu' component={MenuItems}/>
//           </Stack.Navigator>
//         </NavigationContainer>
//   );
// }






//NAVIGATION CODE//////

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <>
//       <NavigationContainer>
//       <View style={styles.container}>
//         <LittleLemonHeader />
//         <Stack.Navigator initialRouteName="Login">
//           <Stack.Screen name="Welcome" component={WelcomeScreen} />
//           <Stack.Screen name="Login" component={LoginScreen} />
//         </Stack.Navigator>
//       </View>
//       <View style={styles.footerContainer}>
//         <LittleLemonFooter />
//       </View>
//       </NavigationContainer>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#333333',
//   },
//   footerContainer: { backgroundColor: '#333333' },
// });   

///////////////////////////////////////
// Navigation using stack container //
/////////////////////////////////////

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <>
//       <NavigationContainer>
//         <View style={styles.container}>
//           <LittleLemonHeader />
//           <Stack.Navigator initialRouteName="Login">
//             <Stack.Screen name="Welcome" component={WelcomeScreen} />
//             <Stack.Screen name="Login" component={LoginScreen} />
//           </Stack.Navigator>
//         </View>
//         <View style={styles.footerContainer}>
//           <LittleLemonFooter />
//         </View>
//       </NavigationContainer>
//     </>
//   );
// }



//////////////////////////////////
//////// TAB NAVIGATION /////////
////////////////////////////////

// <ion-icon name="home-outline"></ion-icon>;
// <ion-icon name="log-in-outline"></ion-icon>;
// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <>
//     <NavigationContainer>
//       <View style={styles.container}>
//           <LittleLemonHeader />
//           <Tab.Navigator 
//               screenOptions={({ route, }) => ({
//               tabBarIcon: ({size, }) => {
//               let iconName;
//               if (route.name === 'Welcome') {
//               iconName = 'home-outline'
//               } else if (route.name === 'Login') {
//                 iconName = 'log-in-outline';
//               }
//               return <Ionicons name={iconName} size={size} />;
//                },
//                })}
//                initialRouteName="Login">
//               <Tab.Screen name="Welcome" component={WelcomeScreen} />
//               <Tab.Screen name="Login" component={LoginScreen} />
//            </Tab.Navigator>
//       </View>
//       <View style={styles.footerContainer}>
//            <LittleLemonFooter />
//       </View>
//     </NavigationContainer>
//    </>
//   );
// }


//////////////////////////////////
//////// DRAWER NAVIGATION //////
////////////////////////////////



// const Drawer = createDrawerNavigator();

// import { View, StyleSheet } from 'react-native';
// import LittleLemonHeader from './components/LittleLemonHeader';
// import LittleLemonFooter from './components/LittleLemonFooter';
// import WelcomeScreen from './WelcomeScreen';
// import LoginScreen from './LoginScreen';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <>
//       <NavigationContainer>
//         <View style={styles.container}>
//           <LittleLemonHeader />
//           <Drawer.Navigator useLegacyImplementation initialRouteName="Login">
//             <Drawer.Screen name="Welcome" component={WelcomeScreen} />
//             <Drawer.Screen name="Login" component={LoginScreen} />
//           </Drawer.Navigator>
//         </View>
//         <View style={styles.footerContainer}>
//           <LittleLemonFooter />
//         </View>
//       </NavigationContainer>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#333333',
//   },
//   footerContainer: { backgroundColor: '#333333' },
// });