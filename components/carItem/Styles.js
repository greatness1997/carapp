import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: '100%'
      },
      captions: {
        marginTop: '30%',
        alignItems: 'center',
        width: '100%'
      },
      carCaption: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#fff'
      },
      carPrice: {
        fontSize: 20,
        color: '#fff'
      },
      image: {
       position: 'absolute',
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
      }
      
})

export default Styles;