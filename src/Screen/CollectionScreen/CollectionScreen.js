import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {AuthContext} from '../../Navigation/NavigationService';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {logout} from '../../Redux/actions/user';

const CollectionScreen = props => {
  const {signOut} = React.useContext(AuthContext);
  const handleLogout = () => {
    props.logout();
    signOut();
  };

  return (
    <View>
      <Text>Signed in!</Text>
      <Button title="Sign out" onPress={handleLogout} />
    </View>
  );
};
const mapDispatchToProps = dispatch => bindActionCreators({logout}, dispatch);

export default connect(null, mapDispatchToProps)(CollectionScreen);
