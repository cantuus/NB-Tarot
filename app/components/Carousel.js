import Carousel from 'react-native-snap-carousel';
import { StyleSheet, Text, View, Image } from 'react-native'
import * as React from 'react';
import TarotStore from '../config/tarotStore'

export default class TarotCarousel extends React.Component {

    _renderItem = ({ item, index }) => {
        return (
            <View>
                <Image
                    source={require(item.image)}
                ></Image>
            </View>
        )
    }


    render() {
        return (
            <Carousel
                ref={(c) => { this._carousel = c; }}
                data={TarotStore.tarots}
                renderItem={this._renderItem}
                sliderWidth={20}
                itemWidth={20}
            />
        );
    }
}



