import React from 'react';

import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import products_data from './product_data.json';
import ProductsCard from './components/ProductsCard';
import Search from './components/Search';

const App = () => {
  const renderNews = ({item}) => <ProductsCard news={item}></ProductsCard>;
  const [text, setText] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>PATIKASTORE</Text>
      <Search setText={setText} />
      <FlatList
        data={products_data}
        numColumns={2}
        renderItem={renderNews} //news bir prop istediğin isimle gönderebilirsin
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerText: {fontWeight: 'bold', fontSize: 50, color: 'purple'},
});

export default App;
