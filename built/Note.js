var Note = React.createClass({
    displayName: 'Note',

    getInitialState: function () {
        return { editing: false, firstname: 'first', lastname: 'last' };
    },
    componentWillMount: function () {
        this.style = {
            right: this.randomBetween(0, window.innerWidth - 150) + 'px',
            top: this.randomBetween(0, window.innerHeight - 150) + 'px'
        };
    },
    componentDidMount: function () {
        $(this.getDOMNode()).draggable();
    },
    randomBetween: function (min, max) {
        return min + Math.ceil(Math.random() * max);
    },
    edit: function () {
        this.setState({ editing: true });
    },
    save: function () {
        //this.props.onChange(this.refs.lastname.getDOMNode().value, this.props.index);
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
                style: this.style },
            React.createElement(
                'p',
                null,
                this.state.firstname
            ),
            React.createElement(
                'p',
                null,
                this.state.lastname
            ),
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