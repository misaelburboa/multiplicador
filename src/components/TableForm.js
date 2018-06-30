import React from 'react';
import { connect } from 'react-redux';
import { startMoveScore } from '../actions/score';

export class TableForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            num1: Math.floor(Math.random() * 10),
            num2 : Math.floor(Math.random() * 10),
            get resultado(){
                return this.num1 * this.num2;
            },
            correcto: undefined,
            respuesta: '',
            mensaje: ''
        }
    }

    handleAnswer = (e) => {
        e.preventDefault();

        this.setState({
            respuesta: e.target.value
        });
    }

    handleMultiply = (e) => {
        e.preventDefault();
        const userResult = e.target.elements.resultado.value;
        if(parseInt(userResult, 10) === this.state.resultado){
            this.setState({
                correcto: true,
                mensaje: `CORRECTO!! El resultado es ${this.state.resultado}`,
                num1: Math.floor(Math.random() * 10),
                num2 : Math.floor(Math.random() * 10),
                get resultado(){
                    return this.num1 * this.num2;
                },
                respuesta: ''
            });
            const playerInfo = {
                score: this.props.state.score + 1,
                player: this.props.state.player
            }
            this.props.startMoveScore(playerInfo);
        }else{
            this.setState({
                correcto: false,
                mensaje: `${userResult} es INCORRECTO. Intenta de Nuevo`,
            });
            const playerInfo = {
                score: this.props.state.score - 1,
                player: this.props.state.player
            }
            this.props.startMoveScore(playerInfo);
        }
    }
    
    render(){
        return (
            <div>
                <form onSubmit={this.handleMultiply}>
                    <label>
                    {`${this.state.num1} X ${this.state.num2} = `}
                    <input type="text" name="resultado" value={this.state.respuesta} onChange={this.handleAnswer} />
                    </label>
                    <input type="submit" value="Verificar"/>
                </form>
                <div className="resultado"> { typeof this.state.correcto === undefined ? '' : <p>{this.state.mensaje}</p>}</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
        state: state
});

const mapDispatchToProps = (dispatch, props) => ({
    startMoveScore: (moveBy) => dispatch(startMoveScore(moveBy))
});

export default connect(mapStateToProps, mapDispatchToProps)(TableForm);