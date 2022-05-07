import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Image, Button, ScrollView, TextInput,  TouchableOpacity,ImageBackground} from 'react-native';

export const ForGotScreen = ({navigation}) => {

  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
const image = { uri: "https://data.whicdn.com/images/328903235/original.gif" };
  
  return (
  
    <ImageBackground source={image}  style={{width: '100%', height: '100%'}}>
      <View>
     
        <Text style={styles.h1}>MangaTZ</Text>
        <TextInput
          style={styles.input}
           placeholderTextColor="white"
          onChangeText={onChangeText}
          placeholder="Email Or Phone Number"
          value={text}
        />
    
        <TouchableOpacity style={styles.btnlogin} onPress={() => navigation.navigate('Login')}> 
          <Text style={styles.btnlogin}>Send Mail To Me</Text>
        </TouchableOpacity>

      </View>
      </ImageBackground>
    
  );
}

const styles = StyleSheet.create({

  input: {
    marginTop:5,
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 43,
    borderWidth: 3,
    padding: 10,
    fontSize: '14px',
    fontWeight: 'bold',
    borderRadius: '8px',
    borderColor: 'white',
    backgroundColor: '00000040',
    color: 'white',
  },
  btnlogin: {
    backgroundColor: 'red',
    color: '#fff',
    textAlign: 'center',
    height: '40px',
    alignItems: 'center',
    borderRadius: '20px',
    fontSize: '20px',
    fontWeight: 'bold',
    justifyContent: 'center',
    marginTop: 5,
  },

   h1: {
     marginTop:240,
    margin: 24,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'white',
  },
});