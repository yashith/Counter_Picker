import { black } from 'color-name';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { Card } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Table}>
        <View style={styles.Table_headers}>
          <Text> Enemy Team</Text>
          <View style={styles.Table_items}>
            <Card containerStyle={styles.card_style}>
              <View style={styles.incard_layout}>
                <View>
                <Image
                  style={styles.image}
                  source={require('./assets/Anti-Mage_icon.png')}
                />
                </View>
                <View>
                  <Text>
                    <Text>Ani-Mage</Text>
                  </Text>
                </View>

              </View>
            </Card>
          </View>
        </View>
        <View style={styles.Table_headers}>
          <Text>Your Team</Text>
          <View style={styles.Table_items}>
            <Card containerStyle={styles.card_style}>
              <View style={styles.incard_layout}>
                <View>
                <Image
                  style={styles.image}
                  source={require('./assets/Anti-Mage_icon.png')}
                />
                </View>
                <View>
                  <Text>
                    <Text>Ani-Mage</Text>
                  </Text>
                </View>

              </View>
            </Card>
          </View>
        </View>


      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:'10%',
    paddingLeft:'3%',
    paddingRight:'3%'

  },
  Table: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  Table_headers: {
    width: '50%',
    alignItems: 'center'
  },
  Table_items: {
    width: '100%',
    alignItems: 'center'
  },
  card_style: {
    width: '100%',
    borderRadius: 15
  },
  image: {
    width: '25px',
    height:'25px',
    borderRadius:50,
    marginRight:'10px'
  },
  incard_layout:{
    display:'flex',
    flexDirection:'row'
  }
});
