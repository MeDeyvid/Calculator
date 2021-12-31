import React from "react";
import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableHighlight,
} from "react-native"

const style = StyleSheet.create({
  btn: {
    fontSize: 40,
    height: Dimensions.get("window").width / 4,
    width: Dimensions.get("window").width / 4,
    padding: 20,
    backgroundColor: "#f0f0f0",
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#888",
  },
  operBtn: {
    color: "#fff",
    backgroundColor: "#fa8231",
  },
  btnDouble: {
    width: (Dimensions.get("window").width / 4) * 2,
  },
  btnTriple: {
    width: (Dimensions.get("window").width / 4) * 3,
  }
})

export default props => {
  const styleBtns = [style.btn]
  if (props.double) styleBtns.push(style.btnDouble)
  if (props.triple) styleBtns.push(style.btnTriple)
  if (props.operation) styleBtns.push(style.operBtn)

  return (
    <TouchableHighlight onPress={() => props.onClick(props.label)}>
      <Text style={styleBtns}>
        {props.label}
      </Text>
    </TouchableHighlight>
  )
}