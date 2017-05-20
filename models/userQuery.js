module.exports = function(sequelize, DataTypes) {
  var userQuery = sequelize.define("userQuery", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5]
      }
    },
    zipCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [5]
    },
    city: {
      type: DataTypes.STRING,
      defaultValue: "Personal"
    },
    cyberUrl: {
      type: DataTypes.STRING,
      allowNull: false

    }
  });
  return userQuery;
};
