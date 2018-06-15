import neo4j from './neo4j-connector'
import mongodb from './mongodb-connector'
import cassandra from './cassandra-connector'

const resolvers = {
    Query: {
        profile(root, {id}) {
            //if (!mongodb.isIdValid(id)) {
            //    throw new Error("Invalid id format")
            //}
            return mongodb.profiles.findById(id);
        },
        profiles() {
            let profiles = mongodb.profiles.find();
            return profiles;
        },
        chat(root, {id}) {
            //if (!mongodb.isIdValid(id)) {
            //   throw new Error("Invalid id format")
            //}
            return mongodb.chats.findById(id);
        },
        chats() {
            let chats = mongodb.chats.find();
            return chats;
        },


    }
/*
        Mutation: {
        addProfile(root, {profile}){
            if(!profile.nickname.length) {
                throw new Error("Need to set nickname")
            }
            if(!profile.email.length) {
                throw new Error("Need to set email")
            }
            if(!profile.password.length) {
                throw new Error("Need to set password")
            }
            if(!profile.name.length) {
                throw new Error("Need to set name")
            }
            if(!profile.lastName.length) {
                throw new Error("Need to set last name")
            }
            //if(!profile.user_id.length) {
             //   throw new Error("Need to set user_id")
            //}
            return mongodb.profiles.create(profile);
        },
        updateProfile(root, {id, profile}){
            //if (!mongodb.isIdValid(id)) {
            //   throw new Error("Invalid id format")
            //}
            if(!profile.nickname.length) {
                throw new Error("Need to set nickname")
            }
            if(!profile.email.length) {
                throw new Error("Need to set email")
            }
            if(!profile.password.length) {
                throw new Error("Need to set password")
            }
            if(!profile.name.length) {
                throw new Error("Need to set name")
            }
            if(!profile.lastName.length) {
                throw new Error("Need to set last name")
            }
            return mongodb.profiles.findByIdAndUpdate(id, {$set: profile}, {new: true});
        },
        deleteProfile(root, {id}) {
            //if (!mongodb.isIdValid(id)) {
            //   throw new Error("Invalid id format")
            //}
            return mongodb.profiles.findByIdAndRemove({_id: id});
        }
    }

        /*
        msgHist() {
            return neo4j.driver.session().run(
                'MATCH d RETURN d'
            ).then(result => {
                return result.records.map(neo4j.recordToMsgHist)
            });
        },
        msgInfUserNick(root, {nick}) {
            return cassandra.client.execute(
                'SELECT * FROM MsgInf WHERE user_nick = ?',
                [id]
            ).then(result => {
                return cassandra.responseToMsgInf(result)[0];
            });
        },
        msgInfMsgId(root, {id}) {
            return cassandra.client.execute(
                'SELECT * FROM MsgInf WHERE msg_id = ?',
                [id]
            ).then(result => {
                return cassandra.responseToMsgInf(result)[0];
            });
        },
        msgInf() {
            return cassandra.client.execute(
                'SELECT * FROM MsgInf'
            ).then(result => {
                return cassandra.responseToMsgInf(result);
            });
        }
    },
    
    Mutation: {
        addUser(root, {profile}){
            if(!profile.nickname.length) {
                throw new Error("Need to set nickname")
            }
            if(!profile.email.length) {
                throw new Error("Need to set email")
            }
            if(!profile.password.length) {
                throw new Error("Need to set password")
            }
            if(!profile.name.length) {
                throw new Error("Need to set name")
            }
            if(!profile.lastName.length) {
                throw new Error("Need to set last name")
            }
            //if(!profile.user_id.length) {
             //   throw new Error("Need to set user_id")
            //}
            return mongodb.profiles.create(profile);
        },
        updateProfile(root, {id, profile}){
            //if (!mongodb.isIdValid(id)) {
            //   throw new Error("Invalid id format")
            //}
            if(!profile.nickname.length) {
                throw new Error("Need to set nickname")
            }
            if(!profile.email.length) {
                throw new Error("Need to set email")
            }
            if(!profile.password.length) {
                throw new Error("Need to set password")
            }
            if(!profile.name.length) {
                throw new Error("Need to set name")
            }
            if(!profile.lastName.length) {
                throw new Error("Need to set last name")
            }
            return mongodb.model.profiles.findByIdAndUpdate(id, {$set: profile}, {new: true});
        },
        deleteProfile(root, {id}) {
            //if (!mongodb.isIdValid(id)) {
            //   throw new Error("Invalid id format")
            //}
            return mongodb.model.profiles.findByIdAndRemove({_id: id});
        },
        addChat(root, {chat}) {
            if(!chat.chatName.length){
                throw new Error("Need to set chat name")
            }
            if(!chat.chatDesc.length){
                throw new Error("Need to set chat desc")
            }
            if(!chat.botName.length){
                throw new Error("Need to set bot name")
            }
            if(!chat.firstUser_id.length){
                throw new Error("Need to set id of first user")
            }
            if(!chat.secondUser_id.length){
                throw new Error("Need to set id of second user")
            }
            return mongodb.model.chats.create(chat);
        },
        updateChat(root, {id, chat}) {
            //if (!mongodb.isIdValid(id)) {
            //   throw new Error("Invalid id format")
            //}
            if(!chat.chatName.length){
                throw new Error("Need to set chat name")
            }
            if(!chat.chatDesc.length){
                throw new Error("Need to set chat desc")
            }
            if(!chat.botName.length){
                throw new Error("Need to set bot name")
            }
            if(!chat.firstUser_id.length){
                throw new Error("Need to set id of first user")
            }
            if(!chat.secondUser_id.length){
                throw new Error("Need to set id of second user")
            }
            return mongodb.model.chats.findByIdAndUpdate(chat);
            //TODO: about id etc
        },
        deleteChat(root, {id}) {
            return mongodb.model.chats.findByIdAndRemove({_id: id})
        },
        addLog(){
            if(!log.log.length){
                throw new Error("Need to set log")
            }
            if(!log.phrase.length){
                throw new Error("Need to set phrase")
            }
            if(!log.ansToUser.length){
                throw new Error("Need to set ansToUser")
            }
            if(!log.loop.length){
                throw new Error("Need to set loop")
            }
            return neo4j.driver.session().run(
                'CREATE (c: log {id: {logId}}) RETURN (c)',
                {compositionId: create_UUID()}
            ).then(result => {
                return neo4j.recordToComposition(result.records[0])
            }); //TODO: how to add this shit

        },
        updateLog(root, {id}) {
            if(!log.log.length){
                throw new Error("Need to set log")
            }
            if(!log.phrase.length){
                throw new Error("Need to set phrase")
            }
            if(!log.ansToUser.length){
                throw new Error("Need to set ansToUser")
            }
            if(!log.loop.length){
                throw new Error("Need to set loop")
            }
            return neo4j.driver.session().run(
                'MATCH (log: Log{id: {logId}}) SET log.log = {log} ' +
                'RETURN log',
                {LogId: id}
            ).then(result => {
                if (!result.records[0]) {
                    throw new Error("No log with id: " + id)
                }
                return neo4j.recordToLog(result.records[0])
            });//TODO: how to add this shit
        },
        deleteLog(root,{id}) {
            return neo4j.driver.session().run(
                'MATCH (r: Log {id: {logId}}) DELETE contRel ' +
                'WITH r, r.id as id DELETE (r) RETURN id',
                {logId: id}
            ).then(result => {
                if (!result.records[0]) {
                    throw new Error("No log with id: " + id)
                }
                return result.records[0].get(0)
            });//TODO: how to add this shit
        },
        addMsg(root) {
            if(!msg.msg_id.length){
                throw new Error("Need to set id")
            }
            if(!msg.msg.length){
                throw new Error("Need to set msg")
            }
            if(!msg.user_nick.length){
                throw new Error("Need to set nick")
            }
            return cassandra.client.execute(
                'INSERT INTO MsgInf(msg_id, msg, user_nick) VALUES(?, ?, ?)',
                [msg_id, msg, user_nick]
                ).then(result => {
                    return msg_id;
                });
        }
    },
    ProfileInfo: {
        profile(profileInfo) {
            return mongodb.model.profiles.findById(profileInfo.user_id);
        }
    },
    ChatInfo: {
        chat(chatInfo) {
            return mongodb.model.chats.findById(chatInfo.chat_id); //TODO smth can be wrong
        }
    },
    MsgInfo: {
        msg(msgInfo) {
        return cassandra.client.execute(
            'SELECT * FROM MsgInf WHERE mag_id = ?', [msg.msg_id]
            ).then(result => {
                return msg_id;
            });
        }
    },
    LogInfo: {
        log(logInfo) {
            return neo4j.driver.session().run(
                'MATCH (r: log {id: {logId}}) RETURN d',
                {logId: log.id}
            ).then(result => {
                return result.records.map(neo4j.recordToLog);
            });
        }
    }
    */
}

export default resolvers;