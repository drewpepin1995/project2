module.exports = function(sequelize, DataTypes) {
  var Sports = sequelize.define("Sports", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Sports;
};
