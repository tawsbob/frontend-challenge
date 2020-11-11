import { useEffect, useState } from 'react';
import Context from './context';
import { httpClient } from '../../helpers';

const RestClient = httpClient()

function ApiProvider({ children }){

    const [ transactions, setTransactions ] = useState([])
    const [ loading, setLoading ] = useState(false)


    function onError(){
        //tratar os erros :)
    }

    function load(){
        setLoading(true)

        RestClient
            .get('/transactions')
            .then(({ data })=>{ 
                setTransactions( data )
                setLoading(false)
            })
            .catch(onError)
    }

    function newTransaction( values ){

        setLoading(true)

        return new Promise(( resolve, reject )=>{
            RestClient
                .post('/transactions', values)
                .then(({ data })=>{ 
                   if(data){
                       setLoading(false)
                       setTransactions( [ ...transactions, data ] )
                       resolve(data)
                   }
                })
                .catch((e)=>{
                    onError(e)
                    reject(e)
                })
        })

        
    }

    useEffect(()=>{

        if(!transactions.length && !loading){
            load()
        }
    })

    return (
        <Context.Provider value={{ RestClient, transactions, setTransactions, loading, setLoading, newTransaction }}>
            { children }
        </Context.Provider>
    )
}

export default ApiProvider;