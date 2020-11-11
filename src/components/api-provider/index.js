import Context from './context';
import { httpClient } from '../../helpers';

const RestClient = httpClient()


function ApiProvider({ children }){

    return (
        <Context.Provider value={{ RestClient }}>
            { children }
        </Context.Provider>
    )
}

export default ApiProvider;