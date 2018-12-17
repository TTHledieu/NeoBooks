import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  clapButton: {
    display: 'flex',
    borderRadius: 30,
    backgroundColor: '#ecf0f1',
    top: 40,
    left: 125,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clapImage: {
    width: 40,
    height: 40,
  },
  clapBubble: {
    position: 'absolute',
    height: 40,
    width: 40,
    borderRadius: 30,
    backgroundColor: '#15a872',
    top: 40,
    left: 125,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clapText: {
    color: 'white',
    fontSize: 14,
  },
});
