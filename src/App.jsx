import {useEffect, useState} from 'react';
import createVerbsStore from './hooks/useVerbsStore';
import loginAnonymous from './network/loginAnonymous';
// import ConjugationOutput  from './ConjugationOutput';
import {Counter as Test} from './Test/Test';
import RootRouter from './routes/RootRouter';
import Header from './components/header/Header';

export default function App () {
    const [verb, setVerb] = useState(undefined)
    const [conjuged, setConjuged] = useState([]);

    const [isDestroyCounter, setIsDestroyCounter] = useState(false);

    useEffect( () => {
       const timer =  setTimeout(()=> setIsDestroyCounter(true), 5000);
       return () => clearTimeout(timer);
    }, [])


    useEffect(() => {
        async function fetchData() {
            const store = createVerbsStore(await loginAnonymous())
            const data = await store.find({infinitive: 'tener'})
        

            console.log(JSON.stringify(data, null, '\t'));
            // console.log(JSON.stringify(data[0], null, '\t'))
            setVerb(data[0].infinitive)


            const arrayInf = data.map((item)=> item.infinitive);
            const arrayConjuged = data.map((item) => item.form_1s)
            // console.log(arrayConjuged);
            setVerb(arrayInf[0]);
            setConjuged(arrayConjuged);
        }; 
        fetchData();
    }, [])

    
    return (
    <div>
        {/* {isDestroyCounter ? null : <Test />} */}
        {/* <ConjugationOutput verbConjuged={conjuged} /> */}
        <Header />
        {/* <h3>Espanol infinitive: {verb}</h3> */}
        <main>
            <RootRouter />
        </main>
        <footer>FOOTER</footer>
    </div>);
}


//modo={verb.modo} tiempo={verb.tiempo} form1s={verb.form_1s}

// verbInfinitive={verb}
// "mood": "Indicativo",
// 		"mood_english": "Indicative",
// 		"tense": "Presente",
// 		"tense_english": "Present",
// 		"verb_english": "I have, am having",
// 		"form_1s": "tengo"

//<Header - contacts? about? how to use?/>
//< pages? links? - для роутинга
//<ConjugationOutput />
//<ConjugExercise />
//<Answer />
//<Footer?>
//style - как что подключить стили, просто в .css?


// export default function Application () {
//     const [verb, setVerb] = useState(undefined)
//     useEffect(async () => {
//         const store = createVerbsStore(await loginAnonymous())
//         const d = await store.find({infinitive: 'tener'})
//         console.log(JSON.stringify(d, null, '\t'))
//         setVerb(d[0].infinitive)
//     }, [])
//     return <h1>Espanol infinitive: {verb}</h1>
// }

// src\ConjugationParams .jsx
//   Line 5:32:  'verbForm' is not defined  no-undef
//   Line 6:26:  'change' is not defined    no-undef

// Search for the keywords to learn more about each error.

