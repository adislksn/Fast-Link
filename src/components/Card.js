import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Card =(props)=>{
    return(
        <View className="items-center py-3">
        <View className="flex-row justify-around items-center bg-violet-200 w-10/12 rounded-full">
            <TouchableOpacity>
            <View className="flex-col">
                <Text className="py-2 font-bold text-xl">{props.text}</Text>
                <Text className="pt-1 pb-2 overflow-hidden">{props.link}</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>deleteData()}>
                <View>
                    <Text>❌</Text>
                </View>
            </TouchableOpacity>
        </View>
        </View>
    );
}

export default Card;