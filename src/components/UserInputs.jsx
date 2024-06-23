
export default function UserInputs({onChangeInputs,intialInvestmentParameter}){

     return(
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Monthly investment</label>
                    <input value={intialInvestmentParameter.initialInvestment} onChange={(e)=>onChangeInputs('initialInvestment',e.target.value)} type="number" required/>
                </p>
                <p>
                    <label>Annual investment</label>
                    <input value={intialInvestmentParameter.annualInvestment} onChange={(e)=>onChangeInputs('annualInvestment',e.target.value)} type="number" required/>
                </p>
              
            </div>
            <div className="input-group">
                <p>
                    <label>Expected return</label>
                    <input value={intialInvestmentParameter.expectedReturn} onChange={(e)=>onChangeInputs('expectedReturn',e.target.value)} type="number" required/>
                </p>
                <p>
                    <label>Duration</label>
                    <input value={intialInvestmentParameter.duration} onChange={(e)=>onChangeInputs('duration',e.target.value)} type="number" required/>
                </p>
              
            </div>
        </section>
     )
}