import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import Card from "../components/Card";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () =>{
    const [link, setLink] = useState(""); 
    const [judul, setJudul] = useState(""); 
    const [value, setValue] = useState("");

    const handleAddLink = () =>{
        if(link){
        AsyncStorage.setItem("judul", link);
        setLink("");
        setJudul("");
        alert("Data Saved!");
        }else{
            alert("Data is empty!");
        }
    }

    const showData = () =>{
        AsyncStorage.getItem("judul",value)
        .then((value) => {setValue(value);
        })
    }

    const deleteData = () =>{
        AsyncStorage.removeItem("judul", "value")
    }

    return(
        <View>
        
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className="pt-3 w-max flex-row justify-around items-center">
        <View className="flex-col">
            <TextInput className="p-4 my-2 bg-slate-50 rounded-full border-violet-500 border w-64 shadow shadow-black" placeholder={'Ketik Judul Link'} value={judul} onChangeText={text => setJudul(text)} />
            <TextInput className="p-4 my-2 bg-slate-50 rounded-full border-violet-500 border w-64 shadow shadow-black" placeholder={'Ketik Link'} value={link} onChangeText={text => setLink(text)} />
        </View>
        <TouchableOpacity onPress={() => handleAddLink()}>
            <View className="w-16 h-16 bg-slate-50 rounded-full justify-center items-center border-violet-500 border shadow shadow-black">
                <Text>+</Text>
            </View>
        </TouchableOpacity>
        </KeyboardAvoidingView>
        <TouchableOpacity onPress={()=>showData()}>
            <Text>Show Saved Data</Text>
        </TouchableOpacity>
            <Card text={judul} link={value}/>
        </View>
    );
}

export default Home;