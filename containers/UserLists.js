import React, { Component } from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import UserItem from '../components/UserItem';
import { connect } from 'react-redux'
import { RequestData } from '../actions/UsersActions'
import axios from 'axios';



class UserLists extends React.Component {

    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.RequestData()
    }

    renderItem = ({ item, index }) => (
        <UserItem title={item.login} key={index} />//hello, arranger le paramètre selon l'entité user
    )


    render() {
        return (
            <View>
                {
                    this.props.loading ?
                        <ActivityIndicator />
                        :
                        <View>
                        <Text>---------------------------------------------------------------------------------</Text>
                        <FlatList
                            data={this.props.users}
                            renderItem={this.renderItem}
                            keyExtractor={(item, index) => index.toString()}
                        />
                           <FlatList
                            data={this.props.users}
                            renderItem={ ({ item }) =>  <UserItem  /> }
                            keyExtractor={(item, index) => index.toString()}
                        />
  
                        </View>
              
                           
                          
                }

            </View>
        )
    }
}

const mapStateToProps2 = (state) => ({
    loading: state.UsersRed.loading,
    users: state.UsersRed.users
})


const mapDispatchToProps2 = {
    RequestData
}

export default connect(mapStateToProps2, mapDispatchToProps2)(UserLists)