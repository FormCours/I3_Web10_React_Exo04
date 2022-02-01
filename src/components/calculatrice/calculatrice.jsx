import { useState } from 'react';

// Création d'un pseudo-enum -> Pour eviter les erreurs de frappe
const operationEnum = {
    add: '+',
    sub: '-',
    mult: '*',
    div: '/'
};

const Calculatrice = () => {

    const [nb1, setNb1] = useState('');
    const [nb2, setNb2] = useState('');
    const [operation, setOperation] = useState('choice');
    const [result, setResult] = useState('');

    const handleNumberInput = (e, setStateValue) => {
        const regexNumber = /^[0-9]+([.,][0-9]*)?$/
        const value = e.target.value;

        console.log(value);

        if(value === '' || regexNumber.test(value)) {
            setStateValue(value.replace(',', '.'));
        }
    }

    return (<>
        <h2>Calculatrice</h2>
        <form>
            <div>
                <label htmlFor='nb1'>Nb 1 : </label>
                <input type='text' 
                    onChange={(e) => handleNumberInput(e, setNb1)}
                    value={nb1} />
            </div>
            <div>
                <label htmlFor='op'>Operation : </label>
                <select id='op' 
                    onChange={(e) => setOperation(e.target.value)} 
                    value={operation}>
                    <option value='choice'>-- Selection une option --</option>
                    <option value={operationEnum.add}>+</option>
                    <option value={operationEnum.sub}>-</option>
                    <option value={operationEnum.mult}>X</option>
                    <option value={operationEnum.div}>/</option>
                </select>
            </div>
            <div>
                <label htmlFor='nb2'>Nb 2 : </label>
                <input type='text'
                    onChange={(e) => handleNumberInput(e, setNb2)}
                    value={nb2}/>
            </div>
            <div>
                <input type='submit' value='Calculer'/>
                <input type='text' value={result} readOnly/>
            </div>
        </form>
    </>)
}

export default Calculatrice;