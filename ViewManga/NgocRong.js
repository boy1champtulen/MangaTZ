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


const NgocRongScreen = ({navigation}) => {
  
  return (
<ScrollView style={styles.container}>
<SafeAreaView >
<View>
<Image style={{width: '100%', height: null,aspectRatio:758/426 }} source={{
uri:'https://steamuserimages-a.akamaihd.net/ugc/914666421759702437/D02ABFCD6DADBDDFB7B62A1D31470CF0173E305D/?imw=512&imh=288&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true'}}/></View>
<View><Text style={styles.word}>Ngọc Rồng Siêu Cấp</Text>
</View>
<View style={styles.khung}>

<Text style={styles.detail}><MaterialCommunityIcons name="account" size={20} color="white" /> Tác Giả :<Text style={{color: 'yellow',}}
      onPress={() => Linking.openURL('https://vi.wikipedia.org/wiki/Toriyama_Akira')}>
  Toriyama Akira
</Text></Text>
<Text style={styles.detail}><Ionicons name="stats-chart" size={20} color="white" /> Tình trạng: Đang cập Nhật</Text>
<Text style={styles.detail}><FontAwesome name="tags" size={16} color="white" /> Thể loại :Action - Manga - Martial Arts - Shounen - Supernatural</Text>



</View >

        <Text style={styles.chuong}><AntDesign name="filetext1" size={16} color="white" />Nội Dung:</Text>
<ShowMore height={50} buttonColor={"#FCDB0B"} showMoreText="Read More" showLessText="Close" >
            <View style={{ justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.noidung}>Bốn năm sau khi Majin Buu bị tiêu diệt, hòa bình đã trở lại với Trái Đất. Goku đã ổn định cuộc sống và làm nông dân để hỗ trợ gia đình. Gia đình và bạn bè của Goku đều sống một cuộc sống yên bình. Tuy nhiên, một mối đe dọa mới xuất hiện với sự tỉnh giấc của Thần hủy diệt Beerus, người được coi là đáng sợ nhất và mạnh thứ hai trong Vũ trụ 7. Thức tỉnh sau nhiều thập kỷ chìm trong giấc ngủ, Beerus nói với trợ lý (kiêm sư phụ) của mình là Thiên sứ Whis rằng bản thân rất muốn chiến đấu với Super Saiyan God (サイヤ人ゴッド, Sūpā Saiya-jin Goddo), chiến binh huyền thoại mà Beerus đã thấy trong một lời tiên tri...</Text>
            </View>
          </ShowMore>
          <Text style={styles.chuong}><FontAwesome name="list" size={14} color="white" /> Danh Sách Chương:</Text>
         
     
<ShowMore height={125} buttonColor={"#FCDB0B"} showMoreText="Show More Chapter" showLessText="Close" >
                <TouchableOpacity style={styles.itemList} 
                onPress={() => navigation.navigate('Chap1NgocRong')}><Text style={styles.itemText}>Chapter:1</Text>
                 </TouchableOpacity>
                 
                <TouchableOpacity style={styles.itemList} 
                onPress={() => navigation.navigate('Chap2NgocRong')}><Text style={styles.itemText}>Chapter:2</Text>
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
export default NgocRongScreen;
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



