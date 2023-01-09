import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: '100%',
    alignItems: 'center',
    // backgroundColor: '#1A1A1A',
  },
  input: {
    width: 271,
    minHeight: 54,
    marginRight: 4,
    padding: 16,
    backgroundColor: '#333333',
    color: '#F2F2F2',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#0D0D0D',
    borderRadius: 6,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 52,
    height: 52,
    padding: 18,
    borderRadius: 6,
    backgroundColor: '#1E6F9F',
  },
  form: {
   flexDirection: 'row',
   justifyContent: 'center',
   alignItems: 'center',
   marginTop: -30
  },
  counterContainer: {
    width: '86%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30
  },
  containerCounterCreate: {
    flexDirection: 'row'
  },
  textCreate: {
    color: '#4EA8DE'
  },
  counter: {
    width: 25,
    height: 19,
    backgroundColor: '#333333',
    borderRadius: 999,
    alignItems: 'center',
    marginLeft: 10
  },
  textCounter: {
    color: '#F2F2F2'
  },
  containerCounterCompleted: {
    flexDirection: 'row'
  },
  textCompleted: {
    color: '#8284FA'
  }
})