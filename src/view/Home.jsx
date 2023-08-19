import { View, Text, Button, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

const warlock = require('../../assets/warlock.png');

const HomeScreen = () => {
    const navigation = useNavigation()
    const navigateToConfig = () => {
        navigation.navigate("Config")
    }

    const char = useNavigation()
    const navigateToChar = () => {
        navigation.navigate("CharScreen")
    }


    function HelloWorld() {
        console.log("clicou")
    }
    return (
        <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center', marginBottom: 15, marginTop: 15,backgroundColor:'#E5E6FE' }}>
            <Text>Hellow World!</Text>
            <View style={{ flex: 0.8, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', marginLeft: 25, marginRight: 25 }}>
                <TouchableOpacity style={{ width: 155, height: 155, backgroundColor: "#691EFF", marginLeft: 15, marginRight: 15 }} onPress={navigateToChar} >

                    <Image source={warlock} style={{ width: '35%', height: '35%', backgroundColor: '#FFF', marginLeft: 10, marginTop: 10, borderRadius: 40 }}>

                    </Image>
                    <View style={{ margin: 10, backgroundColor: 'rgba(9, 239, 254, 0.3)', borderRadius: 10 }}>
                        <Text style={{ fontSize: 12, marginLeft: 3 }}>Name:</Text>
                        <Text style={{ fontSize: 12, marginLeft: 3 }}>Class:</Text>
                        <Text style={{ fontSize: 12, marginLeft: 3 }}>Race:</Text>
                        <Text style={{ fontSize: 12, marginLeft: 3 }}>Weapon:</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={HelloWorld} style={{ width: 155, height: 155, backgroundColor: "#691EFF", marginLeft: 15, marginRight: 15, }}>

                    <View style={{ width: '35%', height: '35%', backgroundColor: '#FFF', marginLeft: 10, marginTop: 10, borderRadius: 40 }}>
                    </View>
                    <View style={{ margin: 10, backgroundColor: 'rgba(9, 239, 254, 0.3)', borderRadius: 10 }}>
                        <Text style={{ fontSize: 12, marginLeft: 3 }}>Name:</Text>
                        <Text style={{ fontSize: 12, marginLeft: 3 }}>Class:</Text>
                        <Text style={{ fontSize: 12, marginLeft: 3 }}>Race:</Text>
                        <Text style={{ fontSize: 12, marginLeft: 3 }}>Weapon:</Text>
                    </View>
                </TouchableOpacity>
            </View>


            <View style={{ flex: 0.8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginLeft: 25, marginRight: 25, }}>
                <TouchableOpacity onPress={HelloWorld} style={{ width: 155, height: 155, backgroundColor: "#691EFF", marginLeft: 15, marginRight: 15 }}>

                    <View style={{ width: '35%', height: '35%', backgroundColor: '#FFF', marginLeft: 10, marginTop: 10, borderRadius: 40 }}>
                    </View>
                    <View style={{ margin: 10, backgroundColor: 'rgba(9, 239, 254, 0.3)', borderRadius: 10 }}>
                        <Text style={{ fontSize: 12, marginLeft: 3 }}>name:</Text>
                        <Text style={{ fontSize: 12, marginLeft: 3 }}>Class:</Text>
                        <Text style={{ fontSize: 12, marginLeft: 3 }}>Race:</Text>
                        <Text style={{ fontSize: 12, marginLeft: 3 }}>Weapon:</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={HelloWorld} style={{ width: 155, height: 155, backgroundColor: "#691EFF", marginLeft: 15, marginRight: 15 }}>

                    <View style={{ width: '35%', height: '35%', backgroundColor: '#FFF', marginLeft: 10, marginTop: 10, borderRadius: 40 }}>
                    </View>
                    <View style={{ margin: 10, backgroundColor: 'rgba(9, 239, 254, 0.3)', borderRadius: 10 }}>
                        <Text style={{ fontSize: 12, marginLeft: 3 }}>Name:</Text>
                        <Text style={{ fontSize: 12, marginLeft: 3 }}>Class:</Text>
                        <Text style={{ fontSize: 12, marginLeft: 3 }}>Race:</Text>
                        <Text style={{ fontSize: 12, marginLeft: 3 }}>Weapon:</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <Button title="Configurações" style={{ margin: 20, backgroundCollor: 'blue', }} onPress={navigateToConfig}></Button>
        </View>

    )

}
export default HomeScreen;
