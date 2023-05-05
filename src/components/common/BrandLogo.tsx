import React from "react";
import { View, Image, StyleSheet } from "react-native";

import TCL_LOGO from "./../../../assets/brand/tcl-logo.png";
import TCL_MAIN_LOGO from "./../../../assets/brand/tcl-main-logo.png";

type Props = {
  type: "main" | "submain";
  height?: number;
  width?: number;
};

export const BrandLogo: React.FC<Props> = (props) => {
  return (
    <View>
      <Image
        source={props.type === "main" ? TCL_MAIN_LOGO : TCL_LOGO}
        style={styles.image}
        resizeMethod="scale"
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 180,
    marginLeft: -15,
  },
});
