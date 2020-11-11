import { useEffect, useState } from 'react';
import Input from '../input'
import './index.scss';

function TransactionForm({ getFields, onFieldChange }){


    let inputNome = null
    let inputCPF = null
    let inputCartao = null
    let inputData = null
    let inputCVV = null
    let inputValor =  null

    function refNome(r){
        inputNome = r
    }

    function refCPF(r){
        inputCPF = r
    }

    function refCartao(r){
        inputCartao = r
    }

    function refData(r){
        inputData = r
    }

    function refCVV(r){
        inputCVV = r
    }

    function refValor(r){
        inputValor = r
    }

    useEffect(()=>{
        getFields && getFields({
            inputNome,
            inputCPF,
            inputCartao,
            inputData,
            inputCVV,
            inputValor
        })
    })
    

    return (
        <div className="transaction-form-container">
            <Input type="text" isFilled={onFieldChange} getRef={refNome} placeholder="Nome da pessoa compradora" />
            <Input type="text" isFilled={onFieldChange} getRef={refCPF} placeholder="CPF" />
            <Input type="text" isFilled={onFieldChange} getRef={refCartao} placeholder="N do cartão"/>
            <div className="grid">
                <div className="date">
                    <Input isFilled={onFieldChange} getRef={refData} type="text" placeholder="Data de expiração" /> 
                </div>
                <div className="cvv">
                    <Input isFilled={onFieldChange} getRef={refCVV} type="text" placeholder="CVV" />
                </div>
            </div>
            <Input type="text" isFilled={onFieldChange} getRef={refValor} type="number" min={1} placeholder="valor da transação" />
        </div>
    )
}

export default TransactionForm;