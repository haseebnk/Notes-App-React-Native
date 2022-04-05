import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button , TouchableOpacity  , ImageBackground} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { NotesContext } from "../context/NotesContext"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { NavigationContainer } from '@react-navigation/native';

function ListNotesScreen({navigation}) {

    const {state,dispatch} = useContext(NotesContext)
    return (
      
            <ImageBackground source={require('../assets/22.jpg')} resizeMode="cover" style={styles.image}>
              <View style={{flex:1 ,  backgroundColor:'#203239e0'}}>
             <MaterialIcons onPress={()=>navigation.navigate('createnote')}  style={{alignSelf:'center' , margin:10}} name='add-circle'  size={hp('10%')}   color="#008E89" />
            
            {/* <Button style={{position:'absolute', bottom:5 , right :5 }} title='Add' onPress={()=>dispatch({type:"Add"})}  >

           
            </Button > */}
            <FlatList
                data={state}
                keyExtractor={item => item.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={()=> navigation.navigate('shownote' , {id:item.id})}>
                        <View style={{flexDirection:'row' , borderColor:'white' ,
                         borderWidth:1,
                         borderRadius:12,
                         margin:10,
                         padding:10,
                         justifyContent:'space-between'
                         }}>

                        <Text style={{ fontSize: 22  , color:'white' ,}} >{item.title}</Text>
                       
                        <MaterialIcons onPress={()=>dispatch({type:"Remove" ,payload:item.id })}  style={{alignSelf:'center'}} name='delete-forever'  size={hp('5%')}   color="white" />
                        </View>
                        </TouchableOpacity>
                    )
                }}
            />
</View>
</ImageBackground> 
     
    )
}
const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center",
       
      },
 })


export default ListNotesScreen