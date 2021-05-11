import React from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import {Icon} from 'react-native-elements';

const SignUpModal = props => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          props.setModalVisible(!props.modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Регистрация успешно выполнена</Text>
            <Icon
              size={60}
              color="#78B395"
              style={styles.icon}
              name="done"
              type="material"
            />
            <Pressable style={styles.button} onPress={props.onPrees}>
              <Text style={styles.textStyle}>Войти</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 50,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 8,
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: '#4C728F',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  modalText: {
    fontSize: 18,
    textAlign: 'center',
  },
  icon: {
    marginVertical: 15,
  },
});

export default SignUpModal;
