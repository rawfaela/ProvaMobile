import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';




export default function Fale(){
    return (
    <View style={styles.container}>
        <Text style={styles.text}>Fale Conosco</Text>
        <TextInput placeholder='Nome' style={styles.input}></TextInput>
        <TextInput placeholder='Email' style={styles.input}></TextInput>
        <TextInput placeholder='Mensagem' style={styles.input}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(33, 136, 204)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        color: 'rgb(255, 255, 255)',
        fontSize: 30,
    },
    input: {
        fontSize: 20,
        borderWidth: 2,
        margin:10,
        borderRadius: 10,
        padding: 2,
        borderColor:  'rgb(12, 68, 143)'
    },
})
