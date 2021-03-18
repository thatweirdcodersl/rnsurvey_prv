import React from 'react';
import {Text,View,Image,TextInput,Button} from 'react-native';
import {useState} from 'react';
import {useEffect} from 'react';
import Icon from '@expo/vector-icons/AntDesign';
import Toast from 'react-native-simple-toast';


//return login component to caller/importer of Login >>
const Login = ({ navigation }) => {

    const[Email,setEmail] = useState();
    
  
    function doLogin(prop){
      console.log(prop)
      navigation.navigate('SurveyView',{name:'test',role:'admin'})
      Toast.show('Logged in...');
    }

   
    
    return (
        //top panel with image and text >>
        <View style= {{backgroundColor:'#FFF',height:'100%',resizeMode: 'contain'}}>

            <Image source={require('../images/img_login.png')} 
                style={{height:'20%',width:'100%'}} />
            <Text style={{fontSize:30,alignSelf:'center'}}>Survey - Your voice counts</Text>
            <Text style={{fontSize:20,opacity:0.4,marginHorizontal:40,textAlign:'justify',marginTop:10}}>
                Welcome to the survey app. 
                We love listening to you all and hence, 
                would like your opinions here.
            </Text>

             {/*email and password inputs*/}
            <View style={{alignItem:'center',flexDirection:'row',
            marginHorizontal:55,paddingHorizontal:10,paddingVertical:5,borderWidth:2,marginTop:55,borderColor:'#191a63',borderRadius:20}} >
                <Icon name='mail' color='#191a63' size={24} />
                <TextInput style={{paddingHorizontal:10,width:'100%'}} value={Email} placeholder='Enter Email ID' onChangeText={text=>setEmail(text)} />
                
            </View>
    
            <View style={{alignItem:'center',flexDirection:'row',
            marginHorizontal:55,paddingHorizontal:10,paddingVertical:5,
            borderWidth:2,marginTop:15,borderColor:'#191a63',borderRadius:20}} >
                <Icon name='lock' color="#191a63" size={24} />
                <TextInput style={{paddingHorizontal:10,width:'100%'}} placeholder='Enter Password' secureTextEntry={true} />
            </View>

             {/*Login button*/}
            <View style={{ marginHorizontal:55,paddingHorizontal:10,paddingVertical:10,
                borderRadius:20,marginTop:40,alignItems:'center',
                justifyContent:'center',backgroundColor:'#191a63'}}> 
                <Text style={{color:'white'}} onPress={()=>doLogin('touched')}>Login</Text>
            </View>
            

            <View style={{ marginHorizontal:55,paddingHorizontal:10,paddingVertical:10,
                borderRadius:20,marginTop:15,alignItems:'center',
                justifyContent:'center'}}>
                    <Text onPress={()=>navigation.navigate('Register')}
                    style={{color:'#191a63',fontWeight:'bold'}}>New User?</Text>
            </View>
        </View>
        
        
    )
  }
  export default Login;
