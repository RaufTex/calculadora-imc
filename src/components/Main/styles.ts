import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 200,
  },
  inputText: {
    backgroundColor: '#ffffff',
    width: 130,
    height: 40,
    borderStartWidth: 2,
    borderEndWidth: 2,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderRadius: 10,
  },
  fixToText: {
    flexDirection: 'row',
    marginTop: 20,
  },
  space: {
    backgroundColor: '#EEEEEE',
    width: 20,
    height: 20,
  },
  viewresult: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  result: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    color: '#189999',
  },
});
