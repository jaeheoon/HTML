function Nav(props) {
    const lis = [];
    const topics = props.topics;
    topics.forEach(topic => {
        lis.push(<li key={topic.id}><a id={topic.id} href={'/read/'+topic.id} onClick={event=>{
            event.preventDefault();
            props.onChangeMode(Number(event.target.id));
        }}>{topic.title}</a></li>);
    });
    return (
        <nav>
            <ol>
                {lis}
            </ol>
        </nav>
    );
}

export default Nav;