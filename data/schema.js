import {makeExecutableSchema, addMockFunctionsToSchema} from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
type Query {

  profile(id: ID!): Profile
  profiles: [Profile]
  
  chat(id: ID!): Chat
  chats: [Chat]
  
  msginf(id: ID!): MsgInf
  msginf: [MsgInf]
  
  msghist(id: ID!): MsgHist
  msghist: [MsgHist]

}

type Mutation {

  addProfile(profile: ProfileInput!): Profile
  updateProfile(id: ID!, profile: ProfileInput!): Profile
  deleteProfile(id: ID!): ID
  
  addChat(chats: ChatInput!): Chat
  updateChat(id: ID!, chats: ChatInput!): Chat
  deleteChat(id: ID!): ID
  
  addMsgInf(msg: MsgInfInput!): MsgInf
  updateMsgInf(id: ID!, msginf: MsgInfInput!): MsgInf
  deleteMsgInf(id: ID!): ID

  addMsghist(msghist: MsgHistInput!): MsgHist
  updateMsghist(id: ID!, msghist: MsgHistInput!): MsgHist
  deleteMsghist(id: ID!): ID

}

type Profile {
  id: ID!
  nickname: String
  password: String
  email: String
  lastname: String
  name: String
}

type Chat {
  id: ID!
  chatName: String
  chatDesc: String
  botName: String
}

input ProfileInput {
  nickname: String
  password: String
  email: String
  lastname: String
  name: String
}


input ChatInput {
  chatName: String
  chatDesc: String
  botName: String
}

type MsgInf {
  id: ID!
  user_nickname: String
  msg: String
}

type MsgHist {
  id: ID!
  user_ans: String
  bot_ans: String
  key_word: String
}

input MsgInfInput {
  msg: String
  user: String
}

input MsgHistInput {
  id: ID!
  key_word: String
  msg_bot: String
  user_msg: String
}

`;

const schema = makeExecutableSchema({typeDefs, resolvers});

export default schema;
