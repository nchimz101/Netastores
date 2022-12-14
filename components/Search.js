import React, { useState } from 'react'
import Icon from './Icon';
import argonTheme from '../constants/Theme';
import { TouchableOpacity } from 'react-native';
import CartContext from './../store/cart'
import { Block, Text } from 'galio-framework';

function Search({isWhite, style, navigation}) {


    return (
            <TouchableOpacity style={[{
            padding: 12,
            position: 'relative',
          }, style]} onPress={() => navigation.navigate('Cart')}>
              <Block>
              <Icon
                family="ArgonExtra"
                size={16}
                name="search-zoom-in"
                color={argonTheme.COLORS[isWhite ? 'WHITE' : 'ICON']}
                />
              </Block>
                
            </TouchableOpacity>
        
    )
}

export default Search
