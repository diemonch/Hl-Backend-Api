const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema=new mongoose.Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true
        },
    name:{
        type:String,
        required:[true,'Must have user name']
    },
    email: {
        type: String,
        validate: {
            validator: async function(email) {
            const user = await this.constructor.findOne({ email });
            if(user) {
              if(this.id === user.id) {
                return true;
              }
              return false;
            }
            return true;
          },
          message: props => 'The email address is already in use.'
        },
        required: [true, 'User email is required']
      },
      password:{
          type:String,
          required: [true, 'Please enter the password']
      }

},{ timestamps: true})

const User = mongoose.model('User', userSchema);
module.exports = User;   