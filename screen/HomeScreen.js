import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Carousel from '../components/Carousel'
import { dummyData } from '../components/data/Data'
import { Searchbar } from 'react-native-paper';
import * as React from 'react';


import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,ScrollView,Image
} from 'react-native';


const HomeScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
<ScrollView>
<SafeAreaView style={{backgroundColor:'black'}}>
<Searchbar
      placeholder="Search.."
      onChangeText={onChangeSearch}
      value={searchQuery}   />

                <Carousel data = {dummyData}/> 
       
       <View style={styles.menubar}> 
        <TouchableOpacity
          style={{width: 70, marginLeft: 1, alignItems:'center'}}
          onPress={() => navigation.navigate('Home')}>
          <MaterialCommunityIcons name="fire" size={24} color="white" />
          <Text style={{fontSize: 10, fontWeight: 'bold',color:'white'}}>Hot</Text>
        </TouchableOpacity>
       
        <TouchableOpacity
          style={{width: 70, marginLeft: 10, alignItems:'center'}}
          onPress={() => navigation.navigate('Account')}>
          <AntDesign name="book" size={24} color="white" />
           <Text style={{fontSize: 10, fontWeight: 'bold',color:'white'}}>Manga</Text>
          </TouchableOpacity>
 
        <TouchableOpacity
          style={{width: 70, marginLeft: 10, alignItems:'center'}}
          onPress={() => navigation.navigate('')}>
       
  <Ionicons name="heart-circle" size={24} color="white" />
 <Text style={{fontSize: 10, fontWeight: 'bold',color:'white'}}>Love</Text>

        </TouchableOpacity>
        <TouchableOpacity
          style={{width: 70, marginLeft: 10, alignItems:'center'}}
          onPress={() => navigation.navigate('About us')}
        >
          <MaterialIcons name="history" size={28} color="white" />
 <Text style={{fontSize: 10, fontWeight: 'bold',color:'white'}}>History</Text>
 
 
        </TouchableOpacity>
        </View>

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




                     <TouchableOpacity style={styles.itemList} onPress={() => navigation.navigate('Chuthuat')}>
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



                 <TouchableOpacity style={styles.itemList}onPress={() => navigation.navigate('TokyoScreen')}>
                <View>
                <View style={styles.itemImage}>
                <Image 
                 style={{width: 85, height: 105, borderRadius: '10px',}} 
                     source={{
                    uri:'https://media.giphy.com/media/8bGezsBKGzIl2w1YPa/giphy.gif'
                        }}/>
            
                 </View>
                 </View>
                 <View>
                 <Text style={styles.itemText}>Ngạ Quỷ Vùng Tokyo</Text>
                 <Text style={styles.itemText}>Chapter:11</Text>
                 </View>
                 </TouchableOpacity>
 
                  <TouchableOpacity style={styles.itemList} onPress={() => navigation.navigate('TiTan')}>
                <View>
                <View style={styles.itemImage}>
                <Image 
                 style={{width: 85, height: 105, borderRadius: '10px',}} 
                     source={{
                    uri:'https://i.pinimg.com/originals/96/04/c9/9604c994b3e333e87beddce4f22a5d05.gif'
                        }}/>
            
                 </View>
                 </View>
                 <View>
                 <Text style={styles.itemText}>Tấn Công Người Khổng Lồ</Text>
                 <Text style={styles.itemText}>Chapter:11</Text>
                 </View>
                 </TouchableOpacity>



                 <TouchableOpacity style={styles.itemList} onPress={() => navigation.navigate('DoDen')}>
                 
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
export default HomeScreen;
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
    margin: 2,
    color:'white',
    fontWeight:'bold',
  },
   menubar: {
    width: '100%',
    height: 62,
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor:'white',
  

    
  },
});



