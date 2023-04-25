import { Pressable, StyleSheet, Text } from 'react-native';
import { GlobalStyles } from '../../constants/style';

function Button({ children, onPress,style,primary }) {
  return (

    <Pressable
      onPress={onPress}
      style={({ pressed }) => [pressed && styles.pressed,styles.button, styles.button,primary ? styles.primaryButton : styles.lightButton,style]}
    >
        <Text style={[styles.text,primary? styles.primaryText : styles.lightText ]}>
          {children}
        </Text>
    </Pressable>


  );
}

export default Button;

const styles = StyleSheet.create({
  button:{
    borderRadius: 100,
    padding: 14,
    justifyContent:"center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text:{
    textAlign: 'center',
    fontSize:16,
    fontWeight:700,

  },
  primaryButton: {
    backgroundColor: GlobalStyles.colors.primaryGreen,
  },
  primaryText: {
    color: 'white',
  },
  lightButton: {
    backgroundColor: GlobalStyles.colors.lightGreen,
  },
  lightText: {
    color: GlobalStyles.colors.primaryGreen,
  },
  pressed: {
    opacity: 0.75,

  },
});