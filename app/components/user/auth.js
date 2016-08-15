import React from 'react';
import { Card, CardHeader, CardTitle, CardText, CardActions } from 'material-ui/Card';

export default React.createClass({
    render() {
        return (
            <div>
                <Card
                    style={{
                    maxWidth: 400,
                    margin: 'auto',
                    marginTop: 30,
                    textAlign: 'center'
                    }}
                >

                    <CardTitle title="Welcome" subtitle="Sign in with your Google Account"/>
                    <CardActions style={{textAlign: 'center'}}>
                        <div className="g-signin2" data-onsuccess="onSignIn"></div>
                    </CardActions>
                </Card>
            </div>
        );
    }
})