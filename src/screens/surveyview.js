import React from 'react';
import {Text,View,TouchableOpacity,SafeAreaView,StyleSheet,StatusBar,FlatList} from 'react-native';
import {useState} from 'react';
import HideableView from '../components/hideableview';
import CardView from '../components/cardview';
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
        <CardView title={item.title}
        description={item.description} 
        body={item.body}
        imageurl={item.img_loc}
        btntitle={'Respond'}
        evt={()=>selected(item.id)}/>
    );

    
    const renderItem = ({ item }) => {
        return (
          <Item item={item} />
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
export default SurveyView;