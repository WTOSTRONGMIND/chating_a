import React from 'react';
import MessageList from '../components/MessageList';
import MessageInput from '../components/MessageInput';

const HomePage: React.FC = () => {
    return (
        <div>
            <h1>Messaging App</h1>
            <MessageList />
            <MessageInput />
        </div>
    );
};

export default HomePage;