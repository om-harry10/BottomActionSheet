import React, { Component } from "react";
import {View, Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import {Image} from 'react-native-elements';
import Animated, {Value, cond, eq, set, useCode} from 'react-native-reanimated';
import {TapGestureHandler, State} from 'react-native-gesture-handler';

// const state= new Value(State.UNDETERMINED);
// const  gestureHandler={onHandlerStateChange:Animated.event([{nativeEvent:{state},},]),}
// useCode(()=>
    // cond(eq(state,State.END),
    //     cond(eq(translationY,300),set(translationY,0),set(translationY,300)),
    // ),
    // );

const{width}=Dimensions.get('window');
const translationY= new Value(300);
function  ActSheet() {
    
    
      handleOpen=()=>{
        // Animated.timing(translationY, {
        //   toValue: 0,
        //   duration: 3000,
        //   useNativeDriver: true,
        // }).start();
        console.log("this is TouchableOpacity");
      };
   
    return(
        <View style={{height:'100%',width:'100%'}}>
           <TapGestureHandler  >
            <Animated.View>  
                    <TouchableOpacity style={styles.button} 
                        onPress={()=>handleOpen()}>
                        <Text style={{color:'#fff'}}>Click me</Text>
                        
                    </TouchableOpacity>
                    </Animated.View> 
            </TapGestureHandler>
            <View style={{flex:1, justifyContent:'center',  }}>
                
                <Image source={require('./images/i1.jpg')} style={styles.image}/>
            </View>
            <TapGestureHandler >
            <Animated.View style={{...StyleSheet.absoluteFill,backgroundColor:"rgb(0,0,0,0.5)",
                        zIndex:-1,}}/>
            </TapGestureHandler>
           <Animated.View style={[styles.bottomSheet,{
               transform:[{translateY:translationY}]
           }]}>
               <Text style={{alignSelf:'center'}}> Bottom Action Sheet</Text>
           </Animated.View>
           </View>
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