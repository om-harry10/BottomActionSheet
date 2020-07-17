import React, { useState } from "react";
import {View, Text, TouchableOpacity, StyleSheet, Dimensions,Animated} from 'react-native';
import {Image} from 'react-native-elements';

import {TapGestureHandler, State} from 'react-native-gesture-handler';



const{width}=Dimensions.get('window');
const translationY= new Animated.Value(300);
function  ActSheet() {
    
    const [showSheet, setShowSheet]=useState(true);
    
      const handleOpen=()=>{
        Animated.timing(translationY, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start();
        setShowSheet(false);
        console.log("this is TouchableOpacity1");
      };

      
      const handleClose=()=>{
        Animated.timing(translationY, {
          toValue: 300,
          duration: 500,
          useNativeDriver: true,
        }).start();
        setShowSheet(true);
        console.log("this is TouchableOpacity2");
      };
   
    return(
        <TouchableOpacity onPress={ showSheet?null:()=>handleClose()}>
        <View style={{height:'100%',width:'100%'}}>
           
                    <TouchableOpacity style={styles.button} 
                        onPress={showSheet?()=>handleOpen():null}>
                        <Text style={{color:'#fff'}}>Click me</Text>
                        
                    </TouchableOpacity>
                 
            <View style={{flex:1, justifyContent:'center',  }}>
                
                <Image source={require('./images/i1.jpg')} style={styles.image}/>
            </View>

            
            
           <Animated.View  style={[styles.bottomSheet,{
               transform:[{translateY:translationY}]
           },
           ]}>
            <TouchableOpacity onPress={()=>handleClose()}> 
                <Text style={{alignSelf:'center'}}> Bottom Action Sheet</Text>
            </TouchableOpacity>
           </Animated.View>
           </View>
           </TouchableOpacity>
    );
}

export default ActSheet;

const styles=StyleSheet.create({
    button:{
        height:80,
        width:100,
        backgroundColor:'blue',
        padding:20,
        marginLeft:180,
        marginTop:20
    },
    bottomSheet:{
        position:'absolute',
        bottom:0,
       width:width-20,
        height:300,
        backgroundColor:'white',
        borderRadius:25,
        marginHorizontal:10,
       
    },
    image:{
        
        height:550,
        width:width,
        marginRight:100,
        alignSelf:'flex-end'
    },
})