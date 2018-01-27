import React from 'react';
import createReactClass from 'create-react-class';


let ModalWindowCategoryAdd = React.createClass({
    getInitialState: function () {
        return ({inputText: ''});
    },
    componentDidUpdate() {
        this.nameInput.focus();
    },
    inputChangeHandler: function (event) {
        this.setState({inputText: event.target.value});
    },
    addCategoryHandler: function () {
        this.props.addNestedCategory(this.state.inputText, this.props.selectedCategoryId);

        this.clearTextInput();
        this.closeCurrentModal();
    },
    _handleKeyPress: function (e) {
        if (e.key === 'Enter') {
            this.addCategoryHandler();
        }
    },
    clearTextInput: function () {
        this.setState({inputText: ''});
    },
    closeCurrentModal: function () {
        this.clearTextInput();
        this.props.closeModal('addCategory');
    },
    render: function () {
        let modalWindowWrapperClassName = (this.props.modalWindowOpened && this.props.modalWindowAddOpened) ? 'modal-window-wrapper' : 'modal-window-wrapper disabled';
        let addButtonCondition = this.state.inputText === '';

        return (
            <div className={modalWindowWrapperClassName}>
                <div className="modal-window">
                    <div className="modal-buttons-container">
                        <input className="category-add-input"
                               type="text" placeholder="Enter new subcategory title..."
                               value={this.state.inputText}
                               onChange={this.inputChangeHandler} onKeyPress={this._handleKeyPress}
                               ref={(input) => {
                                   this.nameInput = input;
                               }}
                        />
                        <input className="add-button" type="button" value="Add" onClick={this.addCategoryHandler}
                               disabled={addButtonCondition}/>
                        <input className="close-button" type="button" value="Close" onClick={this.closeCurrentModal}/>
                    </div>
                </div>
            </div>
        )
    }
});

export default ModalWindowCategoryAdd;