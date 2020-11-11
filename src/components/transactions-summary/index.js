import './index.scss';

const countMoney = (trans)=>(  
    trans.reduce((acc, t)=>{
        acc = acc + parseInt(t.amount)
        return acc
    }, 0)
)

function TransactionsSummary({ transactions }){

    const total = countMoney( transactions )

    return (
        <div className="transactions-summary-container">
            <div className="row">
                <h3>Número de transações</h3>
                <strong className="green-money">{ transactions.length }</strong>
            </div>
            <div className="row">
                <h3>Valor Total</h3>
                <strong className="green-money">{ total }</strong>
            </div>
        </div>
    )
}

export default TransactionsSummary;