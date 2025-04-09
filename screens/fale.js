import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';




export default function Fale(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');

    return (
    <View style={styles.container}>
        <Image source={{uri: 'https://3albe.com.br/wp-content/uploads/2019/12/message-2-5122.png'}} style={styles.img}/>
        <TextInput placeholder='Nome' style={styles.input} onChangeText={setNome}></TextInput>
        <TextInput placeholder='Email' style={styles.input}  onChangeText={setEmail}></TextInput>
        <TextInput placeholder='Mensagem' style={styles.input}  onChangeText={setMsg}></TextInput>
        <Text style={styles.text}>Olá {nome}, seu email é {email}. Você digitou a mensagem: {msg}</Text>
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
        fontSize: 20,
        textAlign: 'center'
    },
    input: {
        fontSize: 20,
        borderWidth: 2,
        margin:10,
        borderRadius: 10,
        padding: 2,
        borderColor:  'rgb(12, 68, 143)'
    },
    img:{
        width: 200,
        height:200,
    },
})
