import {useEffect, useState} from 'react';
import createVerbsStore from './hooks/useVerbsStore';
import loginAnonymous from './network/loginAnonymous';

export default function Application () {
    const [verb, setVerb] = useState(undefined)
    useEffect(async () => {
        const store = createVerbsStore(await loginAnonymous())
        const d = await store.find({infinitive: 'tener'})
        console.log(JSON.stringify(d, null, '\t'))
        setVerb(d[0].infinitive_english)
    }, [])
    return <h1>{verb}</h1>
}
