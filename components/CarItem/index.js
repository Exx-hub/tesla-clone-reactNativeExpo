import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import StyledButton from "../StyledButton";
import styles from "./styles";

const CarItem = (props) => {
  const { name, tagline, image, taglineCTA } = props.car.item;
  // console.warn(props);
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.cta}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton
          text="Custom Order"
          type="primary"
          onPress={() => console.warn("custom order")}
        />
        <StyledButton
          text="Existing Inventory"
          type="secondary"
          onPress={() => console.warn("existing inventory")}
        />
      </View>
    </View>
  );
};

export default CarItem;
