var Board = React.createClass({
    propTypes: {
        count: function(props, propName) {
            if (typeof props[propName] !== "number"){
                return new Error('The count property must be a number');
            }
            if (props[propName] > 10) {
                return new Error("Creating " + props[propName] + " notes is ridiculous");
            }
        }
    },
    getInitialState: function() {
        return {
            notes: [ ],
            teams: [ ]
        };
    },
    nextId: function() {
        this.uniqueId = this.uniqueId || 0;
        return this.uniqueId++;
    },
    componentWillMount: function() {
        var self = this;
    },
    addNote: function(text) {
        var arr = this.state.notes;
        arr.push({
            id: this.nextId(),
            note: text
        });
        this.setState({notes: arr});
    },
    addTeam: function(text) {
        var teamArr = this.state.teams;
        teamArr.push({
            id: this.nextId(),
            team: text
        });
        this.setState({teams: teamArr});
    },
    updateNote: function(firstname, i) {
        var arr = this.state.notes;
        arr[i].note = firstname;
        this.setState({notes:arr});
    },
    removeNote: function(i) {
        var arr = this.state.notes;
        arr.splice(i, 1);
        this.setState({notes: arr});
    },
    updateTeam: function(firstname, i) {
        var arr = this.state.teams;
        arr[i].team = teamname;
        this.setState({teams:arr});
    },
    removeTeam: function(i) {
        var arr = this.state.teams;
        arr.splice(i, 1);
        this.setState({teams: arr});
    },
    eachNote: function(note, i) {
        return (
                <Note key={note.id}
                    index={i}
                    onChange={this.updateNote}
                    onRemove={this.removeNote}
                >{note.note}</Note>
            );
    },
     eachTeam: function(team, i) {
        return (
                <Team key={team.id}
                    index={i}
                    onChange={this.updateTeam}
                    onRemove={this.removeTeam}
                >{team.team}</Team>
            );
    },
    render: function() {
        return (<div className="board">
                    {this.state.notes.map(this.eachNote)}
                    <h3>Add a team member</h3>
                    <button className="btn btn-sm btn-success glyphicon glyphicon-plus"
                            onClick={this.addNote.bind(null, "New Note")}/><br/>
                    <h3>Add a team</h3><br/>
                    {this.state.teams.map(this.eachTeam)}
                    <button className="btn btn-sm btn-success glyphicon glyphicon-plus"
                            onClick={this.addTeam.bind(null, "New Team")}/>
                    <div className="noteam"><h3>Unassigned</h3></div>
            </div>

        );
    }
});

