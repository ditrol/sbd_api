const neo4j = require('neo4j-driver').v1;

const SERVER_URI = 'bolt://127.0.0.1:7687';
const SERVER_USER = 'neo4j';
const SERVER_PASSWORD = 'admin';

const driver = neo4j.driver(SERVER_URI, neo4j.auth.basic(SERVER_USER, SERVER_PASSWORD));

const recordToAllhist = function (record) {
    if (!record) {
        return null;
    }

    const props = record.get(0).properties;
    return {
        id: props.id,
        msgid: props.msgid
    };
};

const recordToBotKeys = function (record) {
    if (!record) {
        return null;
    }

    const props = record.get(0).properties;
    return {
        text: props.text
    };
};

const recordToUserAnsw = function (record) {
    if (!record) {
        return null;
    }

    const props = record.get(0).properties;
    return {
        title: props.title
    };
};

const recordToBotKeysPhrase = function (record) {
    if (!record) {
        return null;
    }
    
    const props = record.get(0).properties;
    return {
        text: props.text
    };
};

const recordToLogs = function (record) {
    if (!record) {
        return null;
    }
    
    const props = record.get(0).properties;
    return {
        BotMsg: props.BotMsg,
        UsMsg: props.UsMsg
    };
};

export default {
    driver,
    recordToAllhist,
    recordToBotKeys,
    recordToUserAnsw,
    recordToBotKeysPhrase,
    recordToLogs,
};