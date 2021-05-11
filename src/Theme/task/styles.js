import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    flex: 1,
    marginHorizontal: 15,
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: '#3d3d3d',
    backgroundColor: '#ffffff',
    paddingLeft: 15,
    marginVertical: 15,
    borderRadius: 8,
  },
  description: {
    flexDirection: 'row',
    height: 200,
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: '#3d3d3d',
    backgroundColor: '#ffffff',
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  button: {
    alignSelf: 'center',
    marginBottom: 35,
  },
});
