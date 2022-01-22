import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Picker } from 'react-native';
import { Card } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';

function List(props){
    return(

                    <View style={props.styles.Table_col}>
                        <Text style={{ color: 'white' }}> {props.title}</Text>
                        <View style={props.styles.Table_items}>
                            {
                                (props.team) ?
                                    props.team.map((hero, i) => {
                                        return (
                                            <Card key={i} containerStyle={props.styles.card_style}>
                                                <View style={props.styles.incard_layout}>
                                                    <View>
                                                        <Image
                                                            style={props.styles.image}
                                                            source={{ uri: hero.image }}
                                                        />
                                                    </View>
                                                    <View>
                                                        <Text>{hero.localized_name}</Text>
                                                    </View>
                                                </View>
                                            </Card>

                                        )
                                    })
                                    : <View></View>
                            }
                        </View>
                        <Picker
                            style={props.styles.picker}
                            selectedValue={props.selected}
                            onValueChange={(itemValue) => props.Value_change(itemValue,props.setSelected,props.team,props.setteam)}>
                            {
                                props.heroList.map(hero => {
                                    return (<Picker.Item label={hero.localized_name} value={hero.localized_name} key={hero.id} />)
                                })
                            }
                        </Picker>
                        <Button
                            title="Clear"
                            type="outline"
                            onPress={()=>{props.setteam([])}}
                        />
                    </View>
    )
}
export default List