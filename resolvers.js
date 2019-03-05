const user = {
  _id: "1",
  name: "Andriy",
  email: "xai1983kbu@gmail.com",
  picture: "https://cloudinary.com/abcd"
};

module.exports = {
  Query: {
    me: () => user
  }
};