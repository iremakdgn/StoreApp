import {StyleSheet, Dimensions} from 'react-native';

var windowWith = Dimensions.get('window').width;
var windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    backgroundColor: '#eceff1',
    margin: 10,
    borderRadius: 10,
    width: '46%',
  },
  image: {
    height: windowHeight / 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {fontWeight: 'bold', fontSize: 18},
  price: {marginTop: 3, fontWeight: 'bold'},
  inner_container: {padding: 5},
  stock: {color: 'red'},
});
