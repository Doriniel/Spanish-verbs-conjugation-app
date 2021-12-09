import * as Realm from 'realm-web';
import RealmApp from './realmApp';



async function loginAnonymous() {
    return await RealmApp
        .logIn(Realm.Credentials.anonymous())
        .catch((e) => console.log('Error:', e));
}
const Client = loginAnonymous()
export default Client