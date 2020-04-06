import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.VARCHAR,
        email: Sequelize.VARCHAR,
        password_hash: Sequelize.VARCHAR,
        provider: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default User;
