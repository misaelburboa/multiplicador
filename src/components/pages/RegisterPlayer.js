import React from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import { addPlayerName } from '../../actions/score';
import RegisterPlayerModal from '../../components/RegisterPlayerModal';

class RegisterPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    handleSavePlayerName = (e) => {
        e.preventDefault();
        const playerName = e.target.elements.playerName.value;
        this.props.addPlayerName(playerName);

        this.setState({
            isOpen: true
        });
    }

    handleCloseRegisterPlayerModal = () => {
        this.setState({
            isOpen: false
        });

        this.props.history.push('/');
    }

    render() {
        return (
            <div className="NotFoundPage">
                <Header/>
                <div>
                    <form onSubmit={this.handleSavePlayerName}>
                        Ingresa el Nombre del Jugador: <br />
                        <input type="text" name="playerName" />
                        <input type="submit" value="Guardar Nombre" />
                    </form>
                    <RegisterPlayerModal
                        isOpen={this.state.isOpen}
                        handleCloseRegisterPlayerModal={this.handleCloseRegisterPlayerModal}
                    />
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => ({
    state: state
});

const mapDispatchToProps = (dispatch, props) => ({
    addPlayerName: (playerName) => dispatch(addPlayerName(playerName))
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPlayer);