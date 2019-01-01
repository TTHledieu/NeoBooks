import { StyleSheet } from 'react-native'
import colors from 'style/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 3,
    backgroundColor: colors.white,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  body: {
    flex: 7,
    backgroundColor: colors.white,
  },
  infos: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
  },
  text: {
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
  authorPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  author: {
    flex: 8,
    fontSize: 16,
    fontWeight: '500',
    paddingHorizontal: 10,
  },
  price: {
    flex: 2,
  },
  synopsis: {
    flex: 9,
    backgroundColor: colors.primary,
  },
  descriptionText: {
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'center',
    color: colors.white,
    lineHeight: 22,
    paddingTop: 10,
    paddingHorizontal: 5,
  },
  watermark: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  watermarkNB: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.darkerBlue,
    lineHeight: 22,
    paddingTop: 20,
  },
})
