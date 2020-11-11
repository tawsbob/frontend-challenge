import { useState, useContext } from 'react';
import { TopNav } from '../../components';
import { useHistory } from "react-router-dom";

import { TransactionForm, Button } from '../../components';
import Context from '../../components/api-provider/context';

import './index.scss';
import Arrow from './arrow.svg';
import { useEffect } from 'react';

function allFieldsIsValid(allValues){
    return Object.keys(allValues).reduce((acc, k)=>{
        if(!allValues[ k ]){
            acc = false
        }
        return acc
    }, true)
}

function ArrowBTN(){
    let history = useHistory()
    return (<img src={Arrow} onClick={history.goBack} alt="voltar" />)
}


function getValue( f, key ){
    return f[key].current.value
}

function NewTransactionPage(){

    let history = useHistory()
    let fields = null
    const { newTransaction} = useContext( Context )
    const [ allFilled, setAllFilled ] = useState(false)

    function getFields(f){
        fields = f
    }

    function getValuesFromInputs(){
        const credit_card_holder_name =  getValue(fields, 'inputNome') 
        const buyer_document = getValue(fields, 'inputCPF')
        const credit_card_number = getValue(fields, 'inputCartao')
        const credit_card_expiration_date = getValue(fields, 'inputData')
        const credit_card_cvv = getValue(fields, 'inputCVV')
        const amount = parseInt(getValue(fields, 'inputValor'))

        return {
            credit_card_holder_name, buyer_document, credit_card_number, credit_card_expiration_date, credit_card_cvv, amount
        }

    }

    function _newTransaction(){

        if(!allFilled){
            return 
        }

        newTransaction( getValuesFromInputs() )
        .then(()=>{
            history.goBack()
        })
    }

    function onFieldChange(){
        const isValid = allFieldsIsValid(
            getValuesFromInputs()
        )
        setAllFilled(isValid)
    }   

    useEffect(()=>{
        //console.log(fields)
    })

    const btnClass = allFilled ? 'active' : ''

    return (
        <div className="new-transaction-page-container">
            <TopNav leftContent={ArrowBTN()} title="Nova transação" />
            <TransactionForm onFieldChange={onFieldChange}  getFields={getFields} />
            <div className="action-container">
                <Button className={btnClass}  onClick={_newTransaction}>Criar transação</Button>
            </div>
        </div>
    );
}

export default NewTransactionPage;