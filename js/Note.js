var Note = React.createClass({
    getInitialState: function() {
        return {editing: false, firstname: 'first', lastname: 'last'}
    },
    componentWillMount: function() {
        this.style = {
            right: this.randomBetween(0, window.innerWidth - 150) + 'px',
            top: this.randomBetween(0, window.innerHeight - 150) + 'px'
        };
    },
    componentDidMount: function(){
        $(this.getDOMNode()).draggable();
    },
    randomBetween: function(min, max) {
        return (min + Math.ceil(Math.random() * max));
    },
    edit: function() {
        this.setState({editing: true});
    },
    save: function() {
        //this.props.onChange(this.refs.lastname.getDOMNode().value, this.props.index);
        this.setState({editing: false, firstname: this.refs.firstname.getDOMNode().value,
        lastname: this.refs.lastname.getDOMNode().value });
    },
    remove: function() {
        this.props.onRemove(this.props.index);
    },
    renderDisplay: function() {
        return (
            <div className="note"
                style={this.style}>
                <p>{this.state.firstname}</p>
                <p>{this.state.lastname}</p>
                <span>
                    <button onClick={this.edit}
                            className="btn btn-primary glyphicon glyphicon-pencil"/>
                    <button onClick={this.remove}
                            className="btn btn-danger glyphicon glyphicon-trash"/>
                </span>
            </div>
            );
    },
    renderForm: function() {
        return (
            <div className="note" style={this.style}>
            <input type="text" ref="firstname" defaultValue={this.state.firstname} 
            className="form-control" />
            <input type="text" ref="lastname" defaultValue={this.state.lastname}  className="form-control" />
            <button onClick={this.save} className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk" />
            </div>
            )
    },
    render: function() {
        if (this.state.editing) {
            return this.renderForm();
        }
        else {
            return this.renderDisplay();
        }
    }
});













