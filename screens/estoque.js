import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native';

function Maca(){
    const [Maca, setMaca] = useState(0);
}

function Mais(){
    setMaca+=1;
}

export default function Estoque(){
    return (
    <View style={styles.container}>
        <Text style={styles.text}>Estoque</Text>
        <View style={styles.imgs}>
            <Image source={{uri:'https://th.bing.com/th/id/OIP.PNPapONav1ccu2JUJCIdYgHaHn?rs=1&pid=ImgDetMain'}} style={styles.img}/>
            <Text style={styles.nome}>
                Maçã <br/> Alimento saudável, fruta, vermelho. 
            </Text>
        </View>

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
    imgs:{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row'
    },
    img:{
        width: 150,
        height: 150,
    },
    nome:{
        fontSize:20,
        textAlign: 'center'
    }
})
