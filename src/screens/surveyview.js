import React from 'react';
import {Text,View,TouchableOpacity,SafeAreaView,StyleSheet,StatusBar,FlatList} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import {useState} from 'react';
import {useNavigation} from 'react';
import { Card,Title,Button, Paragraph } from 'react-native-paper';
import HideableView from '../components/hideableview';
import * as Constants from '../components/dummydata';


const SurveyView = ({navigation}) => {
    
    const _nameprops = navigation.getParam('id');
    const _roleprops = navigation.getParam('role');
    console.log(_roleprops)

    function selected(param){
        //if user has already answered the survey>>
        //return a message
        
        console.log(param)
        
    }
    

      const Item = ({ item }) => (
        <Card>
        <Card.Title title={item.title} subtitle={item.description} />
        <Card.Content>
          <Paragraph>{item.body}</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: item.img_loc }} />
        <Card.Actions>
          <Button onPress={()=>selected(item)}>Respond</Button>
        </Card.Actions>
      </Card>
          
      );

    
    const renderItem = ({ item }) => {
        return (
          <Item
            item={item}
          />
        );
      };

      return(


      <View style={{ flex: 1, backgroundColor: '#FFF' }}>
        <View style={{ flex: 9, justifyContent: 'center',  }}>
        <SafeAreaView style={styles.container}>
        <FlatList
          data={Constants.DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        </SafeAreaView>
      </View>

      <HideableView buttontitle='Add survey' hide={_roleprops!='admin'} 
      viewstyle={styles.footer} 
      pressevt={()=>console.log('pressed')}/>
        
      </View>
          
      )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
    footer:{ 
      flex: 1, 
      backgroundColor: '#FFF', 
      alignItems: 'center', 
      justifyContent: 'center',

    },
  });
export default SurveyView