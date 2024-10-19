const users = [
    {
      username: "user1",
      password: "123456", // 64578365hkj@372537248p435 hash
      token: "token1"
    },
    {
      username: "user2",
      password: "123456",// 64578365hkj@372537248p435 hash
      token: "token2"
    }
  ]
  
  function login(username, password) {
    const user = users.find(user => user.username == username)
    if (!user) {
      return { success: false, message: "user not found" }
    }
    if (user.password === password) {
      return {
        success: true,
        token: user.token,
        user: user,// bo field password
        message: "login success"
      }
    } else {
      return { success: false, message: "password wrong" }
    }
  }
  function getUserByToken(token) {
    const user = users.find(user => user.token == token)
    if (!user) {
      return { success: false, message: "user not found" }
    }
    return {
      success: true,
      token: user.token,
      user: user,// bo field password
      message: "login success"
    }
  }
  
  module.exports = {
    login,
    getUserByToken
  }