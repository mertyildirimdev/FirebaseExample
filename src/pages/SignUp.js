import React, {useState} from 'react';
import {SafeAreaView, View, Button, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

import {CustomTextInput} from '../components';

const SingUp = props => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [cuserPassword, setCUserPassword] = useState('');

  const sign = () => {
    if (userPassword === cuserPassword) {
      auth()
        .createUserWithEmailAndPassword(userEmail, userPassword)
        .then(() => {
          Alert.alert('Kullanıcı oluşturuldu');
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      Alert.alert(
        'Hata',
        'Düzgün bir email girdiğinizden veya şifrelerin aynı olduğundan emin olunuz.',
      );
    }

    props.navigation.navigate('SignIn');
  };

  const onChangeEmail = text => {
    setUserEmail(text);
  };

  const onChangePassword = text => {
    setUserPassword(text);
  };

  const onChangeCPassword = text => {
    setCUserPassword(text);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <CustomTextInput onChangeEmail={onChangeEmail} placeholder="Email" />
        
        <CustomTextInput onChangeEmail={onChangePassword} placeholder="Şifre" isSecured={true} />
        <CustomTextInput onChangeEmail={onChangeCPassword} placeholder="Şifre" isSecured={true}/>
        <Button title="Kayıt Ol" onPress={sign} />
      </View>
    </SafeAreaView>
  );
};

export {SingUp};
