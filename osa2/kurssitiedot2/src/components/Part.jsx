const Part = ({name, exercises}) => {

    console.log('part toimii ', {name}, {exercises});

    return (
        <li>{name} {exercises}</li>
    )
}

export default Part