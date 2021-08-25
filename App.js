import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, } from 'react-native';
import { Card } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';


export default function App() {
  const [enemyTeam, setenemyTeam] = useState([{ name: 'Anti-Mage', image: require('./assets/Anti-Mage_icon.png') }]);
  const [yourTeam, setyourTeam] = useState([{ name: 'Anti-Mage', image: require('./assets/Anti-Mage_icon.png') }]);
  const [resultList, setresultList] = useState([{ name: 'Anti-Mage', image: require('./assets/Anti-Mage_icon.png') }])
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Table_area}>
        <View style={styles.Table}>
          <View style={styles.Table_col}>
            <Text style={{ color: 'white' }}> Enemy Team</Text>
            <View style={styles.Table_items}>
              {
                enemyTeam.map((hero, i) => {
                  return (
                    <Card key={i} containerStyle={styles.card_style}>
                      <View style={styles.incard_layout}>
                        <View>
                          <Image
                            style={styles.image}
                            source={hero.image}
                          />
                        </View>
                        <View>
                          <Text>{hero.name}</Text>
                        </View>
                      </View>
                    </Card>
                  )
                })
              }
              <Card containerStyle={styles.card_style}>
                <View style={styles.incard_layout}>
                  <View>
                    <Text>
                      <Text>ADD</Text>
                    </Text>
                  </View>
                </View>
              </Card>
            </View>
          </View>
          <View style={styles.Table_col}>
            <Text style={{ color: 'white' }}>Your Team</Text>
            {
                yourTeam.map((hero, i) => {
                  return (
                    <Card key={i} containerStyle={styles.card_style}>
                      <View style={styles.incard_layout}>
                        <View>
                          <Image
                            style={styles.image}
                            source={hero.image}
                          />
                        </View>
                        <View>
                          <Text>{hero.name}</Text>
                        </View>
                      </View>
                    </Card>
                  )
                })
              }
          </View>
        </View>
      </View>
      <View style={styles.result_list_wrapper}>
      {
                resultList.map((hero, i) => {
                  return (
                    <Card key={i} containerStyle={styles.card_style}>
                      <View style={styles.incard_layout}>
                        <View>
                          <Image
                            style={styles.image}
                            source={hero.image}
                          />
                        </View>
                        <View>
                          <Text>{hero.name}</Text>
                        </View>
                      </View>
                    </Card>
                  )
                })
              }
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    alignItems:'center',
    marginTop: '6%',
    height: '100%',
    backgroundColor: 'rgb(1,1,1)',
    color: 'white',

  },
  Table_area: {
    paddingTop: '10%',
    paddingLeft: '3%',
    paddingRight: '3%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'auto'
  },
  Table: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  Table_col: {
    width: '50%',
    backgroundColor: 'rgb(73, 73, 73)',
    alignItems: 'center',
    padding: 5,
    // paddingLeft: 5,
    // paddingRight: 5,
    // paddingBottom:5,
    marginLeft: 2,
    marginRight: 2,
    borderRadius: 15,
  },
  Table_items: {
    width: '100%',
    alignItems: 'center'
  },
  card_style: {
    width: '100%',
    borderRadius: 10,
    paddingTop: 6,
    paddingBottom: 6,
    // borderWidth:1,
    // borderColor:'rgb(1,1,1)',
  },
  image: {
    width: 25,
    height: 25,
    borderRadius: 50,
    marginRight: 10
  },
  incard_layout: {
    display: 'flex',
    flexDirection: 'row'
  },
  result_list_wrapper:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    width:'90%'
  }
});
