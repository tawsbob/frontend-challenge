import { useState } from 'react';
import { TopNav } from '../../components';
import { useHistory } from "react-router-dom";
import { TransactionForm, Button } from '../../components';

import './index.scss';
import Arrow from './arrow.svg';
import { useEffect } from 'react';

function ArrowBTN(){
    let history = useHistory()
    return (<img src={Arrow} onClick={history.goBack} alt="voltar" />)
}


function getValue( f, key ){
    return f[key].current.value
}

function NewTransactionPage(){

    let fields = null

    const [ allFilled, setAllFilled ] = useState(false)

    function getFields(f){
        fields = f
    }

    function getValuesFromInputs(){
        const nome =  getValue(fields, 'inputNome') 
        const CPF = getValue(fields, 'inputCPF')
        const cartao = getValue(fields, 'inputCartao')
        const data = getValue(fields, 'inputData')
        const CVV = getValue(fields, 'inputCVV')
        const valor = getValue(fields, 'inputValor')

        return {
            nome, CPF, cartao, data, CVV, valor
        }

    }

    function newTransaction(){
        

    }

    function onFieldChange(){
        const allValues = getValuesFromInputs()
        const isValid = Object.keys(allValues).reduce((acc, k)=>{
            if(!allValues[ k ]){
                acc = false
            }
            return acc
        }, true)
        setAllFilled(isValid)
    }   

    useEffect(()=>{
        console.log(fields)
    })

    const btnClass = allFilled ? 'active' : ''

    return (
        <div className="new-transaction-page-container">
            <TopNav leftContent={ArrowBTN()} title="Nova transação" />
            <TransactionForm onFieldChange={onFieldChange}  getFields={getFields} />
            <Button className={btnClass}  onClick={newTransaction}>Criar transação</Button>
        </div>
    );
}

export default NewTransactionPage;