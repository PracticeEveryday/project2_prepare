class registerService {
  static addUser = async ({ email, password, name, info }) => {
    console.log(email, password, name, info);
  };
}

export { registerService };
