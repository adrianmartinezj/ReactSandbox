import React from 'react';
import { Button } from 'shards-react';

export default class TileView extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return (
        <div>
            <h1>This is a test.</h1>
            <div>
                <Button theme="success">Success</Button>
            </div>                
        </div>
        );
    }
}