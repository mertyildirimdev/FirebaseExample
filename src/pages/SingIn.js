import React, {useState} from 'react';
import {SafeAreaView, View, Button} from 'react-native';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-community/async-storage';
import {CustomTextInput} from '../components';

const SingIn = props => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const login = () => {
    auth()
      .signInWithEmailAndPassword(userEmail, userPassword)
      .then(() => {
        AsyncStorage.setItem('@USER_ID', auth().currentUser.uid)
        setUserEmail("")
        setUserPassword("")
        props.navigation.navigate('PostPage');
      });
  };

  const onChangeEmail = text => {
    setUserEmail(text);
  };

  const onChangePassword = text => {
    setUserPassword(text);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <CustomTextInput onChangeEmail={onChangeEmail} value={userEmail} placeholder="Email"/>
        <CustomTextInput onChangeEmail={onChangePassword} value={userPassword} placeholder="Şifre" isSecured={true} />
        <Button title="Giriş" onPress={login} />
        <Button
          title="Kayıt Ol"
          onPress={() => {
            props.navigation.navigate('SignUp');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export {SingIn};
