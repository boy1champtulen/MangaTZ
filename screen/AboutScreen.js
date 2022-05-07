
import * as React from 'react';
import { View, Text, SafeAreaView,ScrollView,Image,StyleSheet,ImageBackground} from 'react-native';

const AboutScreen = () => {
  const image = { uri: "https://64.media.tumblr.com/2c33f4e6e264cad6fe5b2695cb30472d/66017b3acf2b1d6f-2e/s640x960/60c8d5829487588f0038c34fe5dbb54531fcb2b8.gif" };
  return (
    <ImageBackground source={image}  style={{width: '100%', height: '100%'}}>
    <ScrollView style={styles.container}>
    
    <Text style={styles.h1}>Founder Member </Text>
      <Image 
  style={{width: 200, height: 200, borderRadius: '160px',marginTop:20}} 
  source={{
    uri:'https://scontent.fsgn5-12.fna.fbcdn.net/v/t1.6435-9/113680549_2618130655183176_7865923363321541033_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=4UiOborfO-sAX-puJB5&_nc_ht=scontent.fsgn5-12.fna&oh=00_AT_FAk89R93_kSpR34FgyhxmufAk2zOIrfYfnGOtrkIK5w&oe=62791E34'
  }}
/>
     <Text style={styles.h2}>Trịnh Minh Thuận</Text>
     <Text style={styles.h2}>1900008754</Text>

     <Image 
  style={{width: 200, height: 200, borderRadius: '160px',marginTop:20}} 
  source={{
    uri:'https://scontent.fsgn5-12.fna.fbcdn.net/v/t1.6435-9/187883440_1438727526479411_2431985384591461312_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=CG7GYCaj_TAAX-4c4cx&_nc_ht=scontent.fsgn5-12.fna&oh=00_AT-Vu5ie4N7dpdpQBcfj9lda2YIbKuUGFrs3lrRYBFxTrw&oe=627B813A'
  }}
/>
     <Text style={styles.h2}>Nguyễn Công Huy</Text>
     <Text style={styles.h2}>1911548384</Text>

     <Image 
  style={{width: 200, height: 200, borderRadius: '160px',marginTop:20}} 
  source={{
    uri:'https://scontent.fsgn5-9.fna.fbcdn.net/v/t31.18172-8/27907792_1946082622372645_2251406733257319829_o.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=htQFxTgZKlIAX9KWZ0d&_nc_ht=scontent.fsgn5-9.fna&oh=00_AT-N4W0dE_hNDnYVA4jxj28nHsW6NohDvIcWenAOb9FJ6Q&oe=6279A444'
  }}
/>
     <Text style={styles.h2}>Lê Thanh Tú</Text>
     <Text style={styles.h2}>1900000141</Text>

     <Image 
  style={{width: 200, height: 200, borderRadius: '160px',marginTop:20}} 
  source={{
    uri:'https://scontent.fsgn5-1.fna.fbcdn.net/v/t39.30808-6/279362371_1465637930520280_4597311157510690193_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=rJaGlfT4EA8AX8yLOxL&_nc_ht=scontent.fsgn5-1.fna&oh=00_AT-ycS5vaEpUhiNFpbM-EPx2MicgugSgn1JbuwktxaQeag&oe=627493A6'
  }}
/>
     <Text style={styles.h2}>Phan Hồng Thịnh</Text>
     <Text style={styles.h2}>1900007549</Text>

     <Image 
  style={{width: 200, height: 200, borderRadius: '160px',marginTop:20}} 
  source={{
    uri:'https://scontent.fsgn5-15.fna.fbcdn.net/v/t1.6435-9/126354160_2829654373936441_2221931597777622567_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=XNa8JXsaDL4AX8ee2I2&_nc_ht=scontent.fsgn5-15.fna&oh=00_AT90aKEemcoHxOhrwF4KqecQxqf868kLZPogamg1PZ_wAg&oe=62795B53'
  }}
/>
     <Text style={styles.h2}>Phạm Ngọc Thành</Text>
     <Text style={styles.h2}>1911549027 </Text>


  
    </ScrollView>
    </ImageBackground>
  );
};
export default AboutScreen;
const styles = StyleSheet.create({
  container:{
    flex:1,

    alignItems: 'center',
    
  },
  h1:{
    color:'white',
    textAlign:'center',
    fontWeight:'bold',
    fontSize:'26px',
  },
  h2:{
    textAlign:'center',
    color:'white',
    fontSize:'20px',
    fontWeight:'bold',
  },
});

