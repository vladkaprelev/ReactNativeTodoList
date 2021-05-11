import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    paddingHorizontal: 25,
    justifyContent: 'space-between',
  },
  title: {
    color: '#3d3d3d',
    textAlign: 'center',
    fontSize: 40,
    marginVertical: 80,
  },
  subtitle: {
    color: '#3d3d3d',
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 20,
  },

  text: {
    fontSize: 16,
    color: '#477BDE',
    textAlign: 'center',
    marginTop: 15,
  },
  button: {
    margin: 10,
    borderRadius: 8,
    backgroundColor: '#4C728F',
    marginBottom: 35,
  },
  buttonText: {
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
