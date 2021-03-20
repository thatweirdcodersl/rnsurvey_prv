import { Card,Title,Button, Paragraph } from 'react-native-paper';
import React from 'react';
//card component for view 

const CardView =(props) =>{
    
    return(

        <Card>
            <Card.Title title={props.title} subtitle={props.description} />
            <Card.Content>
                <Paragraph>{props.body}</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: props.imageurl }} />
            <Card.Actions>
                <Button onPress={props.evt}>{props.btntitle}</Button>
            </Card.Actions>
        </Card>

    )

};

export default CardView;