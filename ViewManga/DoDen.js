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


const DoDenScreen = ({navigation}) => {
  
  return (
<ScrollView style={styles.container}>
<SafeAreaView >
<View>
<Image style={{width: '100%', height: null,aspectRatio:758/426 }} source={{
uri:'https://media.giphy.com/media/tQgk9wAGkkCwIjoGXh/giphy.gif'}}/></View>
<View><Text style={styles.word}>Học Viện Đỏ Đen</Text>
</View>
<View style={styles.khung}>

<Text style={styles.detail}><MaterialCommunityIcons name="account" size={20} color="white" /> Tác Giả :<Text style={{color: 'yellow',}}
      onPress={() => Linking.openURL('https://vi.wikipedia.org/wiki/Kakegurui_(truy%E1%BB%87n_tranh_Nh%E1%BA%ADt_B%E1%BA%A3n)')}>
  Kawamoto Homura
</Text></Text>
<Text style={styles.detail}><Ionicons name="stats-chart" size={20} color="white" /> Tình trạng: Đang cập Nhật</Text>
<Text style={styles.detail}><FontAwesome name="tags" size={16} color="white" /> Thể loại :Drama - Manga - Psychological - School Life - Shounen</Text>



</View >

        <Text style={styles.chuong}><AntDesign name="filetext1" size={16} color="white" />Nội Dung:</Text>
<ShowMore height={50} buttonColor={"#FCDB0B"} showMoreText="Read More" showLessText="Close" >
            <View style={{ justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.noidung}>Hyakkaou Academy, một học viện danh giá. Ở trong học viện này, học sinh được chia thành các tầng lớp xã hội khác nhau. Nhưng đứng trên tất cả những người khác đó là Hội học sinh - Những người cai trị trên các học sinh sinh viên bằng những TRÒ CHƠI CỜ BẠC của họ. Đó sẽ là thiên đường nếu bạn giành chiến thắng còn nếu bạn bị mất tất cả: ĐỊA NGỤC. Sử dụng thành thạo các mưu kế khi chơi đó là niềm ao ước của các học sinh, tuy vậy những kẻ đứng hàng thấp nhất, hay còn gọi là PET, sẽ phải chịu đựng những sự điên rồ mà lũ học sinh quái thai này mang lại. Nhưng có một cô gái mới chuyển tới học viện này, tên cô ấy là JYABAMI YUMEKO! ( Nói thật là con bé này vừa điên vừa bệnh hoạn =))))</Text>
            </View>
          </ShowMore>
          <Text style={styles.chuong}><FontAwesome name="list" size={14} color="white" /> Danh Sách Chương:</Text>
         
     
<ShowMore height={125} buttonColor={"#FCDB0B"} showMoreText="Show More Chapter" showLessText="Close" >
                <TouchableOpacity style={styles.itemList} 
                onPress={() => navigation.navigate('DoDenchap1')}><Text style={styles.itemText}>Chapter:1</Text>
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
export default DoDenScreen;
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



