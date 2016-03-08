var Board = React.createClass({
    displayName: "Board",

    propTypes: {
        count: function (props, propName) {
            if (typeof props[propName] !== "number") {
                return new Error('The count property must be a number');
            }
            if (props[propName] > 10) {
                return new Error("Creating " + props[propName] + " notes is ridiculous");
            }
        }
    },
    getInitialState: function () {
        return {
            notes: [],
            teams: []
        };
    },
    nextId: function () {
        this.uniqueId = this.uniqueId || 0;
        return this.uniqueId++;
    },
    componentWillMount: function () {
        var self = this;
    },
    addNote: function (text) {
        var arr = this.state.notes;
        arr.push({
            id: this.nextId(),
            note: text
        });
        this.setState({ notes: arr });
    },
    addTeam: function (text) {
        var teamArr = this.state.teams;
        teamArr.push({
            id: this.nextId(),
            team: text
        });
        this.setState({ teams: teamArr });
    },
    updateNote: function (firstname, i) {
        var arr = this.state.notes;
        arr[i].note = firstname;
        this.setState({ notes: arr });
    },
    removeNote: function (i) {
        var arr = this.state.notes;
        arr.splice(i, 1);
        this.setState({ notes: arr });
    },
    updateTeam: function (firstname, i) {
        var arr = this.state.teams;
        arr[i].team = teamname;
        this.setState({ teams: arr });
    },
    removeTeam: function (i) {
        var arr = this.state.teams;
        arr.splice(i, 1);
        this.setState({ teams: arr });
    },
    eachNote: function (note, i) {
        return React.createElement(
            Note,
            { key: note.id,
                index: i,
                onChange: this.updateNote,
                onRemove: this.removeNote
            },
            note.note
        );
    },
    eachTeam: function (team, i) {
        return React.createElement(
            Team,
            { key: team.id,
                index: i,
                onChange: this.updateTeam,
                onRemove: this.removeTeam
            },
            team.team
        );
    },
    render: function () {
        return React.createElement(
            "div",
            { className: "board" },
            this.state.notes.map(this.eachNote),
            React.createElement(
                "h3",
                null,
                "Add a team member"
            ),
            React.createElement("button", { className: "btn btn-sm btn-success glyphicon glyphicon-plus",
                onClick: this.addNote.bind(null, "New Note") }),
            React.createElement("br", null),
            React.createElement(
                "h3",
                null,
                "Add a team"
            ),
            React.createElement("br", null),
            this.state.teams.map(this.eachTeam),
            React.createElement("button", { className: "btn btn-sm btn-success glyphicon glyphicon-plus",
                onClick: this.addTeam.bind(null, "New Team") }),
            React.createElement(
                "div",
                { className: "noteam" },
                React.createElement(
                    "h3",
                    null,
                    "Unassigned"
                )
            )
        );
    }
});