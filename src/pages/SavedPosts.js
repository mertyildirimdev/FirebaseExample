import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Button, FlatList} from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import {PostCard} from '../components';

const SavedPosts = props => {
  const [likedPost, setLikedPosts] = useState([]);
  const userUid = auth().currentUser.uid;

  useEffect(() => {
    readUserData();
  }, []);
  function readUserData() {
    database()
      .ref(`liked/${userUid}`)
      .on('value', snapshosts => {
        let list = [];
        snapshosts.forEach(snap => {
          list.push({
            date: snap.val().date,
            id: snap.val().id,
            value: snap.val().value,
          });
        });
        setLikedPosts(list);
      });
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor:'#df78ef'}}>
      <View style={{flex: 1}}>
        <FlatList
          keyExtractor={(_, index) => index.toString()}
          data={likedPost}
          renderItem={({item, index}) => (
            <PostCard
              postBody={item.value}
              postDate={item.date}
              username={item.id}
              thisIsSaved={true}
              userLiked={() => {
                sendLikedPost(index);
              }}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export {SavedPosts};
