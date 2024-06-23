import headerLogo from '../assets/investment-calculator-logo.png'
export default function Header(){
    return(
        <div id='header'>
            <img src={headerLogo} alt='Page Header'></img>
            <h1 id="">Investment Calculator</h1>
        </div>
    )
}