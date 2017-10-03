import React from 'react';
import { Actions, ActionConst } from 'react-native-router-flux';
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	Image,
	TouchableHighlight
} from 'react-native';
import t from 'tcomb-form-native';
import backIcon from '../../icons/back.png';

var Form = t.form.Form;

var ToDo = t.struct({txt: t.Str, complete: t.Bool});

var options = {
    fields: {
        txt: {
            label: 'To-Do Item',
            placeholder: 'enter a to do item here',
            autoFocus: true
        }
    }
};

const EditTodo = props => {
	const {
		todos,
		actions,
		id,
		text
	} = props;

	let textValue = text;

	const _onPress = () => {
		actions.editTodo(id, textValue);
		actions.startUpdateTodo(id, 'text', textValue);
		Actions.mainScreen({type: ActionConst.RESET});
	}

	const _onChangeText = value => textValue = value;

	return (
		<View style={styles.container}>
			<Form
        		type={ToDo}
		        onChangeText={_onChangeText}
		        options={options}
				maxLength={200}
				autoCorrect={false}
				multiline={true}
        		value={textValue}/>
      		<TouchableHighlight
          		style={[styles.button, styles.saveButton]}
          		onPress={_onPress}
          		underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>
            	{text}
            </Text>
      </TouchableHighlight>
    </View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	textInputWrapper: {
		marginTop: 20,
		marginHorizontal: 15,
	},
	textInput: {
		height: 100,
		paddingHorizontal: 10,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	text: {
		color: 'white',
		backgroundColor: 'transparent',
	},
	btnWrapper: {
		alignItems: 'flex-end',
		justifyContent: 'flex-end',
	},
	btn: {
		margin: 20,
		width: 40,
		height: 40,
		borderRadius: 100,
		backgroundColor: 'rgba(255, 255, 255, 0.3)',
	},
	image: {
		width: 40,
		height: 40,
	},
	buttonText: {
			 fontSize: 18,
			 color: 'white',
			 alignSelf: 'center'
	 },
	 button: {
        height: 36,
        backgroundColor: '#48BBEC',
        alignSelf: 'stretch',
        justifyContent: 'center'
    },

    saveButton: {
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
    },
});

export default EditTodo;
