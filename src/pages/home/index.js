import { useContext } from 'react';
import { TransactionsSummary, TransactionsList, Button } from '../../components';
import { useHistory } from "react-router-dom";
import Context from '../../components/api-provider/context';
import icon from './icon.svg'
import './index.scss';

function Home(){

    let history = useHistory()
    const { transactions, setTransactions } = useContext( Context )

    function newTransaction(){
        history.push('/new-transaction')
    }

    return (
        <div className="home-container">
            <TransactionsSummary transactions={transactions} />
            <TransactionsList transactions={transactions} />
            
            <div className="action-container">
                <Button className="active" onClick={newTransaction}> <img src={icon} alt="+" /> Criar Transação</Button>
            </div>
        </div>
    )
}

export default Home;