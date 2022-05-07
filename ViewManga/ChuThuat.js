import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Searchbar } from 'react-native-paper';
import ShowMore from 'react-native-show-more-button';
import { FontAwesome } from '@expo/vector-icons';

import * as React from 'react';

 
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,ScrollView,Image,ImageBackground,Linking
} from 'react-native';


const ChuthuatScreen = ({navigation}) => {
  
  return (
<ScrollView style={styles.container}>
<SafeAreaView >
<View>
<Image style={{width: '100%', height: null,aspectRatio:758/426 }} source={{
uri:'https://giffiles.alphacoders.com/211/211793.gif'}}/></View>
<View><Text style={styles.word}>Chú Thuật Hồi Chiến</Text>
</View>
<View style={styles.khung}>

<Text style={styles.detail}><MaterialCommunityIcons name="account" size={20} color="white" /> Tác Giả :<Text style={{color: 'yellow',}}
      onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Gege_Akutami')}>
  Gege Akutami
</Text></Text>
<Text style={styles.detail}><Ionicons name="stats-chart" size={20} color="white" />Tình trạng: Đang cập Nhật</Text>
<Text style={styles.detail}><FontAwesome name="tags" size={20} color="white" />Thể loại : Action-Fantasy-Horror-SchoolLife-Shounen-Supernatural</Text>



</View>
<Text style={styles.chuong}><AntDesign name="filetext1" size={16} color="white" />Nội Dung:</Text>
<ShowMore height={50} buttonColor={"#FCDB0B"} showMoreText="More" showLessText="Close" >
            <View style={{ justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.noidung}>Yuuji Itadori là một thiên tài có tốc độ và sức mạnh, nhưng cậu ấy muốn dành thời gian của mình trong Câu lạc bộ Tâm Linh. Một ngày sau cái chết của ông mình, anh gặp Megumi Fushiguro, người đang tìm kiếm vật thể bị nguyền rủa mà các thành viên CLB đã tìm thấy. Đối mặt với những con quái vật khủng khiếp bị "Ám", Yuuji nuốt vật thể bị phong ấn để có được sức mạnh của nó và cứu bạn bè của mình! Nhưng giờ Yuuji là người bị "Ám", và cậu ấy sẽ bị kéo vào thế giới ma quỷ ly kỳ của Megumi và những con quái vật độc ác ...</Text>
            </View>
          </ShowMore>
          <Text style={styles.chuong}><FontAwesome name="list" size={14} color="white" /> Danh Sách Chương:</Text>
       <ShowMore height={125} buttonColor={"#FCDB0B"} showMoreText="Show More Chapter" showLessText="Close" >
                <TouchableOpacity style={styles.itemList} 
                onPress={() => navigation.navigate('Chap1ChuThuat')}><Text style={styles.itemText}>Chapter:1</Text>
                 </TouchableOpacity>
                 
                <TouchableOpacity style={styles.itemList} 
                onPress={() => navigation.navigate('')}><Text style={styles.itemText}>Chapter:2</Text>
                 </TouchableOpacity>
                 
                <TouchableOpacity style={styles.itemList} 
                onPress={() => navigation.navigate('')}><Text style={styles.itemText}>Chapter:3</Text>
                 </TouchableOpacity>
                 
                <TouchableOpacity style={styles.itemList} 
                onPress={() => navigation.navigate('')}><Text style={styles.itemText}>Chapter:4</Text>
                 </TouchableOpacity>
                 
                <TouchableOpacity style={styles.itemList} 
                onPress={() => navigation.navigate('')}><Text style={styles.itemText}>Chapter:5</Text>
                 </TouchableOpacity>
                 </ShowMore>
    

</SafeAreaView>

</ScrollView>
  );
   
};
export default ChuthuatScreen;
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



