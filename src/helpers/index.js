import axios from 'axios';

export const formatMoney = (value)=>(
    new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
)

export const httpClient = ()=>(
    axios.create({
        baseURL: 'http://localhost:3000/',
        timeout: 1000,
      })
)