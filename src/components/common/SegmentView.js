import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Chip } from 'react-native-paper'
import ReactNativeSegmentedControlTab from 'react-native-segmented-control-tab'
import { Colors, FontName } from '../../utils'
import ResponsivePixels from '../../utils/ResponsivePixels'

const SegmentView = ({ segments, onSelect, title }) => {

    const [selectedIndex, setSelectedIndex] = useState(-1)
    return (
        <View>
            <Text style={styles.titleStyle}>{title}</Text>

            <ReactNativeSegmentedControlTab
                onTabPress={(index) => {
                    setSelectedIndex(index)

                    if (onSelect)
                        onSelect
                }}
                selectedIndex={selectedIndex}
                values={segments.map((s) => s.name)}

                tabsContainerStyle={{
                    backgroundColor: Colors.blueGray200,
                    paddingVertical: 8,
                    paddingHorizontal: 16,
                    borderRadius: 8,
                }}
                tabStyle={{
                    backgroundColor: "transparent",
                    padding: 8,
                    height: 32,
                    borderWidth: 0,
                    borderRadius: 8
                }}
                activeTabStyle={{
                    backgroundColor: Colors.white,
                    elevation: 5
                }}
                activeTabTextStyle={{
                    color: Colors.blueGray900
                }}
                tabTextStyle={{
                    color: Colors.blueGray900
                }}
            />
        </View>
    )
}

export default SegmentView

const styles = StyleSheet.create({
    titleStyle: {
        color: Colors.black,
        fontSize: ResponsivePixels.size15,
        lineHeight: ResponsivePixels.size22,
        fontFamily: FontName.regular,
        paddingVertical: 8
    }
})
