const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Document = sequelize.define('Document', {
    name: { type: DataTypes.STRING, allowNull: false },
    category: { type: DataTypes.STRING, allowNull: false },
    subcategory: { type: DataTypes.STRING },
    status: { type: DataTypes.ENUM('Pendiente', 'En Progreso', 'Revisión', 'Aprobado', 'Implementado'), defaultValue: 'Pendiente' },
    responsible: { type: DataTypes.STRING },
    deadline: { type: DataTypes.DATEONLY },
    mandatory: { type: DataTypes.BOOLEAN, defaultValue: false }
});

const Control = sequelize.define('Control', {
    controlId: { type: DataTypes.STRING, allowNull: false, unique: true },
    name: { type: DataTypes.STRING, allowNull: false },
    category: { type: DataTypes.ENUM('Organizacional', 'Personas', 'Físico', 'Tecnológico'), allowNull: false },
    status: { type: DataTypes.ENUM('No Implementado', 'En Implementación', 'Implementado', 'Verificado', 'No Aplicable'), defaultValue: 'No Implementado' },
    justification: { type: DataTypes.TEXT },
    evidence: { type: DataTypes.TEXT }
});

const Audit = sequelize.define('Audit', {
    type: { type: DataTypes.STRING, allowNull: false },
    date: { type: DataTypes.DATEONLY },
    status: { type: DataTypes.ENUM('Pendiente', 'Programada', 'En Curso', 'Completada'), defaultValue: 'Pendiente' },
    auditor: { type: DataTypes.STRING },
    findings: { type: DataTypes.INTEGER, defaultValue: 0 }
});

const NonConformity = sequelize.define('NonConformity', {
    type: { type: DataTypes.ENUM('Mayor', 'Menor', 'Mejora'), allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    control: { type: DataTypes.STRING },
    status: { type: DataTypes.ENUM('Abierta', 'En Tratamiento', 'En Verificación', 'Cerrada'), defaultValue: 'Abierta' },
    deadline: { type: DataTypes.DATEONLY }
});

module.exports = { Document, Control, Audit, NonConformity };
