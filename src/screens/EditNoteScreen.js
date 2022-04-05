import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TextInput, TouchableOpacity , ImageBackground } from 'react-native';
import { NotesContext } from "../context/NotesContext"

const EditNoteScreen = ({navigation , route}) => {

    const {id} = route.params

   
    const { state, dispatch } = useContext(NotesContext)

    const ParticularNote = state.find((record)=>{ 
        return record.id ===id
    })

    const [title, setTitile] = useState(ParticularNote.title)
    const [content, setContent] = useState(ParticularNote.content)
    return (
        <ImageBackground source={require('../assets/22.jpg')} resizeMode="cover" style={style.image}>
        <View style={{ flex: 1, backgroundColor:'#203239e0' }}>
            <Text style={style.titlee}>Update Title</Text>
            <TextInput
                style={style.input}
                value={title}
                onChangeText={(text) => (setTitile(text))}
            >

            </TextInput >
            <Text style={style.titlee}>Update Content</Text>


            <TextInput
                style={style.inputContent}
                value={content}
                onChangeText={(text) => (setContent(text))}
                multiline={true}
                numberOfLines={5}
            >

            </TextInput>

            <TouchableOpacity
                onPress={()=>{
                    dispatch({type:"Update",payload:{id ,title , content}})
                    navigation.navigate('listnotes')
                }} 
        
                        style={style.Buutton}>
            <Text style={{ color: 'white', fontSize: 23, textAlign: 'center', marginTop: 5, }}>Update</Text>
        </TouchableOpacity>


        </View >
        </ImageBackground>
    )
}


const style = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center",
       
      },
   Buutton: {
        fontSize: 20,
        height: 50,
        color: 'white',
        backgroundColor: '#008E89',
        width: '70%',
        alignSelf: 'center',
        borderRadius:12,
        margin:15

    },
    input: {
        height: 50,
        width: '90%',
        backgroundColor: 'white',
        color: 'black',
       
        fontSize: 23,
        padding: 10,
        margin: 20,
        borderRadius: 12,

    },
    inputContent: {

        width: '90%',
        backgroundColor: 'white',
        color: 'black',
       
        fontSize: 23,
        borderRadius: 12,
        margin: 20

    },
    titlee: {
        color: 'white',
        fontSize: 22,
        fontWeight: '600',
        margin: 15

    }
})




export default EditNoteScreen