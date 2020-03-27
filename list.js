function PeopleInfo(props) {

    var p_list = props.peoples.map(function (people) {
        return React.createElement(
            'p',
            { key: people.id },
            people.name
        );
    });
    console.log(p_list);

    return p_list;
}

var peoples = [{
    id: 1,
    name: 'zjl'
}, {
    id: 2,
    name: 'yyq'
}];

var domContainer = document.querySelector("#like_button_container");
ReactDOM.render(React.createElement(PeopleInfo, { peoples: peoples }), domContainer);