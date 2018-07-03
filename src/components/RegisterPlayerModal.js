import React from 'react';
import Modal from 'react-modal';

class RegisterPlayerModal extends React.Component {

    handleCloseModal = () => {
        this.setState({
            isOpen: false
        })
    }

    render(){
        return (
            <div className="resultModal">
                <Modal
                    isOpen={!!this.props.isOpen}
                    ariaHideApp={false}
                    closeTimeoutMS={200}
                    onRequestClose={this.props.handleCloseRegisterPlayerModal}
                    >
                    <div> El nombre se ha guardado correctamente</div>
                    <button className="modal-close" onClick={this.props.handleCloseRegisterPlayerModal}>Cerrar</button>
                </Modal>
            </div>
        );
    };
}

export default RegisterPlayerModal;