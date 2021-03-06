import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  elem: {
    flex: 1,
    paddingVertical: 20,
    flexDirection: 'row',
  },
  textElem: {
    flex: 8,
    flexDirection: 'column',
    paddingLeft: 20,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  titleElem: {
    fontSize: 16,
    fontWeight: '700',
  },
  authorElem: {
    fontSize: 14,
    fontWeight: '500',
    paddingLeft: 10,
  },
  iconElem: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
