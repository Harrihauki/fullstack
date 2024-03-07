import Header from './Header'
import Part from './Part'
import Total from './Total'

const Course = ({course, parts}) => {

    console.log("course toimii");

    return (
        <div>
            <Header header={course} />
            <ul>
                {parts.map(part =>
                    <Part key={part.name} name={part.name} exercises={part.exercises} />
                )}
            </ul>
            <Total parts={parts} />
        </div>
    )
}

export default Course