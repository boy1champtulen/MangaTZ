import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,ScrollView,Image
} from 'react-native';


const Chap1TokyoScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
<ScrollView>
<SafeAreaView>


<Image style={{width: '100%', height: null,aspectRatio:958/1300 }} source={{
uri:'https://i.pinimg.com/564x/7c/17/a0/7c17a0ff2b3e14699e8df08391c8aba7.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1300 }} source={{
uri:'https://i.pinimg.com/564x/69/d1/df/69d1df08cb053319fcb6496fe2ae125f.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/42/1e/f3/421ef3b341be6538d6c013afdb9aa514.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/ad/55/e2/ad55e268d3f5b5393005a4cc1283a1ed.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/b8/5d/03/b85d03bfd50c07bbcb62b16d169ecfc9.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/2a/07/5c/2a075c1e488935d8f4c55c6c4f3b9eaf.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/ad/3a/81/ad3a815ce05ee0e1de721daeb238b661.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/2b/81/23/2b8123bba603a8cd9d1c0e693b3a5f2c.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/aa/6c/48/aa6c48b20f45571bfa949513cf2afb40.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/99/48/ee/9948ee16fdda750008467eea6097a781.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/d9/93/ca/d993ca1b311b6838e762caaa22a15221.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/7d/46/1d/7d461dc99e6bac6f17ea6d7733a4ecfb.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/05/3d/22/053d22bd7269e065d16cb62d8a2dd44e.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/4f/7d/2e/4f7d2e3de567b84e58504d67de3ca9c1.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/8b/ed/09/8bed09485f66227288d70d4f5d73888c.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/e8/78/d2/e878d21e98492e9eaab54308d77164cd.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/00/d9/fa/00d9fa7de294cc530d1806be8c0a8aac.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/4e/06/96/4e06962926183487fc8ba16afc42fbd9.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/75/ff/35/75ff35e39dfa4d9e015a656d95f7896d.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/44/8a/8e/448a8e4a6a99353f4ac281315e72d2cd.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/7f/4c/2a/7f4c2a9d2036fa2e7169aee3abbfdd89.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/df/48/59/df4859cc11ea3bdfec3eacafba1d30a0.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/3e/d1/03/3ed1037fa47c734437202579c24b8724.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/d7/f3/8b/d7f38bc0288cf14cf27d2c8626b4e294.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/56/0c/1c/560c1c989bd9024e0e6d54e6b3a71f08.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/65/a1/e9/65a1e9f461ff2d90a7ccbb20391b9185.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/00/c4/87/00c48758098ba07afe73e7a7edad8ba3.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/63/ed/b2/63edb29f457d6b166eae375fc98186ad.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/c4/a9/a4/c4a9a4b523e98a1735eed38b0dd94e66.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/e8/82/ae/e882ae2134c8549ebfb3493f3ce56e0c.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/3e/95/f8/3e95f8f689be11671886c22f423c5546.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/ec/1f/b8/ec1fb899518a1829b5b1a583133b864b.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/81/84/43/818443a712f7c04f873500d01b8ac79b.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/8e/09/34/8e09347d4b09e1419a60bf58d5a0a4e7.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/e4/73/16/e473168cee1c323a94b4761253b68f01.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/f8/de/78/f8de78787d49b80eb93f2115c09222b9.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/d9/6e/bd/d96ebd9a8d58e5302a36bc251f949faf.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/45/8d/46/458d46b5d018d9b4df7582e7e07fd73f.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/ce/6e/c4/ce6ec4a75e2431d5418cfe1acb88c53f.jpg'}}/>
<Image style={{width: '100%', height: null,aspectRatio:958/1500 }} source={{
uri:'https://i.pinimg.com/564x/e6/6c/23/e66c23ea8ef6ecc4546fa7ebc8fe76ef.jpg'}}/>










</SafeAreaView>

</ScrollView>
  );
   
};
export default  Chap1TokyoScreen;
const styles = StyleSheet.create({
  
});


