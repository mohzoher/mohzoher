import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function Footer() {
    return (
      <View style={styles.container}>
        <Text style={styles.footer}>All rights reserved to Little Lemon, 2022</Text>
      </View>
    );
  }


  const styles = StyleSheet.create({
    
    container: {
        backgroundColor: '#EE9972', 
        marginBottom: 10
    },
    
    
    footer: {
        fontSize: 18, 
        color: 'black', 
        textAlign:'center',
        fontStyle: 'italic'
    },

  })

  


  

