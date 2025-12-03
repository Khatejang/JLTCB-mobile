import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    position: "absolute",
    alignContent: "flex-end",
    bottom: 60, // adjust according to nav bar
    width: "100%",
  },
  curve: {
    position: "absolute",
    bottom: 0,
    alignSelf: "start",
  },
  menuOptions: {
    position: "absolute",
    bottom: 30,
    paddingLeft: 20,
    width: "80%",
    gap: 10,
  },
  modalOption: {
    fontSize: 18,
    color: "#161F3C",
  },
});
