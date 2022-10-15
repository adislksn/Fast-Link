import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Main = () => {
    return (
        <View className="flex-1 justify-center items-center"  style={{backgroundColor:'rgba(0,0,0,0.3)'}}>
                <View className="flex flex-col w-4/5 px-8 pt-9 pb-5 justify-center items-start bg-white rounded-3xl" style={{shadowOffset:{width:10,height:10},shadowColor:"#000", shadowOpacity:1, shadowRadius:20, elevation:15,}}>
                    <View className="w-full p-2">
                        <Text className="font-bold font-sans text-lg pb-2">E-mail SSO ITERA</Text>
                    <View>
                    <TextInput className="bg-gray-50 border border-gray-300 text-gray-900 font-sans text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Masukkan e-mail anda"/>
                    </View>
                        <Text className="font-bold font-sans text-lg pb-2">{"\n"}Password</Text>
                    <View>
                    <TextInput className="bg-gray-50 border border-gray-300 text-gray-900 font-sans text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        secureTextEntry={true}
                        placeholder="Masukkan password anda"/>
                    </View>
                        <Text className="font-bold font-sans text-lg pb-2">{"\n"}Captcha</Text>
                    <View>
                        <View className="bg-yellow-100 w-full py-2 mb-2 rounded-lg">
                        <Text className="font-sans ml-3">Hasil dari 80 x 40?</Text>
                        </View>
                    <TextInput className="bg-gray-50 border border-gray-300 text-gray-900 font-sans text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Masukkan jawaban yang tepat"/>
                    </View>
                    <TouchableOpacity className="items-center justify-center self-center py-3 rounded-md w-11/12">
                        <LinearGradient colors={['#FFC0C0','#FD2B2B']} className="items-center justify-center self-center py-3 rounded-md w-11/12">
                        <Text className="text-white font-sans">Masuk</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <Text className="self-center font-sans">Lupa Password? Klik <Text className="text-red-600">disini</Text></Text>
                    </View>
                </View>
        </View>
    );
}

export default Main;