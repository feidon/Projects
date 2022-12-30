const Notes = (
    {items}
) => {
    return( items.map(function (e) {
            if (e.note === "") return <span></span>;
            return <span>{`${e.name}->${e.note}||`}</span>;
        }));
}

export default Notes;