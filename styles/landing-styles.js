import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1, // Take full screen height
    justifyContent: "center", // Center vertically
    alignItems: "center",
    backgroundColor: "gray"// Center horizontally
  },
  outerGradient: {
    padding: 3, // thickness of the gradient border
    borderRadius: 50,
  },
  innerGradient: {
    width: 250,
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  logoImage: {
    width: 150,
    height: 200,
  },
  wordImage: {
    border: "1px solid red",
    width: 240,
    height: 70,
  },
});
