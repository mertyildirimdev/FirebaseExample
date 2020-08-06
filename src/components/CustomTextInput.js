import React from 'react'
import { TextInput, View } from 'react-native'



const CustomTextInput = props => {
    const secured = props.isSecured
    return (
        <View
          style={{
            backgroundColor: '#bdbdbd',
            padding: 10,
            marginVertical: 5,
            borderRadius: 20,
          }}>
          <TextInput 
          value= {props.value}
          secureTextEntry = {secured}
          autoCapitalize = "none"
          onChangeText = {props.onChangeEmail}
          placeholder={props.placeholder} />
        </View>
    )
}

export { CustomTextInput }