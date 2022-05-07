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


const TiTan = ({navigation}) => {
  
  return (
<ScrollView style={styles.container}>
<SafeAreaView >
<View>
<Image style={{width: '100%', height: null,aspectRatio:758/426 }} source={{
uri:'https://i.pinimg.com/originals/f9/6a/1a/f96a1a40d7104e4c62f9721f53067949.gif'}}/></View>
<View><Text style={styles.word}>Tấn Công Người Khổng Lồ</Text>
</View>
<View style={styles.khung}>

<Text style={styles.detail}><MaterialCommunityIcons name="account" size={20} color="white" /> Tác Giả :<Text style={{color: 'yellow',}}
      onPress={() => Linking.openURL('https://vi.wikipedia.org/wiki/Isayama_Hajime')}>
Isayama Hajime
</Text></Text>
<Text style={styles.detail}><Ionicons name="stats-chart" size={20} color="white" /> Tình trạng: Đang cập Nhật</Text>
<Text style={styles.detail}><FontAwesome name="tags" size={16} color="white" /> Thể loại :Action - Drama - Fantasy - Historical - Horror - Mystery - Shounen - Tragedy</Text>



</View >

        <Text style={styles.chuong}><AntDesign name="filetext1" size={16} color="white" />Nội Dung:</Text>
<ShowMore height={50} buttonColor={"#FCDB0B"} showMoreText="Read More" showLessText="Close" >
            <View style={{ justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.noidung}>Hơn 100 năm trước, giống người khổng lồ Titan đã tấn công và đẩy loài người tới bờ vực tuyệt chủng. Những con người sống sót tụ tập lại, xây bao quanh mình 1 tòa thành 3 lớp kiên cố và tự nhốt mình bên trong để trốn tránh những cuộc tấn công của người khổng lồ. Họ tìm mọi cách để tiêu diệt người khổng lồ nhưng không thành công. Và sau 1 thế kỉ hòa bình, giống khổng lồ đã xuất hiện trở lại, một lần nữa đe dọa sự tồn vong của con người....
Elen và cô em gái Mikasa phải chứng kiến một cảnh tượng cực kinh khủng - mẹ của mình bị ăn thịt ngay trước mắt. Elen thề rằng cậu sẽ giết tất cả những tên khổng lồ mà cậu gặp...</Text>
            </View>
          </ShowMore>
          <Text style={styles.chuong}><FontAwesome name="list" size={14} color="white" /> Danh Sách Chương:</Text>
         
     
<ShowMore height={125} buttonColor={"#FCDB0B"} showMoreText="Show More Chapter" showLessText="Close" >
                <TouchableOpacity style={styles.itemList} 
                onPress={() => navigation.navigate('TiTanChap1')}><Text style={styles.itemText}>Chapter:1</Text>
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
export default TiTan; 
const styles = StyleSheet.create({
container:{
  backgroundColor:'black',

},
word:{
  color:'white',
  fontWeight:'bold',
  fontSize:22,
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



