const Total = ({parts}) => {

    console.log("päästiin totaliin ", {parts});

    return (
        <b>total of {parts.map(
            part => part.exercises)
            .reduce(
                (sum, exercises) => sum + exercises, 0)} exercises</b>
    )
}

export default Total