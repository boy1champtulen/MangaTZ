import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,ScrollView,ImageBackground,Image,TextInput
} from 'react-native';


const ReportScreen = ({navigation}) => {
  const image = { uri: "https://64.media.tumblr.com/a36967f4b6770ce0dc921d6f8640f0ff/7a8b11d03e225bd2-98/s500x750/6b5ad9e7c0cca08ac7e640270aaf0b1622e4eda4.gifv" };
  const [searchQuery, setSearchQuery] = React.useState('');
  const [text, onChangeText] = React.useState(null);
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (

    
    <ImageBackground source={image}  style={{width: '100%', height: '100%',}}>
    
<ScrollView>

<View style={styles.container}>

<Text style={styles.top}>Report</Text>
<View >
<TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholderTextColor="white"
          placeholder="Type Your Email"
          value={text}
        />
        <TextInput
          style={styles.inputext}
          placeholderTextColor="white"
          placeholder="Type your Problem "
          multiline={true}
          numberOfLines={4}
        />
        <TouchableOpacity style={styles.btnlogin} > 
        
          <Text style={styles.btnlogin}>Send Email</Text>
        </TouchableOpacity>
        </View>
     
</View>
   

</ScrollView>

</ImageBackground>


  );
   
};
export default ReportScreen;
const styles = StyleSheet.create({


  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'rgb(14 13 13 / 31%)',

   
  },

  input: {
    
  
    height: 43,
    borderWidth: 3,
    padding: 10,
    fontSize: '14px',
    fontWeight: 'bold',
    borderRadius: '8px',
    borderColor: '#BF1DF7',
    color: 'white',
    backgroundColor:'#1616166b',
    
  },
  inputext: {
    marginTop:5,
    height: 190,
    borderWidth: 3,
    padding: 10,
    fontSize: '14px',
    fontWeight: 'bold',
    borderRadius: '8px',
    borderColor: '#BF1DF7',
    color: 'white',
    backgroundColor:'#1616166b',
    
    
  },
  btnlogin: { 
    backgroundColor: '#BF1DF7',
   color: '#fff', textAlign: 'center', height: '40px', 
   alignItems: 'center', borderRadius: '20px', fontSize: '20px', 
   fontWeight: 'bold', justifyContent: 'center', marginTop: 5, },
  top:{
    color:'#C862FB',
    fontSize:30,
    marginTop:95,
    fontFamily: 'Inter_900Black'
    

  }
});


