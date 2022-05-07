import * as React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,ScrollView,Image,ImageBackground
} from 'react-native';

const image = { uri: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7a2d3816-66fc-444a-b22a-81f3a67838af/deo182h-4d8f64bf-0b0c-4f9b-8d13-a57c8d144ce1.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdhMmQzODE2LTY2ZmMtNDQ0YS1iMjJhLTgxZjNhNjc4MzhhZlwvZGVvMTgyaC00ZDhmNjRiZi0wYjBjLTRmOWItOGQxMy1hNTdjOGQxNDRjZTEuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.kplGovV3iIhR_A57G9pi3PocT73O4TNsf07CUHPoPAk" };
const MeScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
   <ImageBackground source={image}  style={{width: '100%', height: '100%'}}>

      <View style={styles.container}>
       <View >
        
          <Image 
  style={{width: 100, height: 100, borderRadius: 60/ 2,}} 
  source={{
    uri:'https://1.bigdata-vn.com/wp-content/uploads/2021/10/Ngam-Bo-Hinh-Anh-Anime-Dep-Va-Sieu-De-Thuong.jpg'
  }}
/>
      </View>
      <Text style={styles.word}> MangaTZ</Text>  
      <Text style={styles.h2}> LV:10</Text> 
      <TouchableOpacity 
           style={{
            backgroundColor:'black',
             height: 30,
             padding: 10,
             borderWidth: 3,
             width:'90px',
             borderRadius:'20px',
            }}
           >
          
           <Text style={{fontWeight:'bold',color:'yellow',textAlign:'center',marginTop: '-8px',}}>VIP</Text>
           <FontAwesome5 name="chess-king" style={styles.icon} />
           </TouchableOpacity>
            <TouchableOpacity 
          style={styles.btn}>
           <Text style={styles.text}>ĐỔI TÊN</Text>
           <FontAwesome5 name="pen" style={styles.icon2}  />
           </TouchableOpacity>

             

            <TouchableOpacity 
          style={styles.btn}>
           <Text style={styles.text}>ỦNG HỘ</Text>
           <FontAwesome name="credit-card-alt" style={styles.icon2}  />
           </TouchableOpacity>

            <TouchableOpacity 
          style={styles.btn}>
           <Text style={styles.text}>ĐỔI MẬT KHẨU</Text>
           <FontAwesome5 name="key" style={styles.icon2}  />
           </TouchableOpacity>


            <TouchableOpacity onPress={() => navigation.navigate('Login')}
          style={styles.btn}>
           <Text style={styles.text}>ĐĂNG XUẤT</Text>
           <MaterialCommunityIcons name="logout" style={styles.icon2}  />
           </TouchableOpacity>
    
      </View>
      </ImageBackground>
   
  );
   
};
export default MeScreen;
const styles = StyleSheet.create({
  text:{
textAlign:'center',
fontWeight:'bold',
color:'white',
},
   word:{
    fontSize:20,
    fontWeight: 'bold',
    paddingBottom: 3,
    color:'white'
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
   
    flex:1
  },
  h2:{
  fontWeight:'bold',
  color:'#FC44FB'

  },
  icon:{
    fontSize:'19px',
    color:'yellow',
    marginStart:'47px',
    marginTop: -20,
  },
  btn:{
 width: 240, height: 40, padding: 10, borderWidth: 1,borderRadius:'20px',marginTop:10,backgroundColor:'black',
    borderColor:'white',
  },
icon2: {
    fontSize: 21,
    marginTop: -19,
    marginStart:'190px',
    color:'white'
  },
});


