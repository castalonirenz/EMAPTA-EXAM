import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, Linking } from 'react-native'
import moment from 'moment'
const Details = (props) => {
    const params = props.route.params.data
    

    const openLink = (data) => {
      Linking.canOpenURL(params.url).then((supported) => {
        if (supported) {
          Linking.openURL(params.url);
        } else {
          //
        }
      });
    };

    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: params.urlToImage}} />
        <View style={{marginTop: 20}}>
          <Text style={styles.title}>{params.source.name}</Text>
          <Text>
            {moment(params.publishedAt).format('MMMM Do YYYY, h:mm:ss a')}
          </Text>

          <Text style={[styles.title, {marginTop: 20}]}>{params.title}</Text>
          <Text style={styles.content}>{params.content}</Text>
            <Text onPress={openLink} style={styles.url}>{params.url}</Text>
        </View>
      </View>
    );
}


export default Details

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor:"#fff",
    flex: 1
   
  },
  url:{
    textDecorationLine:"underline",
    color:"blue",
    marginTop: 20
  },
  content: {
    fontSize: 16,
    marginTop: 10
  },
  image: {
    height: '50%',
    width: '100%',
    borderRadius: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  description: {
    marginTop: 10,
  },
});
