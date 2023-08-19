import {Text,View,ScrollView,} from 'react-native'




const CharScreen = () => {
    return(
        
      <ScrollView style={{backgroundColor:'#E5E6FE'}}>
        <View style={{flex:1,height:150,width:150,backgroundColor:'black', margin:15}}></View>
        <View style={{}}>
        <Text style={{fontSize:18,marginLeft:37,textDecorationLine:'underline', fontWeight:'bold'}}>Ability Score</Text>

        <View style={{flexDirection:'row', justifyContent:'space-evenly', paddingleft:15}}>

        <Text >Score</Text><Text >Ability</Text><Text >Abil Mod</Text><Text >Save Throw</Text>
        </View>
       
        <View style={{flex:2, flexDirection:'row'}}>
        <Text style={{width:40,height:40,marginLeft:37,backgroundColor:'#A7C4EB',fontSize:22,textAlign:'center',borderRadius:8,elevation:10,shadowOpacity:1}}>08</Text>
        <Text style={{width:100,height:40,marginLeft:10,backgroundColor:'#691EFF',fontSize:20,textAlign:'center',borderRadius:8,elevation:10,shadowOpacity:1}}>Strength</Text>
        <Text style={{width:40,height:40,marginLeft:20,backgroundColor:'#A7C4EB',fontSize:22,textAlign:'center',borderRadius:8,elevation:10,shadowOpacity:1}}>+0</Text>
        <Text style={{width:40,height:40,marginLeft:65,backgroundColor:'#A7C4EB',fontSize:22,textAlign:'center',borderRadius:8,elevation:10,shadowOpacity:1}}>+0</Text>
        </View>

        <View style={{ flexDirection:'row',marginTop:5}}>
        <Text style={{width:40,height:40,marginLeft:37,backgroundColor:'#A7C4EB',fontSize:22,textAlign:'center',borderRadius:8,elevation:10,shadowOpacity:1}}>14</Text>
        <Text style={{width:100,height:40,marginLeft:10,backgroundColor:'#691EFF',fontSize:20,textAlign:'center',borderRadius:8,elevation:10,shadowOpacity:1}}>Dexterity</Text>
        <Text style={{width:40,height:40,marginLeft:20,backgroundColor:'#A7C4EB',fontSize:22,textAlign:'center',borderRadius:8,elevation:10,shadowOpacity:1}}>+0</Text>
        <Text style={{width:40,height:40,marginLeft:65,backgroundColor:'#A7C4EB',fontSize:22,textAlign:'center',borderRadius:8,elevation:10,shadowOpacity:1}}>+0</Text>
        </View>

     <View style={{ flexDirection:'row',marginTop:5}}>
        <Text style={{width:40,height:40,marginLeft:37,backgroundColor:'#A7C4EB',fontSize:22,textAlign:'center',borderRadius:8,elevation:10,shadowOpacity:1}}>13</Text>
        <Text style={{width:100,height:40,marginLeft:10,backgroundColor:'#691EFF',fontSize:20,textAlign:'center',borderRadius:8,elevation:10,shadowOpacity:1}}>Const.</Text>
        <Text style={{width:40,height:40,marginLeft:20,backgroundColor:'#A7C4EB',fontSize:22,textAlign:'center',borderRadius:8,elevation:10,shadowOpacity:1}}>+0</Text>
        <Text style={{width:40,height:40,marginLeft:65,backgroundColor:'#A7C4EB',fontSize:22,textAlign:'center',borderRadius:8,elevation:10,shadowOpacity:1}}>+0</Text>
        </View>

        <View style={{ flexDirection:'row',marginTop:5}}>
        <Text style={{width:40,height:40,marginLeft:37,backgroundColor:'#A7C4EB',fontSize:22,textAlign:'center',borderRadius:8,elevation:10,shadowOpacity:1}}>11</Text>
        <Text style={{width:100,height:40,marginLeft:10,backgroundColor:'#691EFF',fontSize:22,textAlign:'center',borderRadius:8,elevation:10,shadowOpacity:1}}>Intel.</Text>
        <Text style={{width:40,height:40,marginLeft:20,backgroundColor:'#A7C4EB',fontSize:22,textAlign:'center',borderRadius:8,elevation:10,shadowOpacity:1}}>+0</Text>
        <Text style={{width:40,height:40,marginLeft:65,backgroundColor:'#A7C4EB',fontSize:22,textAlign:'center',borderRadius:8,elevation:10,shadowOpacity:1}}>+0</Text>
        </View>

        <View style={{ flexDirection:'row',marginTop:5}}>
        <Text style={{width:40,height:40,marginLeft:37,backgroundColor:'#A7C4EB',fontSize:22,textAlign:'center',borderRadius:8,elevation:10,shadowOpacity:1}}>12</Text>
        <Text style={{width:100,height:40,marginLeft:10,backgroundColor:'#691EFF',fontSize:20,textAlign:'center',borderRadius:8,elevation:10,shadowOpacity:1}}>Wisdom</Text>
        <Text style={{width:40,height:40,marginLeft:20,backgroundColor:'#A7C4EB',fontSize:22,textAlign:'center',borderRadius:8,elevation:10,shadowOpacity:1}}>+0</Text>
        <Text style={{width:40,height:40,marginLeft:65,backgroundColor:'#A7C4EB',fontSize:22,textAlign:'center',borderRadius:8,elevation:10,shadowOpacity:1}}>+0</Text>
        </View>

        <View style={{ flexDirection:'row',marginTop:5}}>
        <Text style={{width:40,height:40,marginLeft:37,backgroundColor:'#A7C4EB',fontSize:22,textAlign:'center',borderRadius:8,elevation:10,shadowOpacity:1}}>17</Text>
        <Text style={{width:100,height:40,marginLeft:10,backgroundColor:'#691EFF',fontSize:20,textAlign:'center',borderRadius:8,elevation:10,shadowOpacity:1}}>Charims</Text>
        <Text style={{width:40,height:40,marginLeft:20,backgroundColor:'#A7C4EB',fontSize:22,textAlign:'center',borderRadius:8,elevation:10,shadowOpacity:1}}>+0</Text>
        <Text style={{width:40,height:40,marginLeft:65,marginBottom:15,backgroundColor:'#A7C4EB',fontSize:22,textAlign:'center',borderRadius:8,elevation:10,shadowOpacity:1}}>+0</Text>
        </View>

        </View>


        </ScrollView>
    )

}
export default CharScreen;