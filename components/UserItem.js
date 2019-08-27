import React,{Component} from 'react'
import {View,Text} from 'react-native'



class UserItem extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        return(//Hello, modifier le paramètre selon l'entité
          <View> 
               <Text>{this.props.title} </Text> 
          </View>
        )
    }
}

export default UserItem