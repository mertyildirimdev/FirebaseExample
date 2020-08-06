import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from '../styles';
import moment from 'moment';

const PostCard = props => {
  const isThisSaved = props.thisIsSaved;
  return (
    <View style={styles.postCard.container}>
      <View style={styles.postCard.headerView}>
        <Text style={styles.postCard.headerText}>{props.username}</Text>
        <Text style={styles.postCard.headerText}>
          {moment(props.postDate)
            .startOf('minute')
            .fromNow()}
        </Text>
      </View>
      <View style={styles.postCard.bodyView}>
        <Text style={styles.postCard.bodyText}>{props.postBody}</Text>
      </View>
      <View style={{alignItems: 'flex-end'}}>
        {isThisSaved ? null : (
          <TouchableOpacity
            style={styles.postCard.touchable}
            onPress={props.userLiked}>
            <Image
              style={styles.postCard.image}
              source={require('../../assets/images/saved.png')}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export {PostCard};
