import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  box: {
    flex: 1,
    width: 360,
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 48,
    textAlign: 'center',
    color: '#3d3d3d',
    marginTop: 95,
  },
  sectionSubTitle: {
    fontFamily: 'Inter-Semi-Bold',
    fontSize: 30,
    textAlign: 'center',
    color: '#3d3d3d',
    marginTop: 100,
    marginBottom: 30,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: '#477BDE',
    textAlign: 'center',
  },
  buttonBox: {
    marginBottom: 60,
  },
});

export default styles;
