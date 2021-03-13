import React from 'react';
import {Text,View,Image,TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import {useState} from 'react'

//return Register component to caller/importer of Login >>
const Register = ({navigation}) => {
    //style states>>
    const[emailborderstyle,setEmailStyle]= useState('#191a63')

    //input states>>
    //#191a63 , #FF0000
    function validateInputs(evt,controllabel){
        if(controllabel=='emailid'){          
            if(evt!=undefined){
                let email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if(email_regex.test(evt.nativeEvent.text)===false){
                    setEmailStyle('#FF0000')
                }
                else{
                    setEmailStyle('#008000')
                }
                if(evt.nativeEvent.text===''){
                    setEmailStyle('#191a63')

                }
                
            }
          
        }
        else if(controllabel=='pwd'){
            
        }
    }
    
    return (
        //top panel with image and text >>
        <View style= {{backgroundColor:'#FFF',height:'100%',resizeMode: 'contain'}}>

            <Image source={require('../images/img_register.png')} 
                style={{height:'20%',width:'100%'}} />
            <Text style={{fontSize:30,alignSelf:'center'}}>User Registration</Text>
            <Text style={{fontSize:20,opacity:0.4,marginHorizontal:40,textAlign:'justify',marginTop:10}}>
                Please register and confirm your details. Please enter your credentials below.
            </Text>

             {/*email and password inputs*/}
            <View style={{alignItem:'center',flexDirection:'row',
            marginHorizontal:55,paddingHorizontal:10,paddingVertical:5,borderWidth:2,marginTop:55,borderColor:emailborderstyle,borderRadius:20}} >
                <Icon name='mail' color={emailborderstyle} size={24} />
                <TextInput style={{paddingHorizontal:10}} placeholder='Enter Email ID' onChange={e=>validateInputs(e,'emailid')}/>
                
            </View>
    
            <View style={{alignItem:'center',flexDirection:'row',
            marginHorizontal:55,paddingHorizontal:10,paddingVertical:5,
            borderWidth:2,marginTop:15,borderColor:'#191a63',borderRadius:20}} >
                <Icon name='lock' color="#191a63" size={24} />
                <TextInput style={{paddingHorizontal:10}} placeholder='Enter Password' secureTextEntry={true}/>
            </View>

            <View style={{alignItem:'center',flexDirection:'row',
            marginHorizontal:55,paddingHorizontal:10,paddingVertical:5,
            borderWidth:2,marginTop:15,borderColor:'#191a63',borderRadius:20}} >
                <Icon name='lock' color="#191a63" size={24} />
                <TextInput style={{paddingHorizontal:10}} placeholder='Confirm Password' secureTextEntry={true}/>
            </View>

             {/*Register button*/}
            <View style={{ marginHorizontal:55,paddingHorizontal:10,paddingVertical:10,
                borderRadius:20,marginTop:40,alignItems:'center',
                justifyContent:'center',backgroundColor:'#191a63'}}> 
                <Text style={{color:'white'}}>Register</Text>
            </View>

            
        </View>
        
        
    )
  };
  
  export default Register;