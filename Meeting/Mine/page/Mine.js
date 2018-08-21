import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet,View,FlatList,SectionList,Text,Image,ImageBackground } from 'react-native';

class Mine extends PureComponent {
    
    _renderItem = (item,index)=>{
        
        return (
            <Text style={styles.sectionItemStyle} key={index} style={styles.sectionItemStyle}>{item} </Text>
        )
    }
    
    render() {
        
        return (
        <View style={styles.container}>
            <View style={styles.headerView}>
                <Image style={styles.headerImg}
                source = {require('../page/touxiang.png')}
                />
                <Text style={{width:30,height:30,alignContent:'center'}}>姓名</Text>

            </View>
            <View>
            <SectionList
                renderItem={({item,index})=>this._renderItem(item,index)}
                renderSectionHeader = {({section:{title}}) => (
                    <Text style ={{fontWeight:"bold",height:15}}> </Text>
                )}
                sections={[
                    {title:"",data:["关于我们"]},
                    {title:"",data:["系统设置"]}
                ]}
                ItemSeparatorComponent={() => <View style={{height:1}}><Text></Text></View>}
                keyExtractor={(item,index)=> item+index}
            />
            </View>
        </View>
        
        );
    }
}

const styles = StyleSheet.create({
    // container:{
    //     alignItems:'flex-start',
    //     paddingTop:23,
    // },
    headerView:{
        height:100,
        backgroundColor:'#41BFFC',
        alignContent:'center',
        alignItems:'center'
    },
    headerImg:{
        width:60,
        height:60,
        // borderRadius:15,
    },
    sectionItemStyle:{
        height: 40, 
        textAlign:'left',
        backgroundColor: "#ffffff", 
        color: '#5C5C5C', 
        fontSize: 20,
        paddingTop:8,
        paddingLeft:10
    }

});

export default Mine;