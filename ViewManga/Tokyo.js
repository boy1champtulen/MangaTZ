import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import ShowMore from 'react-native-show-more-button';
import { Fontisto } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';



import * as React from 'react';


import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,ScrollView,Image,ImageBackground,Linking
} from 'react-native';


const TokyoScreen = ({navigation}) => {
  
  return (
<ScrollView style={styles.container}>
<SafeAreaView >
<View>
<Image style={{width: '100%', height: null,aspectRatio:758/426 }} source={{
uri:'https://gifimage.net/wp-content/uploads/2018/06/tokyo-ghoul-kaneki-white-hair-gif-1.gif'}}/></View>
<View><Text style={styles.word}>Ngạ Quỷ Vùng Tokyo</Text>
</View>
<View style={styles.khung}>

<Text style={styles.detail}><MaterialCommunityIcons name="account" size={20} color="white" /> Tác Giả :<Text style={{color: 'yellow',}}
      onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Sui_Ishida')}>
Sui Ishida
</Text></Text>
<Text style={styles.detail}><Ionicons name="stats-chart" size={20} color="white" /> Tình trạng: Đang cập Nhật</Text>
<Text style={styles.detail}><FontAwesome name="tags" size={16} color="white" /> Thể loại :Horror - Mystery - Psychological - Seinen - Supernatural</Text>



</View >

        <Text style={styles.chuong}><AntDesign name="filetext1" size={16} color="white" />Nội Dung:</Text>
<ShowMore height={50} buttonColor={"#FCDB0B"} showMoreText="Read More" showLessText="Close" >
            <View style={{ justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.noidung}>Bối cảnh của TG đặt trong một thế giới giả tưởng nơi mà ghoul - loài quỷ chuyên ăn thịt con người và sống bí mật giữa xã hội loài người, che giấu thân phận của mình trước chính phủ. Cốt truyện của TG xoay quanh một sinh viên đại học tên là Kaneki Ken, Ken đã bị biến thành bán ghoul sau một tai nạn....</Text>
            </View>
          </ShowMore>
          <Text style={styles.chuong}><FontAwesome name="list" size={14} color="white" /> Danh Sách Chương:</Text>
         
     
<ShowMore height={125} buttonColor={"#FCDB0B"} showMoreText="Show More Chapter" showLessText="Close" >
                <TouchableOpacity style={styles.itemList} 
                onPress={() => navigation.navigate('Tokyochap1')}><Text style={styles.itemText}>Chapter:1</Text>
                 </TouchableOpacity>
                 
                <TouchableOpacity style={styles.itemList} 
                onPress={() => navigation.navigate('NgocRong')}><Text style={styles.itemText}>Chapter:2</Text>
                 </TouchableOpacity>
                 
                <TouchableOpacity style={styles.itemList} 
                onPress={() => navigation.navigate('NgocRong')}><Text style={styles.itemText}>Chapter:3</Text>
                 </TouchableOpacity>
                 
                <TouchableOpacity style={styles.itemList} 
                onPress={() => navigation.navigate('NgocRong')}><Text style={styles.itemText}>Chapter:4</Text>
                 </TouchableOpacity>
                 
                <TouchableOpacity style={styles.itemList} 
                onPress={() => navigation.navigate('NgocRong')}><Text style={styles.itemText}>Chapter:5</Text>
                 </TouchableOpacity>
                 </ShowMore>
</SafeAreaView>

</ScrollView>
  );
   
};
export default TokyoScreen;
const styles = StyleSheet.create({
container:{
  backgroundColor:'black',

},
word:{
  color:'white',
  fontWeight:'bold',
  fontSize:25,
  textAlign:'center',
  marginTop:10
  
},
noidung:{
  color:'white',
  fontSize:12
},
detail:{
  color:'white',
  marginTop:8,
  
  
},
khung:{
  marginTop:12,
  borderWidth:2,
  borderColor:'white',
  
},
chuong:{
  color:'white',
  fontWeight:'bold',
  fontSize:17

},
itemList: {
    flexDirection: 'row',
    margin: 2,
    padding: 5,
    borderRadius: 5,
    backgroundColor: 'black',
    borderWidth: 2,
    borderColor:'white',
  },
  itemText: {
    textAlign: 'right',
    margin: 2,
    color:'white',
  },

});



