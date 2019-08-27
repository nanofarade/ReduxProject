import React, { Component } from 'react'
import { View, FlatList, ActivityIndicator } from 'react-native'
import Item from '../components/Item';
import { connect } from 'react-redux'
import { RequestData } from '../actions/TodosActions'
import axios from 'axios';


class MyList extends React.Component {

    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.RequestData()
    }

    renderItem = ({ item, index }) => (
        <Item title={item.email} body={item.gender} key={index} />
    )


    render() {
        return (
            <View>
                {
                    this.props.loading ?
                        <ActivityIndicator />
                        :
                        <FlatList
                            data={this.props.todos}
                            renderItem={this.renderItem}
                            keyExtractor={(item, index) => index.toString()}
                        />
                }

            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    loading: state.todosRed.loading,
    todos: state.todosRed.todos
})


const mapDispatchToProps = {
    RequestData
}

export default connect(mapStateToProps, mapDispatchToProps)(MyList)