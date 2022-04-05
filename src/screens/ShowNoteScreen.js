import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TextInput, TouchableOpacity  , ImageBackground} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { NotesContext } from "../context/NotesContext";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const ShowNoteScreen = ({ route, navigation }) => {

    const { id } = route.params
    const { state } = useContext(NotesContext)

    const note = state.find((record) => {
        return record.id === id
    })
    return (
        <ImageBackground source={require('../assets/22.jpg')} resizeMode="cover" style={style.image}>
        <View style={{ flex: 1, paddingTop:20 , backgroundColor:'#203239e0' }}>
            <View style={{ backgroundColor: 'grey', margin: 15, borderRadius:12 ,  }}>
                <Text style={style.show}>{note.title}</Text>
                <Text style={style.show2} >{note.content}</Text>


            </View>

            <MaterialIcons onPress={() => navigation.navigate('editnote', {id})} style={{ alignSelf: 'center' }} name='edit' size={hp('7%')} color="white" />
        </View>
        </ImageBackground>

    )
}

const style = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center",
       
      },
    show: {
        // alignSelf:'center',
        fontSize: 23,
        marginHorizontal: 10,
        marginVertical:10,
        color: 'black',
        fontWeight: 'bold'
        
    },
    show2: {
        fontSize: 19,
        marginHorizontal: 10,
        marginVertical:10,

        fontWeight: 'bold'
    },

})


export default ShowNoteScreen