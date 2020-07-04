import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001c43',
  },

  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  input: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
    width: 330,
    padding: 15
  },

  button: {
    backgroundColor: '#05bae3',
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    width: 180
  },

  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  logo: {
    margin: 15,
    borderRadius: 15,
    marginBottom: 100,
    width: 150,
    height: 100
  }
})