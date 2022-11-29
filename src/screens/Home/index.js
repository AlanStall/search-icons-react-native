import React, { useState } from 'react';
import { Image, Text, TextInput, View, StyleSheet, TouchableOpacity, ScrollView, Keyboard } from 'react-native';
import react from '../../assets/react.png';


export default function Home() {
    const [input, setInput] = useState('');
    const [data, setData] = useState([]);

    function search() {               
        
        const url = `https://api.iconfinder.com/v4/icons/search?query= ${input.replace(' ', '+')} &count=40`
        const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer GMp2q1RhhaemRzzdwHLdWE46g8Lj5gKZhsSPSQQPvLuJ73MITpFvuoIbzPU9APBU'
        }
        };

        fetch(url, options)
        .then(res => res.json())
        .then(json => setData(json['icons']))
        .catch(err => console.error('error:' + err));

        dismissKeyboard();

    };

    const dismissKeyboard = () => (
        Keyboard.dismiss()
    );

    return (
        
        <View style={{flex: 1}}>            
            
            <View style={styles.box}>
                <Image source={react} style={styles.react}/>
                <Text  style={styles.reactImage}>React Native</Text>
                <Text  style={styles.title}>Search for the icon you're looking for (in english):</Text>
                <TextInput 
                    style={styles.input} 
                    value={input}
                    onChangeText={text => setInput(text)}
                />
                <TouchableOpacity onPress={search} style={styles.button}>                
                    <Text style={styles.buttonText}>Search</Text>                
                </TouchableOpacity>
            </View>
            
            <ScrollView>
                <View style={styles.wholeBoxIcons}>
                    {data.map((e) => 
                        <View 
                            key={e['raster_sizes'][0]['formats'][0]['preview_url']} 
                            style={styles.iconsBox}>
                        <Image  
                        source={{uri: e['raster_sizes'][0]['formats'][0]['preview_url']}}
                        style={{
                            width: 16, 
                            height: 16, 
                            margin: 30,                            
                            }}>                                
                        </Image>
                        </View>)}
                </View>
            </ScrollView> 

        </View>
        
    )
};

const styles = StyleSheet.create({
    react: {
        marginBottom: 5
    },
    reactImage: {
        marginBottom: 25,
        fontWeight: 'bold',
        color: '#39D1F1'
    },
    box: {
        alignItems: 'center',
        backgroundColor: '#f6f6f6',
        marginVertical: 16,
        marginHorizontal: 16,
        padding: 10,
        borderRadius: 4,

        //for Android
        elevation: 4,

        // for iOS
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62
    },
    title: {        
        textAlign: 'center',
        color: '#464646',
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: 30        
    },
    input: {
        width: 300,
        height: 50,
        borderWidth: 1,
        borderRadius: 4,
        margin: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderColor: '#464646'
    },
    button: {        
        width: 200,        
        marginLeft: 10,
        backgroundColor: '#3BD6F6',
        borderRadius: 4
    },
    buttonText: {
        textAlign:"center", 
        fontSize: 20,          
        color: '#ffffff',
        padding: 10
    },
    wholeBoxIcons: {
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        justifyContent: 'center'
    },  
    iconsBox: {
        width: 50, 
        height: 50, 
        backgroundColor: '#EAEAEA', 
        margin: 10, 
        borderRadius: 6, 
        justifyContent: 'center', 
        alignItems: 'center', 
        
        //for Android
        elevation: 4,

        // for iOS
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62
    }
});