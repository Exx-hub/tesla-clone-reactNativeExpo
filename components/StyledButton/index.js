import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./style";

const StyledButton = ({ type, text, onPress }) => {
  //   console.warn(type);

  const bgc = type === "primary" ? "#171A20CC" : "#FFFFFFA6";
  const txtc = type === "primary" ? "#FFFFFF" : "#171A20";

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: bgc }]}
        onPress={onPress}
      >
        <Text style={[styles.text, { color: txtc }]}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
