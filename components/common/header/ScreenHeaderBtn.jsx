import { Image, TouchableOpacity } from "react-native";

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  const dimensionValue = dimension.endsWith("%")
    ? (parseFloat(dimension) / 100) * 40
    : dimension;

  return (
    <TouchableOpacity
      className="justify-center items-center"
      style={{
        width: dimensionValue,
        height: dimensionValue,
        backgroundColor: "transparent",
        borderRadius: 40,
      }}
      onPress={handlePress}
    >
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={{
          width: dimensionValue,
          height: dimensionValue,
          borderRadius: 40, 
        }}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
