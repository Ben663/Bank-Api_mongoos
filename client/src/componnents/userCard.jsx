import React from "react";

export function UserCard({ user }) {
    const { _id, cash, credit } = user;
    return (
        <div>
            <div>ID: {_id}</div>
            <div>Cash: { cash}</div>
            <div>Credit: { credit}</div>
        </div>
    )
};