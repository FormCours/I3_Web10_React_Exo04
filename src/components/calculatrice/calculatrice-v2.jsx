const Calculatrice = () => {

    return (<>
        <h2>Calculatrice</h2>
        <form>
            <div>
                <label htmlFor='nb1'>Nb 1 : </label>
                <input type='text'/>
            </div>
            <div>
                <label htmlFor='op'>Operation : </label>
                <select  id='op'>
                    <option value=''>+</option>
                    <option value=''>-</option>
                    <option value=''>X</option>
                    <option value=''>/</option>
                </select>
            </div>
            <div>
                <label htmlFor='nb2'>Nb 2 : </label>
                <input type='text'/>
            </div>
            <div>
                <input type='submit' value='Calculer'/>
                <input type='text'/>
            </div>
        </form>
    </>)
}

export default Calculatrice;