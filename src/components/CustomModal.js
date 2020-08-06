import {SafeAreaView, Button, View, Dimensions} from 'react-native';
import React, {useState, useEffect} from 'react';
import Modal from 'react-native-modal';
import {TextInput} from 'react-native-gesture-handler';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import moment from "moment";
import styles from '../styles';


const CustomModal = props => {
  const [entry, setEntry] = useState('');
  const [currentUserId, setCurrentUserId] = useState("")

  const currentUser = auth().currentUser.email
  useEffect(()=>{
    setId(currentUser)
  },[])

  const setPostValue = (text) => {
    setEntry(text)
  }
  
  function setId(name){
    let index = name.indexOf("@")
    let id = name.slice(0,index)
    setCurrentUserId(id)
  }
  function writePost(id, value, date){
      database()
      .ref('/posts')
      .push({
        id,
        value,
        date
      }).then((data)=>{
        console.log(data)
      })
  }

  const sendPost = () => {
    writePost(currentUserId, entry, moment().format())
    setEntry("")
  };
  return (
    <Modal isVisible={props.isVisible}>
      <SafeAreaView style={styles.customModal.safeArea}>
        <View
          style={styles.customModal.container}>
          <TextInput
            style={styles.customModal.textViewStyle}
            numberOfLines={5}
            multiline={true}
            onChangeText={setPostValue}
            value = {entry}
          />
         <View style = {{flexDirection:'row',justifyContent:'space-around'}}>
         <Button title="Kapat" onPress={props.onClicked} />
         <Button title="Yolla" onPress={sendPost} />
         </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export {CustomModal};
