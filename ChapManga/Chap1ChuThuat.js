import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,ScrollView,Image
} from 'react-native';
 

const Chap1ChuThuatScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
<ScrollView>
<SafeAreaView>


<Image style={{width: '100%', height: null,aspectRatio:958/1300 }} source={{
uri:'https://doctruyen3qi.com/images/image_comics/1231/112869/img_002_1628295143.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://doctruyen3qi.com/images/image_comics/1231/112869/img_002_1628295143.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://doctruyen3qi.com/images/image_comics/1231/112869/img_006_1628295154.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://doctruyen3qi.com/images/image_comics/1231/112869/img_007_1628295157.jpg'}}/> 
<Image style={{width: '100%', height: null,aspectRatio:958/1300 }} source={{
uri:'https://doctruyen3qi.com/images/image_comics/1231/112869/img_008_1628295161.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://doctruyen3qi.com/images/image_comics/1231/112869/img_008_1628295161.jpg'}}/>

<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://doctruyen3qi.com/images/image_comics/1231/112869/img_010_1628295168.jpg'}}/>

<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://doctruyen3qi.com/images/image_comics/1231/112869/img_011_1628295172.jpg'}}/>


<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://doctruyen3qi.com/images/image_comics/1231/112869/img_013_1628295178.jpg'}}/>

 



</SafeAreaView>


</ScrollView>
  );
   
};
export default   Chap1ChuThuatScreen;
const styles = StyleSheet.create({
  
});
