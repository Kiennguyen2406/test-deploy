import React from "react";
import { useSelector } from "react-redux";

function User() {
    const users = useSelector(state => state.users || []); // Default to an empty array
    // console.log(users); // Inspect the structure of users

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Website</th>
                </tr>
                </thead>
                <tbody>
                {Array.isArray(users) && users.length > 0 ? (
                    users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.website || "N/A"}</td> {/* Fallback if website is missing */}
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="4">No users available</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}

export default User;
