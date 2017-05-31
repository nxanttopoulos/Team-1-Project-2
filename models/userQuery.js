module.exports = function(sequelize, DataTypes) {
  var userQuery = sequelize.define("userQuery", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [11]
      }
    },
    zipCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [11]
    },
    city: {
      type: DataTypes.STRING,
      defaultValue: "Personal"
    },
    cyberUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lat:{
      type: DataTypes.FLOAT,
      allowNull: false,
      len:[11]

    },
    lng:{
      type: DataTypes.FLOAT,
      allowNull: false,
      len:[11]
    }
  });
  return userQuery;
};
