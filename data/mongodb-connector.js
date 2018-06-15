import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017/test');

const profilesSchema = mongoose.Schema({
    user_id: Number,
    nickname: String,
    email: String,
    password: String,
    name: String,
    lastname: String
});
profilesSchema.virtual('id').get(function() {
    return this._id;
});
profilesSchema.set('toJSON', { virtuals: true });
profilesSchema.set('toObject', { virtuals: true });

const chatsSchema = mongoose.Schema({
    chatName: String,
    сhatDesc: String,
    botName: String,
    firstNickname: String,
    firstUser_id: Number,
    secondNickname: String,
    secondUser_id: Number
});

chatsSchema.virtual('id').get(function() {
    return this._id;
});
chatsSchema.set('toJSON', { virtuals: true });
chatsSchema.set('toObject', { virtuals: true });


const profiles = mongoose.model('profiles', profilesSchema);
const chats = mongoose.model('chats', chatsSchema);

export default {
        profiles,
        chats
};