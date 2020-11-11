import { useContext, useState, useEffect } from 'react';
import { TransactionsSummary, Loader, TransactionsList, Button } from '../../components';
import { useHistory } from "react-router-dom";
import Context from '../../components/api-provider/context';
import './index.scss';

function Home(){

    let history = useHistory()
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

    function newTransaction(){
        history.push('/new-transaction')
    }

    return (
        <div className="home-container">
            <TransactionsSummary transactions={transactions} />
            <TransactionsList transactions={transactions} />
            
            <div className="action-container">
                <Button className="active" onClick={newTransaction}> Criar Transação</Button>
            </div>

            <Loader active={ !transactions.length } />
        </div>
    )
}

export default Home;