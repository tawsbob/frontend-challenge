import { useContext } from 'react'
import Context from '../api-provider/context';
import './index.scss';

function Loader(){

    const { loading } = useContext( Context )
    const displayClass = loading ? 'on' : 'off'

    return (
        <div className={`loader-container ${displayClass}`}>
            <div className="lds-ripple">
                <div></div>
                <div></div>    
            </div>
        </div>
    )
}

export default Loader;
