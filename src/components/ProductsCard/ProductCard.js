import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './ProductCardStyle';

const ProductCard = ({news}) => {
  //props yerine parçalayarak newsi çektik
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: news.imgURL}} />
      <View style={styles.inner_container}>
        <Text style={styles.title}>{news.title}</Text>
        <Text style={styles.price}>{news.price}</Text>
        <Text style={styles.stock}>
          {news.inStock ? 'STOKTA VAR' : 'STOKTA YOK'}
        </Text>
      </View>
    </View>
  );
};
export default ProductCard;
