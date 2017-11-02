import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

/* 
- text input is a primitive you cal place it anywhere
- text inputs behave like the image tags
- by default they do not have a height and width
- render with a heither and with and styling of 0
*/
class LoginForm extends Component {

    // add state from component
    // state is used to get feedback from user
    // when ever setState is called the component re-renders
    state = { email: '', password: '' };

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder="user@gmail.com"
                        label="Email:"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder="password"
                        label="Password:"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardSection>
                <CardSection>
                    <Button>Login</Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;