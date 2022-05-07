import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,ScrollView,ImageBackground
} from 'react-native';


const NotificationScreen = ({navigation}) => {
  const image = { uri: "https://acegif.com/wp-content/uploads/2021/4fh5wi/animated-wallpaper-240x320px-acegif-52.gif" };
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <ImageBackground source={image}  style={{width: '100%', height: '100%'}}>
<ScrollView>

      <View>
     
        <Text style={styles.h1}>MangaTZ</Text>
        
    
        

      </View>
     

</ScrollView>
 </ImageBackground>
    
  );
   
};
export default NotificationScreen;
const styles = StyleSheet.create({
  
});


