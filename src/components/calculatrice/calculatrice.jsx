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
        const regexNumber = /^[0-9]+([.,][0-9]*)?$/;
        const value = e.target.value;

        console.log(value);

        if (value === '' || regexNumber.test(value)) {
            setStateValue(value.replace(',', '.'));
        }
    };

    const handleCalculEuh = (e) => {
        e.preventDefault();

        const val1 = parseFloat(nb1);
        const val2 = parseFloat(nb2);

        if(isNaN(val1) || isNaN(val2)) {
            setResult('Fool of a Took!');
            return;
        }

        switch (operation) {
            case operationEnum.add:
                setResult(val1 + val2);
                break;
            case operationEnum.sub:
                setResult(val1 - val2);
                break;
            case operationEnum.div:
                if(val2 === 0) {
                    setResult('Division par Zero :o');
                }
                else {
                    setResult(val1 / val2);
                }
                break;
            case operationEnum.mult:
                setResult(val1 * val2);
                break;
            default:
                setResult('Selectionnez une opération');
                break;
        }
    };

    return (<>
        <h2>Calculatrice</h2>
        <form onSubmit={handleCalculEuh}>
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
                    value={nb2} />
            </div>
            <div>
                <input type='submit' value='Calculer' />
                <input type='text' value={result} readOnly />
            </div>
        </form>
    </>);
};

export default Calculatrice;