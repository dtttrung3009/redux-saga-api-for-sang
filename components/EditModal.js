import React, {Component} from 'react';
import Button from 'react-native-button';
import {Text, View, Image, Alert, Platform, TextInput, FlatList, Dimensions} from 'react-native';
import Modal from 'react-native-modalbox';

const screen = Dimensions.get('window');

class EditModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            releaseYear: '',
        };
    }
    showEditModal=(item)=>{
        this.setState({
            id:item.id.toString(),
            name:item.name,
            releaseYear:item.releaseYear.toString(),
        })
        this.refs.myModal.open();
    }
    render() {
        return (
            <Modal
                ref={'myModal'}
                style={{
                    justifyContent: 'center',
                    shadowRadius: 10,
                    width: screen.width - 80,
                    height: 280,
                }}
                position='center'
                backdrop={true}
                onClosed={() => {

                }}
            >

                <Text
                    style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginTop: 40,
                    }}>
                    Movie's information
                </Text>
                <TextInput
                    style={{
                        height: 40,
                        borderBottomColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 20,
                        marginBottom: 10,
                        borderBottomWidth: 1,
                    }}
                    onChangeText={(text) => this.setState({
                        name: text,
                    })}
                    placeholder="Movie's name"
                    value={this.state.name}
                />
                <TextInput
                    style={{
                        height: 40,
                        borderBottomColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 20,
                        marginBottom: 10,
                        borderBottomWidth: 1,
                    }}
                    onChangeText={(text) => this.setState({
                        releaseYear: text,
                    })}
                    placeholder="Year of release"
                    value={this.state.releaseYear}
                />
                <Button
                    style={{
                        fontSize: 18,
                        color: 'white',
                    }}
                    containerStyle={{
                        padding: 8,
                        marginLeft: 70,
                        marginRight: 70,
                        height: 40,
                        borderRadius: 6,
                        backgroundColor: 'mediumseagreen',
                    }}
                    onPress={() => {
                        if (this.state.name.length === 0 || this.state.releaseYear === 0) {
                            alert('You must input name and releaseYear');
                            return;
                        }
                        //Update in here
                        this.props.movieComponent.props.onUpdateItemAction(this.state);
                        this.refs.myModal.close();
                    }}
                >
                    Save
                </Button>
            </Modal>
        );
    }
}

export default EditModal;
