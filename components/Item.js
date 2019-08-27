import React,{Component} from 'react'
import {View,Text} from 'react-native'



class Item extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        return(
          <View>
               <Text>{this.props.title} {this.props.body}</Text>
          </View>
        )
    }
}

export default Item