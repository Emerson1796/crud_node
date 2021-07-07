const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const Register = sequelize.define("register", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  name: {
    allowNull: false,
    type: Sequelize.STRING,
    validate: {
      len: [2, 255]
    }
  },
  email: {
    allowNull: false,
    type: Sequelize.STRING(255),
    validate: {
      len: [2, 255],
      isEmail: {
        msg: "Esse email não é válido"
      },
      notEmpty: {
        msg: "Esse campo não pode ser vazio"
      }
    }
  },
  cell_phone: {
    allowNull: false,
    type: Sequelize.INTEGER,
    validate: {
      len: [8, 15]
    }
  },
  address: {
    allowNull: false,
    type: Sequelize.STRING,
    validate: {
      len: [2, 255]
    }
  }
});

module.exports = Register;