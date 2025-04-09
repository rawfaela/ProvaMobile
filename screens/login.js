import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function Login(navigation){
    return (
    <View style={styles.container}>
        <Text style={styles.text}>Login</Text>
        <View>
            <TextInput placeholder='Email' style={styles.input}></TextInput>
            <TextInput placeholder='Senha' style={styles.input}></TextInput>
        </View>
        <TouchableOpacity style={styles.button}  onPress={()=> navigation.navigate('Estoque')}>
            <Text style={styles.buttontext} >Entrar</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(61, 156, 219)',
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
    button: {
        backgroundColor:  'rgb(11, 93, 199)',
        padding: 8,
        borderRadius: 10,
    },
    buttontext: {
        fontSize: 20,
    }
});
  