import React from 'react';
import { connect } from 'react-redux';
import { startMoveScore, closeModal } from '../actions/score';
import ResultModal from '../components/ResultModal';

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
                mensaje: `¡¡CORRECTO!!`,
                num1: Math.floor(Math.random() * 10),
                num2 : Math.floor(Math.random() * 10),
                get resultado(){
                    return this.num1 * this.num2;
                },
                respuesta: '',
            });

            const playerInfo = {
                score: this.props.state.score + 1,
                player: this.props.state.player,
                isOpen: true
            }
            this.props.startMoveScore(playerInfo);

            e.target.focus()
        }else{
            this.setState({
                correcto: false,
                mensaje: `${userResult} es INCORRECTO. Intenta de Nuevo`,
            });

            const playerInfo = {
                score: this.props.state.score - 1,
                player: this.props.state.player,
                isOpen: true
            }
            this.props.startMoveScore(playerInfo);

            e.target.focus()
        }
    }
    
    render(){
        return (
            <div className="table-form">
                <form onSubmit={this.handleMultiply} className="multiplyForm">
                    <div className="question">
                    {`${this.state.num1} x ${this.state.num2}`}
                    </div>
                    <input type="text" name="resultado" value={this.state.respuesta} onChange={this.handleAnswer} autoComplete="off"/><br />
                    <input type="submit" value="Verificar"/>
                </form>
                <ResultModal 
                    correcto={this.state.correcto}
                    mensaje={this.state.mensaje}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    state: state
});

const mapDispatchToProps = (dispatch, props) => ({
    startMoveScore: (moveBy) => dispatch(startMoveScore(moveBy)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(TableForm);