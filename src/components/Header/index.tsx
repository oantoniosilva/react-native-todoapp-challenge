import { Image, View } from "react-native";
import logoImg from "../../assets/logo.png";

import { styles } from './styles';

export function Header() {
  return (
    <View style={styles.container}>
      <Image style={styles.img}
        source={logoImg}
      />
    </View>
  )
}