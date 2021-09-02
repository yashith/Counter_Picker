import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Picker } from 'react-native';
import { Card } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';
import herodata from './herolist2.json'


export default function App() {
    const [enemyTeam, setenemyTeam] = useState([{ name: 'Anti-Mage', image: 'alchemist' }]);
    const [yourTeam, setyourTeam] = useState([{ name: 'Anti-Mage', image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/alchemist.png'}]);
    const [resultList, setresultList] = useState([{ name: 'Anti-Mage', image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/alchemist.png'}])
    const [selectedEnemy, setselectedEnemy] = useState(null)
    // let herolist = JSON.parse(herodata);
    const [heroList, setheroList] = useState(herodata)

    function Value_change(itemValue) {
        setselectedEnemy(itemValue);
        setenemyTeam([...enemyTeam, { name: itemValue, image:'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/alchemist.png'}]);
        setheroList(heroList.filter(hero => hero.localized_name !== itemValue))
    }

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
                                                        source={{uri:'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/'+hero.image+'.png'}}
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
                        <Picker
                            style={styles.picker}
                            selectedValue={selectedEnemy}
                            onValueChange={(itemValue)=>Value_change(itemValue)}>
                            {
                                heroList.map(hero => {
                                    return (<Picker.Item label={hero.localized_name} value={hero.localized_name} key={hero.id} />)
                                })
                            }
                            {/* <Picker.Item label="Test" value='test'/>
              <Picker.Item label="Test2" value='test2'/> */}
                        </Picker>
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
                                                    source={{uri:hero.image}}
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
                            <Card key={i} containerStyle={styles.result_card}>
                                <View style={styles.incard_layout}>
                                    <View>
                                        <Image
                                            style={styles.image}
                                            source={{uri:hero.image}}
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
    picker: {
        color: 'white',
        width: '100%',
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '6%',
        height: '100%',
        backgroundColor: 'rgb(34,34,34)',
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
        backgroundColor: 'rgb(44, 44, 46)',
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
    result_list_wrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%'
    },
    result_card: {
        width: '100%',
        backgroundColor: 'rgb(188, 255, 167)',
        borderRadius: 10,
        paddingTop: 6,
        paddingBottom: 6,
    }
});
