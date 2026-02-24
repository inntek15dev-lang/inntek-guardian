const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Role = sequelize.define('Role', {
    name: { type: DataTypes.STRING, allowNull: false, unique: true },
    slug: { type: DataTypes.STRING, allowNull: false, unique: true }
});

const Permission = sequelize.define('Permission', {
    resource: { type: DataTypes.STRING, allowNull: false },
    action: { type: DataTypes.STRING, allowNull: false }
});

const User = sequelize.define('User', {
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    role_id: {
        type: DataTypes.INTEGER,
        references: { model: Role, key: 'id' }
    }
});

Role.hasMany(User, { foreignKey: 'role_id' });
User.belongsTo(Role, { foreignKey: 'role_id' });

Role.belongsToMany(Permission, { through: 'RolePermissions' });
Permission.belongsToMany(Role, { through: 'RolePermissions' });

module.exports = { Role, Permission, User };
