// auth.js

const roles = {
    DIRECTOR: 'director',
    MANAGER: 'manager',
    EMPLOYEE: 'employee'
};

const permissions = {
    [roles.DIRECTOR]: ['READ', 'WRITE', 'DELETE', 'MANAGE_USERS'],
    [roles.MANAGER]: ['READ', 'WRITE'],
    [roles.EMPLOYEE]: ['READ']
};

const authorize = (role, action) => {
    if (permissions[role] && permissions[role].includes(action)) {
        return true;
    }
    return false;
};

module.exports = { roles, permissions, authorize };