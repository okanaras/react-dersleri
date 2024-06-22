import React, { useEffect, useState } from 'react'
import '../css/currency.css'
import { FaArrowRight } from "react-icons/fa6";
import axios from 'axios'

function Currency() {
    const BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
    const API_KEY = "fca_live_bUarLcvZ9T0LueZ2a6SOFxZw0dk7nXqXZW0uz24L";

    const [amount, setAmount] = useState('');
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [result, setResult] = useState('');
    const [isInputsDisabled, setIsInputsDisabled] = useState(true);


    useEffect(() => {
        setIsInputsDisabled(amount === '' || amount === undefined || amount == 0 || amount < 0);
        if (amount == '' || amount == undefined || amount == 0 || amount < 0) {

            setResult('');
        }
    }, [amount]);

    const exchange = async () => {
        if (!amount == '' || !amount == undefined || !amount == 0 || !amount < 0) {
            const response = await axios.get(`${BASE_URL}/?apikey=${API_KEY}&base_currency=${fromCurrency}&currencies=${toCurrency}`);
            const result = ((response.data.data[toCurrency]) * Number(amount)).toFixed(2);
            setResult(result);
        } else {
            alert("Cevirmek istediginiz miktar 0'dan buyuk bir deger olmalidir!");
        }
    };

    return (
        <div className='currency-div'>
            <div className='title-div'>
                <h3>DOVIZ KURU UYGULAMASI</h3>
            </div>

            <div className='currency-inputs'>
                <input type='number' className='amount' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Miktar giriniz.' min="1"
                    step="1" />

                <select onChange={(e) => setFromCurrency(e.target.value)} className='from-currency-option' disabled={isInputsDisabled}>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>

                <FaArrowRight className='arrow-icon' />

                <select onChange={(e) => setToCurrency(e.target.value)} className='to-currency-option' disabled={isInputsDisabled}>
                    <option>TRY</option>
                    <option>EUR</option>
                    <option>USD</option>
                </select>

                <input type='number' className='result' value={result} onChange={(e) => setResult(e.target.value)} readOnly placeholder='Miktar giriniz.' disabled={isInputsDisabled} />
            </div>

            <div>
                <button onClick={exchange} className='exchange-button' id='exchangeButton' disabled={isInputsDisabled}>EXCHANGE</button>
            </div>
        </div>
    )
}

export default Currency