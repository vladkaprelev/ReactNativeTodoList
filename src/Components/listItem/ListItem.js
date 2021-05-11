import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import CheckBox from '@react-native-community/checkbox';
import {bindActionCreators} from 'redux';
import {deleteList} from '../../Redux/action/lists.action';
import {connect} from 'react-redux';

const ListItem = props => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const textDecorationLine = toggleCheckBox ? 'line-through' : 'none';

  const handleDelete = () => {
    console.log(props.item);
    props.deleteList(props.item.id);
  };
  const handlePress = () => {};

  return (
    <View style={styles.item}>
      <View style={styles.container}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
          tintColors={{true: '#4C728F', false: '#3d3d3d'}}
        />
        <TouchableOpacity onPress={handlePress} style={styles.titleBox}>
          <Text
            style={[styles.title, {textDecorationLine: textDecorationLine}]}>
            {props.item.name}
          </Text>
        </TouchableOpacity>
      </View>
      <Icon
        style={styles.icon}
        name="close"
        type="material"
        onPress={handleDelete}
        component="TouchableHighlight"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Inter-Medium',
    fontSize: 18,
    lineHeight: 24,
    color: '#3d3d3d',
  },
  titleBox: {
    marginLeft: 8,
    width: 260,
    paddingVertical: 14,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    marginVertical: 10,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    justifyContent: 'flex-end',
  },
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({deleteList}, dispatch);

export default connect(null, mapDispatchToProps)(ListItem);
