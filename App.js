import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Button
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Audio } from "expo-av";
export default class App extends React.Component {
  state = {
    isPlaying: false,
    currentIndex: 0,
    volume: 1.0,
    image:
      "https://conteudo.imguol.com.br/c/entretenimento/4e/2017/12/11/capa-do-single-de-harry-porra-1513041727540_v2_900x895.jpg",
    title: "AAAAAAAAAAAAAAAAAA"
  };

  playMusic = async () => {
    console.log("kleo da o cu!");
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(require("./assets/konohatron.mp3"));
    } catch (error) {
      console.log(error);
    }
    if (this.state.isPlaying == false) {
      soundObject.playAsync();
      this.setState({
        isPlaying: true
      });
    } else {
      soundObject.stopAsync();
      this.setState({
        isPlaying: false
      });
    }
    console.log(this.state.isPlaying);
  };
  nextMusic = async () => {
    if (this.state.currentIndex == 0) {
      this.setState({
        currentIndex: this.state.currentIndex + 1
      });
      const soundObject = new Audio.Sound();
      try {
        await soundObject.loadAsync(require("./assets/konohatron.mp3"));
      } catch (error) {
        console.log("AAAAAAAAAAAAAA");
      }
      this.setState({
        image:
          "https://assets.papelpop.com/wp-content/uploads/2019/05/bob-esponja.jpg",
        title: "BOBÃO ESPONJA"
      });
    } else {
      alert("No momento só tem 2 musica cabaço");
    }
  };
  previousMusic = async () => {
    console.log(this.state.currentIndex);
    if (this.state.currentIndex == 1) {
      this.setState({
        currentIndex: this.state.currentIndex - 1
      });
      const soundObject = new Audio.Sound();
      try {
        await soundObject.loadAsync(require("./assets/konohatron.mp3"));
      } catch (error) {
        console.log("AAAAAAAAAAAAAA");
      }
      this.setState({
        image:
          "https://conteudo.imguol.com.br/c/entretenimento/4e/2017/12/11/capa-do-single-de-harry-porra-1513041727540_v2_900x895.jpg",
        title: "AAAAAAAAAAAAAAAAAAAAAAAA"
      });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.musicTitle}>{this.state.title}</Text>
        <Image
          style={styles.albumCover}
          source={{
            uri: this.state.image
          }}
        />
        <View style={styles.controls}>
          <TouchableOpacity
            style={styles.control}
            onPress={() => {
              this.previousMusic();
            }}
          >
            <Ionicons name="ios-skip-backward" size={48} color="#f26818" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.control}
            onPress={() => {
              this.playMusic();
            }}
          >
            {this.state.isPlaying ? (
              <Ionicons name="ios-pause" size={48} color="#f26818" />
            ) : (
              <Ionicons name="ios-play-circle" size={48} color="#f26818" />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.control}
            onPress={() => {
              this.nextMusic();
            }}
          >
            <Ionicons name="ios-skip-forward" size={48} color="#f26818" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292e45",
    alignItems: "center",
    justifyContent: "center"
  },
  albumCover: {
    width: 250,
    height: 250
  },
  controls: {
    flexDirection: "row"
  },
  control: {
    margin: 20
  },
  musicTitle: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#e38f07",
    textShadowRadius: 15
  }
});
