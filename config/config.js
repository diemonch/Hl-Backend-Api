module.exports = {
    // 1. MongoDB
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/hldatabase',
  
    // 2. JWT
    TOKEN_SECRET: process.env.TOKEN_SECRET || '817B99E6F2660E73D69AEF0285848D8E79242C5668A082B8536D3611358B4C1F',
  
    // 3. Express Server Port
    LISTEN_PORT: process.env.LISTEN_PORT || 3000
  };