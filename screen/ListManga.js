import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';





import * as React from 'react';


import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,ScrollView,Image
} from 'react-native';


const ListManga = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
<ScrollView > 
<SafeAreaView style={{backgroundColor:'black'}}  >


                
     

                
                <TouchableOpacity style={styles.itemList} 
                onPress={() => navigation.navigate('NgocRong')}>
                
                <View>
                <View style={styles.itemImage}>
                <Image 
                 style={{width: 85, height: 105, borderRadius: '10px',}} 
                     source={{
                    uri:'https://i.pinimg.com/originals/aa/63/8a/aa638ac39b1a944cd6227cfb2199facd.gif'
                        }}/>
            
                 </View>
                 </View>
                 <View>
                 <Text style={styles.itemText}>Ngọc Rồng Siêu Cấp</Text>
                 <Text style={styles.itemText}>Chapter:11</Text>
                 </View>
                 </TouchableOpacity>
                 



                         <TouchableOpacity style={styles.itemList}>
                <View>
                <View style={styles.itemImage}>
                <Image 
                 style={{width: 85, height: 105, borderRadius: '10px',}} 
                     source={{
                    uri:'https://1.bp.blogspot.com/-jBagYhq0kUU/YSYp6a0r0MI/AAAAAAAANAI/zPgS_tc9Lc0812oIRzPg9e40JKVjBBWPACLcBGAsYHQ/s0/2.gif'
                        }}/>
            
                 </View>
                 </View>
                 <View>
                 <Text style={styles.itemText}>Chiến Thần Tự Sát Hồi Quy</Text>
                 <Text style={styles.itemText}>Chapter:11</Text>
                 </View>
                 </TouchableOpacity>



                 

                





                  <TouchableOpacity style={styles.itemList}>
                <View>
                <View style={styles.itemImage}>
                <Image 
                 style={{width: 85, height: 105, borderRadius: '10px',}} 
                     source={{
                    uri:'https://media.giphy.com/media/67YiBjmuBFxjGQLDRk/giphy.gif'
                        }}/>
            
                 </View>
                 </View>
                 <View>
                 <Text style={styles.itemText}>Hoa Sơn Tải Khởi</Text>
                 <Text style={styles.itemText}>Chapter:11</Text>
                 </View>
                 </TouchableOpacity>





                  <TouchableOpacity style={styles.itemList}>
                <View>
                <View style={styles.itemImage}>
                <Image 
                 style={{width: 85, height: 105, borderRadius: '10px',}} 
                     source={{
                    uri:'https://media.giphy.com/media/EATUPDYeDdeHfdqYL7/giphy.gif'
                        }}/>
            
                 </View>
                 </View>
                 <View>
                 <Text style={styles.itemText}>Chú Thuật Hồi Chiến</Text>
                 <Text style={styles.itemText}>Chapter:11</Text>
                 </View>
                 </TouchableOpacity>



                 <TouchableOpacity style={styles.itemList}>
                <View>
                <View style={styles.itemImage}>
                <Image 
                 style={{width: 85, height: 105, borderRadius: '10px',}} 
                     source={{
                    uri:'https://cdn.wallpapersafari.com/24/70/EXLp4v.gif'
                        }}/>
            
                 </View>
                 </View>
                 <View>
                 <Text style={styles.itemText}>Học Viện Đỏ Đen</Text>
                 <Text style={styles.itemText}>Chapter:11</Text>
                 </View>
                 </TouchableOpacity>




          

                
       
    

</SafeAreaView>

</ScrollView>
  );
   
};
export default ListManga;
const styles = StyleSheet.create({
  

  itemList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 2,
    padding: 5,
    borderRadius: 5,
    backgroundColor: 'black',
    borderWidth: 2,
    borderColor:'white',
  },


  itemText: {
    textAlign: 'right',
    margin: 5,
    color:'white',
    fontWeight:'bold',
  },
 


});



