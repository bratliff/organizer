var Note = React.createClass({
    displayName: 'Note',

    getInitialState: function () {
        return { editing: false, firstname: 'First', lastname: 'Last' };
    },
    componentWillMount: function () {
        this.style = {
            right: '30px',
            top: this.randomBetween(0, window.innerHeight - 150) + 'px'
        };
    },
    componentDidMount: function () {
        var _that = this;
        $(this.getDOMNode()).draggable({
            revert: false,
            start: function (event, ui) {
                ui.helper.data('dropped', false);
            },
            stop: function (event, ui) {
                if (ui.helper.data('dropped') == false) {
                    //$('.board').append(this);
                }
            }
        });
    },
    randomBetween: function (min, max) {
        return min + Math.ceil(Math.random() * max);
    },
    edit: function () {
        this.setState({ editing: true });
    },
    save: function () {
        this.setState({ editing: false, firstname: this.refs.firstname.getDOMNode().value,
            lastname: this.refs.lastname.getDOMNode().value });
    },
    remove: function () {
        this.props.onRemove(this.props.index);
    },
    renderDisplay: function () {
        return React.createElement(
            'div',
            { className: 'note',
                style: this.style, index: this.index },
            React.createElement(
                'p',
                null,
                this.state.firstname,
                ' ',
                this.state.lastname
            ),
            React.createElement('p', { className: 'teamname' }),
            React.createElement(
                'span',
                null,
                React.createElement('button', { onClick: this.edit,
                    className: 'btn btn-primary glyphicon glyphicon-pencil' }),
                React.createElement('button', { onClick: this.remove,
                    className: 'btn btn-danger glyphicon glyphicon-trash' })
            )
        );
    },
    renderForm: function () {
        return React.createElement(
            'div',
            { className: 'note', style: this.style },
            React.createElement('input', { type: 'text', ref: 'firstname', defaultValue: this.state.firstname,
                className: 'form-control' }),
            React.createElement('input', { type: 'text', ref: 'lastname', defaultValue: this.state.lastname, className: 'form-control' }),
            React.createElement('button', { onClick: this.save, className: 'btn btn-success btn-sm glyphicon glyphicon-floppy-disk' })
        );
    },
    render: function () {
        if (this.state.editing) {
            return this.renderForm();
        } else {
            return this.renderDisplay();
        }
    }
});