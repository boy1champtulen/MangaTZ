import { FontAwesome } from '@expo/vector-icons'; 
import * as React from 'react';
import { Fontisto } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,Image,ScrollView,ImageBackground
} from 'react-native';

const SettingsScreen = ({ route, navigation }) => {
  return (
    
    <ScrollView style={{ backgroundColor:'black',padding: 16 }}>
    
    <Image 
  style={{width: '100%', height: '100%', }} 
  source={{
    uri:'https://gamek.mediacdn.vn/2016/tumblr-ngbasnf0bg1qze3hdo1-500-1467471700489.gif'
  }}
/>
      <View >
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
       
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('AboutUs')}>
            <Text style={styles.h2}>About Us</Text>
            <Entypo name="info-with-circle" style={styles.icon} />
          </TouchableOpacity>
           <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Report')}>
            <Text style={styles.h2}>Report </Text>
            <MaterialIcons name="report"style={styles.icon}/>
          </TouchableOpacity>
        </View>
    
      </View>

    </ScrollView>

  );
};
const styles = StyleSheet.create({
  button: {
    borderRadius:'25px',
    textAlign:'center',
    backgroundColor: '#007bf57d',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
  h2:{
    color:'white',
    fontWeight:'bold',
    textAlign:'center',
  },

 icon: {
    fontSize: 26,
    marginTop: -20,
    marginEnd:'1111px',
    color:'white',
  },
});
export default SettingsScreen;
