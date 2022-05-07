import * as React from 'react';
import { useRef } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,ScrollView,Image,Button
} from 'react-native';


const Chap1NgocRongScreen = ({navigation}) => {
  const scrollRef = useRef();

const onPressTouch = () => {
  scrollRef.current?.scrollTo({
    y: 0,
    animated: true,
  });
}
  return (
    
    
<ScrollView ref={scrollRef} >
<SafeAreaView>


<Image style={{width: '100%', height: null,aspectRatio:958/1300 }} source={{
uri:'https://i.pinimg.com/564x/86/bf/7e/86bf7edf5557b441fa69859c9340e661.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1300 }} source={{
uri:'https://i.pinimg.com/474x/b2/fe/b2/b2feb283616370f514a6b1735499d6ad.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/8a/01/18/8a01184c56eae4abb321221d6cc5ce6c.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/00/83/bf/0083bf800d827c82c985979a03415fe8.jpg'}}/>

<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/e6/86/31/e6863174b7abfd03d4377b60d78aac81.jpg'}}/>

<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/ec/33/75/ec33755421fb7cbff2f8493a34629ff6.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/e6/67/40/e667401fb440c82cd94f59382264eebf.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/87/01/c7/8701c7c9941a4b5519968e1606c67467.jpg'}}/>



     

     
    


</SafeAreaView>

<View style={styles.menubar}> 
        
       
        <TouchableOpacity
          style={{width: 70, marginLeft: 10, alignItems:'center'}}
          onPress={() => navigation.navigate('Account')}>
          <MaterialIcons name="navigate-before" size={28} color="white" />
           <Text style={{fontSize: 12, fontWeight: 'bold',color:'white'}}>Chap Trước</Text>
          </TouchableOpacity>
 
       
        <TouchableOpacity
          style={{width: 70, marginLeft: 10, alignItems:'center'}}
          onPress={() => navigation.navigate('Chap2NgocRong')}
        >
          <MaterialIcons name="navigate-next" size={28} color="white" />
 <Text style={{fontSize: 12, fontWeight: 'bold',color:'white'}}>Chap Sau</Text>
 
 
        </TouchableOpacity>
        </View>

 <TouchableOpacity onPress={onPressTouch} style={styles.top}>
      <AntDesign name="upcircle" size={39} color='red'
        raised 
        reverse 
        containerStyle={styles.scrollTopButton} /></TouchableOpacity>
</ScrollView>


  );
   
};
export default Chap1NgocRongScreen;
const styles = StyleSheet.create({
  top:{
     bottom: 60,
     position:"absolute",
     alignItems: 'center',
     justifyContent: 'center',
     right: 0,
    
  },
   menubar: {
    width: '100%',
    height: 62,
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor:'white',}
  
});


