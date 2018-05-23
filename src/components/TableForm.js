import React from 'react';

export default class Tablas extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            num1: Math.floor(Math.random() * 10),
            num2 : Math.floor(Math.random() * 10),
            get resultado(){
                return this.num1 * this.num2;
            },
            correcto: undefined,
            mensaje: ''
        }
    }

    handleMultiply = (e) => {
        e.preventDefault();
        
        const userResult = e.target.elements.resultado.value;
        if(parseInt(userResult, 10) === this.state.resultado){
            this.setState({
                correcto: true,
                mensaje: `CORRECTO!! El resultado es ${this.state.resultado}`
            });
        }else{
            this.setState({
                correcto: false,
                mensaje: `${userResult} es INCORRECTO. Intenta de Nuevo`
            });
        }
    }
    
    render(){
        return (
            <div>
                <form onSubmit={this.handleMultiply}>
                    <label>
                    {`${this.state.num1} X ${this.state.num2} = `}
                    <input type="text" name="resultado" />
                    </label>
                    <input type="submit" value="Verificar"/>
                </form>
                <div className="resultado"> { typeof this.state.correcto === undefined ? '' : <p>{this.state.mensaje}</p>}</div>
            </div>
        )
    }
}