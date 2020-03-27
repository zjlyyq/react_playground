function PeopleInfo(props) {

    const p_list = props.peoples.map(people => {
        return <p key={people.id}>{people.name}</p>
    })
    console.log(p_list);
    
    return p_list;
}

const peoples = [
    {
        id: 1,
        name: 'zjl'
    },
    {
        id: 2,
        name: 'yyq'
    }
]

const domContainer = document.querySelector("#like_button_container");
ReactDOM.render(<PeopleInfo peoples={peoples} />, domContainer)