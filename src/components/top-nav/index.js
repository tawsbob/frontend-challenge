import './index.scss';

function TopNav({ title, leftContent, rightContent }){
    return (
        <div className="top-nav-container">
            <div className="left-content">
                { leftContent }
            </div>
            <div className="middle-content">
                <h1>{ title }</h1>
            </div>    
            <div className="right-content">
                { rightContent }
            </div>    
        </div>
    )
}

export default TopNav;