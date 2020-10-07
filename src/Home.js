import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
  Linking,
  RefreshControl
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {getNewsApi} from './Api';
import moment from 'moment';
const Home = (props) => {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
      setLoading(true)
    getNewsApi().then((res) => {
      setNewsList(res);
      setLoading(false)
    });
  };

  
  const openLink = (data) => {
    Linking.canOpenURL(data).then((supported) => {
      if (supported) {
        Linking.openURL(data);
      } else {
        //    
      }
    });
  };

  const renderNews = ({item, index}) => {
    return (
      <TouchableOpacity onPress={() => props.navigation.navigate('NewsDetails', {data: item})} style={styles.newsContainer}>
        <Text onPress={() => openLink(item.url)} style={styles.title}>
          {item.title}
        </Text>
        <Image
          resizeMode="stretch"
          source={{uri: item.urlToImage}}
          style={styles.image}
        />
        <Text style={styles.title}>{item.source.name}</Text>
        <Text style={[styles.date, {alignSelf: 'flex-start'}]}>
          {moment(item.publishedAt).format('MMMM Do YYYY, h:mm:ss a')}
        </Text>
        <TouchableOpacity>
          <Text style={styles.description}>{item.description}</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={newsList}
        extraData={newsList}
        renderItem={renderNews}
        // refreshing={loading}
         refreshControl={
          <RefreshControl titleColor={"#000"} title="Loading..." refreshing={loading} onRefresh={getList} color={"#000"} tintColor={"#000"} />
         }
      
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  newsContainer: {
    marginTop: 20,
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderBottomColor: '#c5c5c5',
    alignSelf: 'center',
    width: '95%',
    padding: 20,
    alignItems: 'center',
  },
  image: {
    borderRadius: 5,
    backgroundColor: '#c5c5c5',
    height: Dimensions.get('screen').height * 0.2,
    width: '90%',
    marginTop: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  description: {
    marginTop: 10,
  },
  date: {
    fontStyle: 'italic',
    marginTop: 20,
    fontWeight: 'bold',
  },
});
