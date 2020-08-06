import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

export default (styles = {
  postCard: StyleSheet.create({
    container: {
      margin: 10,
      backgroundColor: '#ab47bc',
      borderRadius:20,
    },
    headerView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#790e8b',
      padding: 10,
    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
      color:'white'
    },

    bodyView: {
      margin: 10,
    },

    bodyText: {
      fontSize: 25,
      color:'white',
      marginRight:20
    },
    touchable: {
      backgroundColor: 'red',
      margin: 5,
    },
    image:{
      position:'absolute',
      right:2,
      bottom:2,
      width: 50,
      height: 50,
      resizeMode: 'contain',
      backgroundColor: '#ab47bc',
    }
  }),

  postLists: StyleSheet.create({
    buttonView: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 5,
    },


  }),

  customModal: StyleSheet.create({
    safeArea: {
      flex: 1,
      alignItems: 'center',
      height: Dimensions.get('window').height * 0.6,
      marginVertical:200
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'white',
      width: Dimensions.get('window').width * 0.6,
      borderRadius: 10,
      padding: 20,
    },

    textViewStyle:{
      height: 300,
      borderColor: 'gray',
      borderWidth: 1,
      color: 'black',
      padding:5,
      fontSize:20,
      marginBottom:20
    }
  }),
});
