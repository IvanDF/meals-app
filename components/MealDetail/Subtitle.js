import { StyleSheet, Text, View } from "react-native";

function Subtitle({ children, color }) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={[styles.subtitle, { color: color }]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  subtitleContainer: {
    padding: 6,
    marginHorizontal: 25,
    marginBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#666666",
  },

  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Subtitle;
