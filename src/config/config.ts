export default class config{
  // 1. MongoDB
  public MONGO_URI= process.env.MONGO_URI || 'mongodb://localhost:27017/arrivedatabasetest';

  // 2. Express Server Port
  public LISTEN_PORT= process.env.LISTEN_PORT || 3000;
}