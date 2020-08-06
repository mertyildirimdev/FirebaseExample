import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, FlatList, Button, Text, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import {CustomModal, PostCard} from '../components';
import database from '@react-native-firebase/database';

import styles from '../styles';

//auth().currentUser.uid

const Posts = props => {
  const [visible, setVisible] = useState(false);
  const [posts, setPosts] = useState([])
  const userUid = auth().currentUser.uid
  useEffect(()=>{
  readUserData()
  },[])

  function readUserData(){
    database().ref('/posts')
    .on('value', snapshosts=>{
      let list = []
      snapshosts.forEach((snap)=>{
        list.push({
          date: snap.val().date,
          id: snap.val().id,
          value: snap.val().value
        })
      })
      setPosts(list)
    })
  }

  function sendLikedPost(index){
    database()
    .ref(`liked/${userUid}`)
    .push(posts[index]).then((data)=>{
    })
}


  return (
    <SafeAreaView style = {{flex:1, backgroundColor:'#df78ef'}}>
      {/* TOP BAR */}
      <View style ={styles.postLists.buttonView}>
        <Button
          title="Çıkış Yap"
          onPress={() => {
            auth()
              .signOut()
              .then(() => {
                props.navigation.navigate('SignIn');
              });
          }}
        />
         <Button
          title="Kayıt Ekle"
          onPress={() => {
            setVisible(!visible);
          }}
        />
      </View>
      {/* BODY */}
      <View style = {{flex:1}}> 
        <FlatList
        keyExtractor = {(_, index)=> index.toString()}
        data = {posts}
        renderItem={({item, index})=><PostCard
        postBody = {item.value}
        postDate = {item.date}
        username = {item.id}
        thisIsSaved = {false}
        userLiked = {()=>{
          sendLikedPost(index)
        }}
        />}
        />
        <CustomModal
          isVisible={visible}
          onClicked={() => {
            setVisible(false);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export {Posts};
