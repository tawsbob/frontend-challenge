import { useEffect, useState } from 'react';
import Context from './context';
import { httpClient } from '../../helpers';

const RestClient = httpClient()

function ApiProvider({ children }){

    const [ transactions, setTransactions ] = useState([])
    const [ loading, setLoading ] = useState(false)

    function load(){
        setLoading(true)

        RestClient
            .get('/transactions')
            .then(({ data })=>{ 
                setTransactions( data )
                setLoading(false)
            })
    }

    useEffect(()=>{

        if(!transactions.length){
            load()
        }
    })

    return (
        <Context.Provider value={{ RestClient, transactions, setTransactions, loading, setLoading }}>
            { children }
        </Context.Provider>
    )
}

export default ApiProvider;