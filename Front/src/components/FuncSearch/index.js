import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import styles from './styles';

const FuncSearch = ({
    value, onChangeText, securiteText,
}) => (
        <View style={styles.container}>
            <TextInput
                secureTextEntry={securiteText}
                style={styles.inputBox}
                value={value}
                onChangeText={onChangeText}
            />
            <View style={styles.icon}>
                <Feather
                    name="search"
                    size={30}
                    onPress={onChangeText}
                />
            </View>
        </View>
    );

FuncSearch.defaultProps = {
    value: '',
    onChangeText: null,
    securiteText: false,
};

FuncSearch.propTypes = {

    value: PropTypes.string,
    onChangeText: PropTypes.func,
    securiteText: PropTypes.bool,
};

export default FuncSearch;