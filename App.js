import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Picker } from 'react-native';
import { Card } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { color } from 'react-native-elements/dist/helpers';
import herodata from './herolist2.json'
import List from './Components/List';

export default function App() {
    const [enemyTeam, setenemyTeam] = useState([]);
    const [yourTeam, setyourTeam] = useState([]);
    const [resultList, setresultList] = useState([{ name: 'Anti-Mage', image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/alchemist.png' }])
    const [selectedEnemy, setselectedEnemy] = useState(null)
    const [selectedYour, setselectedYour] = useState(null)
    const [heroList, setheroList] = useState(herodata)

    function Value_change(itemValue,selected,team,setteam) {
        selected(itemValue);
        let en = heroList.filter(hero => hero.localized_name == itemValue)
        en[0].image = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/' + convertname(itemValue) + '.png';

        
        // (enemyTeam) ? setenemyTeam([...enemyTeam, en[0]]) : setenemyTeam([en[0]])
        (team) ? setteam([...team, en[0]]) : setteam([en[0]])

        setheroList(heroList.filter(hero => hero.localized_name !== itemValue))
       
    }
    function convertname(local_name) {
        let arr = local_name.split(" ")
        if (arr.length === 2) {
            if (arr[0].toLowerCase() + arr[1].toLowerCase() === "nature'sprophet")
                return ('furion')
            if (arr[0].toLowerCase() + arr[1].toLowerCase() === "shadowfiend")
                return ('nevermore')
            if (arr[0].toLowerCase() + arr[1].toLowerCase() === "drowranger")
                return ('drow_ranger')
            if (arr[0].toLowerCase() + arr[1].toLowerCase() === "crystalmaiden")
                return ('crystal_maiden')
            return (arr[0].toLowerCase() + arr[1].toLowerCase())
        }
        else if (arr.length === 1) {
            // arr[0][1]=arr[0][1].toLowerCase()
            return (arr[0].toLowerCase())
        }
        else {
            return (null)
        }


    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.Table_area}>
                <View style={styles.Table}>
                    <List title="Your team" styles={styles} team={enemyTeam} setteam={setenemyTeam} selected={selectedEnemy} setSelected={setselectedEnemy} heroList={heroList} Value_change={Value_change} />
                    <List title="Enemy team" styles={styles} team={yourTeam} setteam={setyourTeam} selected={selectedYour} setSelected={setselectedYour} heroList={heroList} Value_change={Value_change} />
                </View>
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
