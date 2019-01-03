import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  elem: {
    flex: 1,
    paddingVertical: 15,
    flexDirection: 'row',
  },
  textElem: {
    flex: 7,
    flexDirection: 'column',
    paddingLeft: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  titleElem: {
    fontSize: 17,
    fontWeight: '700',
  },
  clapButton: {
    display: 'flex',
    borderRadius: 30,
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  clapImage: {
    width: 30,
    height: 30,
  },
  iconElem: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
