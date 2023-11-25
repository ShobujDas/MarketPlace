import React from 'react';
import UserRegistrationForm from "../components/forms/UserRegistrationForm.jsx";
import MasterLayout from "../components/layouts/MasterLayout.jsx";

const UserRegistrationPage = () => {
    return (
        <div>
            <MasterLayout>
                <UserRegistrationForm/>
            </MasterLayout>
        </div>
    );
};

export default UserRegistrationPage;