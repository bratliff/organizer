var Team = React.createClass({
    getInitialState: function() {
        return {editing: false, teamname: 'Team Name'}
    },
    componentWillMount: function() {
        this.style = {
            right: this.randomBetween(0, window.innerWidth - 300) + 'px',
            top: this.randomBetween(0, window.innerHeight - 300) + 'px'
        };
    },
    componentDidMount: function(){
        var _that = this;
        var leftPos = 0;
        var color = this.generatecolor();
        $(this.getDOMNode()).css({'border':'3px solid' + color});


        $(this.getDOMNode()).draggable().droppable({
            drop:function(event, ui){
                var dropped = ui.draggable[0];
                var bordercolor = $(event.target).css('border-left-color');
                $(dropped).css({'border':'2px solid','border-color':bordercolor});
                $thisNode = $(event.target);
                $('.teamname').html($thisNode[0].textContent)
                ui.draggable.data('dropped', true);
            },
            out: function(event, ui){
                console.log('out triggered');
                //$('.board').append(ui.draggable[0]);
                //$(ui.draggable[0]).css({'right':'20px','top':'30px;'});
            },
            tolerance: 'touch',
            hoverClass : 'hovering'
        });
    },
    randomBetween: function(min, max) {
        return (min + Math.ceil(Math.random() * max));
    },
    generatecolor: function() {
        return ('#'+Math.floor(Math.random()*16777215).toString(16));
    },
    edit: function() {
        this.setState({editing: true});
    },
    save: function() {
        //this.props.onChange(this.refs.lastname.getDOMNode().value, this.props.index);
        this.setState({editing: false, teamname: this.refs.teamname.getDOMNode().value});
    },
    remove: function() {
        this.props.onRemove(this.props.index);
    },
    renderDisplay: function() {
        return (
            <div className="team"
                style={this.style}>
                <p>{this.state.teamname}</p>
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
            <div className="team" style={this.style}>
            <input type="text" ref="teamname" defaultValue={this.state.teamname} 
            className="form-control" />
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













