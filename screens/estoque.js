import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'react-native-web';


export default function Estoque(){
    const [maca, setMaca] = useState(0);
    const [laranja, setLaranja] = useState(0);
    const [choco, setChoco] = useState(0);
    const [miojo, setMiojo] = useState(0);
    const [donut, setDonut] = useState(0);

    function Mais(set){
        set+=1;
    }
    
    function Menos(nome, set){
        if (nome>0){
            set-=1;
        }
    }  

    return (
    <View style={styles.container}>
        <Text style={styles.text}>Estoque</Text>
        <View style={styles.imgs}>
            <Image source={{uri:'https://th.bing.com/th/id/OIP.PNPapONav1ccu2JUJCIdYgHaHn?rs=1&pid=ImgDetMain'}} style={styles.img}/>
            <Text style={styles.nome}>
                Maçã: {maca} <br/> Alimento saudável, fruta, vermelho. <br/>
                <Button title='+' onPress={Mais(setMaca)}></Button>
                <Button title='-' onPress={Menos(maca, setMaca)}></Button>
            </Text>
            
        </View>
        <View style={styles.imgs}>
            <Image source={{uri: 'https://th.bing.com/th/id/OIP.4nge7ZSQaMu3kH6XrzxIvwHaG1?rs=1&pid=ImgDetMain'}} style={styles.img}/>
            <Text style={styles.nome}>
                Laranja: {laranja} <br/> Alimento saudável, fruta, laranja. <br/>
                <Button title='+' onPress={Mais(setLaranja)}></Button>
                <Button title='-' onPress={Menos(laranja, setLaranja)}></Button>
            </Text>
        </View>
        <View style={styles.imgs}>
            <Image source={{uri:'https://th.bing.com/th/id/OIP.gKxlVhR-HoXVHfp_Ksw4tAHaHa?rs=1&pid=ImgDetMain'}} style={styles.img}/>
            <Text style={styles.nome}>
                Chocolate: {choco} <br/> Alimento não saudável, doce, marrom. <br/>
                <Button title='+' onPress={Mais(setChoco)}></Button>
                <Button title='-' onPress={Menos(choco, setChoco)}></Button>
            </Text>
        </View>
        <View style={styles.imgs}>
            <Image source={{uri: 'https://zonasul.vtexassets.com/arquivos/ids/3075645/VF4qT-qqCUAAAAAAAAGsuA.jpg?v=637877793864300000'}} style={styles.img}/>
            <Text style={styles.nome}>
                Miojo: {miojo} <br/> Alimento não saudável, salgado, amarelo. <br/>
                <Button title='+' onPress={Mais(setMiojo)}></Button>
                <Button title='-' onPress={Menos(miojo, setMiojo)}></Button>
            </Text>
        </View>
        <View style={styles.imgs}>
            <Image source={{uri: 'https://thumbs.dreamstime.com/b/donut-colorful-sprinkles-top-view-isolated-white-background-81327604.jpg'}} style={styles.img}/>
            <Text style={styles.nome}>
                Donut: {donut} <br/> Alimento não saudável, doce, rosa. <br/>
                <Button title='+' onPress={Mais(setDonut)}></Button>
                <Button title='-' onPress={Menos(donut, setDonut)}></Button>
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
        width: 135,
        height: 135,
        marginLeft: 5,
        borderRadius: 10,
    },
    nome:{
        fontSize:20,
        textAlign: 'center'
    }
})
