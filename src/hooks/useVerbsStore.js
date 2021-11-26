import RealmApp from '../network/realmApp';

export default function createVerbsStore (user) {
    const mongodb = user.mongoClient("mongodb-atlas");
    return mongodb.db("verbs-server").collection("jehle_verb_mongo");
}
