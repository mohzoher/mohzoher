import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView,} from 'react-native';

export default function Header() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}numberOfLines={2}>Little Lemon</Text>
      </View>
    );
  }

  
  const styles = StyleSheet.create({
    
    container: {
      flex: 0.2,
      backgroundColor: '#EE9972',
    },
    
    
    title: {
      padding: 40,
      fontSize: 30,
      color: 'black',
      textAlign:'center',
      fontWeight: 'bold'
    },

  })

  

