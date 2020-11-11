import { useContext, useState, useEffect } from 'react';
import { TransactionsSummary, Loader } from '../../components';
import Context from '../../components/api-provider/context';


function Home(){

    const { RestClient } = useContext( Context )
    const [ transactions, setTransactions ] = useState([])
    
    useEffect(()=>{

        if(! transactions.length ){
            RestClient
                .get('/transactions')
                .then(({ data })=>{ 
                    setTransactions( data )
                })
        }

    })

    return (
        <div className="home-container">
            {
                transactions.length ? (
                    <TransactionsSummary transactions={ transactions } />
                ) : (
                    <Loader />
                )

            }
        </div>
    )
}

export default Home;