import users from "../database.js";

export const createUserServices = async (userData) => {
  console.log(userData);
  const newUser = {
    ...userData,
  };

  const respUser = {
    ...userData,
    uuid: newUser.uuid,
  };

  users.push(newUser);

  return [201, respUser];
};
