import React from 'react';
import { useLinkProps } from '@react-navigation/native';
import {View,StyleSheet,Button} from 'react-native';

//idea behind this component is to keep it as a functional component - return a null for the view if conditions
//aren't met, return the view if it is. Difference is 8/16 byte vs 'xx-yyy' bytes on the app. 
//helps in GC compacting, Lessens load on the GC cycles of the JVM.
const HideableView = (props) =>{
    console.log(props.hide)
    return(
        
           (props.hide)?null:
        <View style={props.viewstyle}>
          <Button title={props.buttontitle} onPress={props.pressevt}/>
        </View>
    )
};
export default  HideableView;