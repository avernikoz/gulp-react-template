import React from 'react';
import createReactClass from 'create-react-class';


let ModalWindowCategoryEdit = React.createClass({
    getInitialState: function () {
        return ({categoryEditedText: this.props.selectedCategoryText});
    },
    componentDidUpdate() {
        this.nameInput.focus();
    },
    // componentWillReceiveProps: function (nextProps) {
    //     this.setState({
    //         categoryEditedText: nextProps.selectedCategoryText
    //     })
    // },
    onChangeCategoryEditedText: function (event) {
        this.setState({categoryEditedText: event.target.value})
    },
    closeCurrentModal: function () {
        this.clearSearchInput();
        this.props.closeModal('editCategory');
    },
    saveCategoryChangesHandler: function () {
        let newCategoryText = this.state.categoryEditedText;
        this.props.editCategory(this.props.selectedCategoryId, newCategoryText);

        this.clearSearchInput();
        this.closeCurrentModal();
    },
    _handleKeyPress: function (e) {
        if (e.key === 'Enter') {
            this.saveCategoryChangesHandler()
        }
    },
    clearSearchInput: function () {
        this.setState({categoryEditedText: ''});
    },
    render: function () {
        let modalWindowWrapperClassName = (this.props.modalWindowOpened && this.props.modalWindowEditOpened) ? 'modal-window-wrapper' : 'modal-window-wrapper disabled';
        let saveButtonCondition = this.state.categoryEditedText === '';

        return (
            <div className={modalWindowWrapperClassName}>
                <div className="modal-window">
                    <div className="modal-buttons-container">
                        <input className="category-add-input" type="text" placeholder={this.props.selectedCategoryText}
                               value={this.state.categoryEditedText}
                               onChange={this.onChangeCategoryEditedText} onKeyPress={this._handleKeyPress}
                               ref={(input) => {
                                   this.nameInput = input;
                               }}

                        />
                        <input className="add-button" type="button" value="Save"
                               onClick={this.saveCategoryChangesHandler} disabled={saveButtonCondition}/>
                        <input className="close-button" type="button" value="Close" onClick={this.closeCurrentModal}/>

                    </div>
                </div>
            </div>
        )
    }
});

export default ModalWindowCategoryEdit;