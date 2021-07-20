import React from "react";
import { View, Image } from "react-native";
import styles from "./style";

import logo from "../../assets/teslaCloneAssets/logo.png";
import menu from "../../assets/teslaCloneAssets/menu.png";

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image style={styles.logo} source={logo} />
      <Image style={styles.menu} source={menu} />
      <Image />
    </View>
  );
};

export default Header;
