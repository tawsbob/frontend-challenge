import './index.scss';

function Loader({ active }){

    const displayClass = active ? 'on' : 'off'

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
