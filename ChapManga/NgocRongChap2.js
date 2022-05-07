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


const Chap2NgocRongScreen = ({navigation}) => {
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
uri:'https://i.pinimg.com/564x/bc/43/f6/bc43f659c6a61baa567be35e42394065.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1300 }} source={{
uri:'https://i.pinimg.com/564x/6d/8d/e8/6d8de89eee2280f1a8bbd14f0cc990b9.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/06/67/84/066784b731dd08d88ecf60cebda52508.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/85/24/eb/8524eb16f972d031b162cf4d4ad29d86.jpg'}}/>

<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/d1/02/7c/d1027c17be9c62776a9a1ff8507a593f.jpg'}}/>

<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/dc/c6/2e/dcc62e10ce5c9483bea96d504bc52b38.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/5c/88/8a/5c888ab330b493d3c511c13aa10741ce.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/5c/88/8a/5c888ab330b493d3c511c13aa10741ce.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/af/3b/82/af3b829b6520908c17012bef554dcce8.jpg'}}/>




     

     
    


</SafeAreaView>

<View style={styles.menubar}> 
        <TouchableOpacity 
          style={{width: 70, marginLeft: 10, alignItems:'center'}}
          onPress={() => navigation.navigate('Chap1NgocRong')}>
          <MaterialIcons name="navigate-before" size={28} color="white" />
           <Text style={{fontSize: 12, fontWeight: 'bold',color:'white'}}>Chap Trước</Text>
          </TouchableOpacity>
 
       
        <TouchableOpacity
          style={{width: 70, marginLeft: 10, alignItems:'center'}}
          onPress={() => navigation.navigate('')}
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
export default Chap2NgocRongScreen;
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