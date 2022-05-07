import * as React from 'react';
import { Text, View, StyleSheet,SafeAreaView,TextInput,TouchableOpacity,Image,ImageBackground} from 'react-native';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { Card } from 'react-native-paper';
import { FontAwesome } from '@expo/vector-icons';

export const  Create= ({ navigation }) => {
    const [text, onChangeText] = React.useState(null);
    const image = { uri: "https://data.whicdn.com/images/328903235/original.gif" };
    const [number, onChangeNumber] = React.useState(null);
  
  return (
    <ImageBackground source={image}  style={{width: '100%', height: '100%'}}>
    
<View>
<Text style={styles.h1}>MangaTZ</Text>
</View>

<TextInput 
        style={styles.input}
        onChangeText={onChangeText}
         placeholderTextColor="white"
        placeholder="Email Or Phone Number"
        value={text}
      />

 
      
      <TextInput
      
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="PassWord"
        keyboardType="numeric"
       placeholderTextColor="white"
        secureTextEntry={true}
        
        
      />

       <TextInput
      
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Confirm Password "
         placeholderTextColor="white"
        keyboardType="numeric"
        
        secureTextEntry={true}
        
        
      />
 <TouchableOpacity style={styles.btnlogin} onPress={() => navigation.navigate('Login')}> 
        <Text style={styles.btnlogin }>Create Account</Text> 
      </TouchableOpacity>

       
   
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
 
  h1: {
    marginTop:200,
    margin: 24,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'white',
  },
  input: {
      marginTop:5,
    textAlign: "center",
    textAlignVertical: "center",
    height: 43,
    margin: 1,
    borderWidth: 3,
    padding: 10,
    fontSize:'14px',
    fontWeight:'bold',
    borderRadius:'8px',
    borderColor:'white',
    backgroundColor:'#00000040',
    color:'white',
  },
  btnlogin:{
    backgroundColor:'red',
    color:'#fff',
    textAlign:"center",
    height:'40px',
    alignItems: "center",
    borderRadius:'20px',
    fontSize:'20px',
    fontWeight:'bold',
    justifyContent: "center",
     marginTop: 5,
  },


});
