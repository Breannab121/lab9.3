import React from 'react';
import { UserProfileCardProps } from '../../types';

export const UserProfileCard: React.FC<UserProfileCardProps> = (props) => {
    return (
        <div>
            <p>Id: {props.user.name}</p>
            <p>Email: {props.showEmail ? "john@gmail.com" : "null"} </p>
            <p>Role: {props.showRole ? "Admin" : "User"} </p>
        </div>
    )
}