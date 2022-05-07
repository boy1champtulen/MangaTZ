import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,ScrollView,Image
} from 'react-native';


const TiTanChap1 = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
<ScrollView>
<SafeAreaView>


<Image style={{width: '100%', height: null,aspectRatio:958/1300 }} source={{
uri:'https://i.pinimg.com/564x/86/27/5a/86275ac37baaac659662b4b578f425d7.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1300 }} source={{
uri:'https://i.pinimg.com/564x/4a/d6/28/4ad62870ff3dcbf4f9a18d429d7130f5.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/83/06/e2/8306e286c0e82580e23118bb044c2b69.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/07/47/87/07478703d3d46b57874a94c8ed915b5a.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/12/2f/3b/122f3bffd539935ab72798b073043010.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/56/99/11/569911ba3fdd5faf633eb5371ab44e5c.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/7b/be/0f/7bbe0f133af3aa2d79d349134f972e0c.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/9a/1f/1c/9a1f1c3848c043a8862764eed8a10d6a.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/2a/b1/88/2ab1880dd4193c2f5bad00454c3db6a0.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/13/50/d3/1350d32b0c3df99b3e5d165ab3bebde2.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/0d/92/f0/0d92f09d4f48beae7d04aa83911f6d69.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/e3/a7/fa/e3a7faa0ed8cdc6a1b1b10b800bd1eba.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/60/cd/a1/60cda1fbbe9560f1eb4a2d68eeafb1cb.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1200 }} source={{
uri:'https://i.pinimg.com/564x/02/9e/ce/029ecef2084c3a609cd8a85b2fb4d747.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/b9/83/d7/b983d71f2e5faac825e2be1226307a31.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/37/f0/72/37f0725b1516f60470de0ee00fd0442a.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/ae/4f/e5/ae4fe5c9361999e6ded7163a16c858a8.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/a2/25/ab/a225abf965b84438d78ee62f50bcd1c0.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/1e/50/b6/1e50b64f5b1a028289039ceaac05bbd7.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/65/02/0c/65020c18a48405709a00386c1cd8991d.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/bd/56/fe/bd56fe6dccacdb361730b5bb23bf45d5.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/7e/9f/02/7e9f02fa450fd371105e7d13126c5e38.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/ab/38/b1/ab38b1712c383990ce16f80987163349.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/78/cb/3f/78cb3fb19d294e1386706a00d4feda11.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/45/c7/31/45c731d2f906cfcacc207da2d1f68296.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/e2/b0/6e/e2b06ee4d61d19cd6eb4b0d36b8487aa.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/cd/28/e8/cd28e8165a2aa83a99879c517d3b8e81.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/62/62/17/6262170f30d42a4db0ba1f030b69442c.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/fb/ea/05/fbea0587f85f0ca649c1d33860d9a430.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/c2/a4/49/c2a4494577ab10326feb989106ca0a25.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/28/bf/f2/28bff21e5d9c8e8521aa6e2ad9fd613c.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/59/79/8e/59798ebb4f0d992f496ab4890fe9967a.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/fc/5e/da/fc5eda57152b6486d2035d49d93dc7b8.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/1b/85/ae/1b85aed912ac1727c6fe167ba3a36ad9.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/05/07/6c/05076c13a0cdbe818f6c4d3021ae9e54.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/49/4d/3e/494d3e9ec7825827a6c21f32f47f8c4e.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/ad/d8/ae/add8ae3773f89ef5f55ba7edf9d8b81b.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/f9/7e/b1/f97eb1d343a8a75a009ebda41f90c3fa.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/4b/2c/00/4b2c00e1480303037927c64df0b631c4.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/a6/ef/5c/a6ef5c848be55534cbcf9375db937ff4.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/43/79/15/4379157a6bbda67f2e8119503c445d11.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/b1/bc/68/b1bc680c4cc0079503c1c2f9fae3577e.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/e5/35/34/e53534b7fb1f2952a0edb118269e5dc7.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/bc/73/5b/bc735b44afd3241ad814736102fc9d0d.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/e2/50/c3/e250c364ca4536cbd52d8273bfbc6136.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/0a/85/25/0a8525886144d08db29f67c704f18978.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/900 }} source={{
uri:'https://i.pinimg.com/564x/79/90/2a/79902a68491a7319a9a1cf6438b30804.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/db/0f/41/db0f415097becdad746d07dd4a1083f2.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/89/84/47/89844787ffc54b9b4d2e2b39c71c766c.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/37/f6/d4/37f6d4f9f853661274d04b9080a085bc.jpg'}}/>




</SafeAreaView>

</ScrollView>
  );
   
};
export default  TiTanChap1;
const styles = StyleSheet.create({
  
});


