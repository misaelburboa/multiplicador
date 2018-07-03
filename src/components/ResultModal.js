import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { closeModal } from '../actions/score';

//const ResultModal = (props) => {
class ResultModal extends React.Component {

    handleCloseModal = () => {
        this.props.closeModal();
    }

    render(){
        return (
            <div className="resultModal">
                <Modal
                    isOpen={!!this.props.state.isOpen}
                    ariaHideApp={false}
                    closeTimeoutMS={200}
                    onRequestClose={this.handleCloseModal}
                    >
                    <div className={"resultado " + (!!this.props.correcto ? "correcto" : "incorrecto")}> { typeof this.props.correcto === undefined ? '' : <p>{this.props.mensaje}</p>}</div>
                    <button className="modal-close" onClick={this.handleCloseModal}>Cerrar</button>
                </Modal>
            </div>
        );
    };
};

const mapStateToProps = (state) => ({
    state: state
});

const mapDispatchToProps = (dispatch, props) => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultModal);