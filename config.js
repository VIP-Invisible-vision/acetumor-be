/*
* [config]
* - db
*/

module.exports = {
  db: {
    host: "localhost",
    port: 27017,
    username: "root",
    password: "phantomlshnb!",
    authSource: "admin",
    string: "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false",
    db: "acetumor"
  },
  GITHUB: {
  	oauth_uri: 'https://github.com/login/oauth/authorize',
    access_token_url: 'https://github.com/login/oauth/access_token',
    // 获取 github 用户信息 url // eg: https://api.github.com/user?access_token=******&scope=&token_type=bearer
    user_url: 'https://api.github.com/user',

    // 生产环境
    redirect_uri: 'http://localhost:8080/home/',
    client_id: '368c3543fd57241028ca',
    client_secret: 'a5fbe2fb9e69bf21b24cf533edef8c65da3ac3cd',
  }
}

