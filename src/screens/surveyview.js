import React from 'react';
import {Text,View,TouchableOpacity,SafeAreaView,StyleSheet,StatusBar,FlatList} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import {useState} from 'react';
import {useNavigation} from 'react';
import { Card,Title,Button, Paragraph } from 'react-native-paper';
import HideableView from '../components/hideableview';

const SurveyView = ({navigation}) => {
    
    const _nameprops = navigation.getParam('name');
    const _roleprops = navigation.getParam('role');
    console.log(_roleprops)

    function selected(param){
        console.log(param)
        
    }
    
    const DATA = [
        {
          id: "1",
          title: "Old age and mobility",
          description:"newly added survey",
          body:"How does old age influence cross-border mobility",
          img_loc:"https://thumbs.dreamstime.com/b/unhappy-disappointed-customer-giving-low-rating-negative-feedback-survey-unhappy-disappointed-customer-giving-low-131140535.jpg",
        },
        {
          id: "2",
          title: "Generic survey",
          description:"newly added survey",
          body:"Did Covid really cause a business disruption",
          img_loc:"https://www.cansolveckd.ca/wp-content/uploads/2018/05/pe-survey-highlights.jpg",
        },
        {
          id: "3",
          title: "Generic survey",
          description:"newly added survey",
          body:"Wellness in the coming days",
          img_loc:"https://www.cansolveckd.ca/wp-content/uploads/2018/05/pe-survey-highlights.jpg",
        },
        {
          id: "4",
          title: "Generic survey",
          description:"newly added survey",
          body:"How important is mental wellness during the Pandemic?",
          img_loc:"https://www.cansolveckd.ca/wp-content/uploads/2018/05/pe-survey-highlights.jpg",
        },
        {
          id: "5",
          title: "Generic survey",
          description:"newly added survey",
          body:"How funny is Indian Television?",
          img_loc:"https://www.cansolveckd.ca/wp-content/uploads/2018/05/pe-survey-highlights.jpg",
        },
        {
          id: "6",
          title: "Generic survey",
          description:"newly added survey",
          body:"Should EVs be incentivised?",
          img_loc:"https://www.cansolveckd.ca/wp-content/uploads/2018/05/pe-survey-highlights.jpg",
        },
        
      ];

      const Item = ({ item, onPress }) => (
        //onPress={onPress}
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
            onPress={() =>selected(item) }
          />
        );
      };

      return(


      <View style={{ flex: 1, backgroundColor: '#FFF' }}>
        <View style={{ flex: 9, justifyContent: 'center',  }}>
        <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
        </View>

        <HideableView buttontitle='Add survey' hide={_roleprops!='admin'} viewstyle={{ flex: 1, backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center',}} pressevt={()=>console.log('pressed')}/>
        

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

    },
  });
export default SurveyView