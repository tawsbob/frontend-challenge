import { formatMoney } from '../../helpers';
import './index.scss';

function TransactionsList({ transactions }){
    return (    
        <div className="transactions-list-container">
            {
                transactions.map((t)=>(
                    <div key={t.id}  className="transaction-item">
                            <div className="row">
                                <div className="name">
                                    <strong>{ t.credit_card_holder_name }</strong>
                                </div>
                                <div className="status">
                                    { t.status || 'no-status-found' }
                                </div>
                            </div>
                            <div className="row">
                                <div className="date"> 
                                    10/10/2010 10:30
                                </div>
                                <div className="value">
                                    <strong>{ formatMoney(t.amount) }</strong>
                                </div>
                            </div>
                    </div>
                ))
            }
        </div>
    )
}

export default TransactionsList;
