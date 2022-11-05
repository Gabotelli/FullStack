const Courses = ({ courses }) => {
    const Course = ({ course }) => {
      const Header = ({ name }) => <h2>{name}</h2>
      const Total = ({ total }) => <p><strong>Total of {total} exercises</strong></p>
      const Part = ({ part }) => 
        <p>
          {part.name} {part.exercises}
        </p>
      const Content = ({ parts }) => parts.map(part => <Part key={part.id} part={part} />)
      const total = course.parts.reduce((total, part) => total + part.exercises, 0)
      return(
        <>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total total={total} />
        </>
      )
    }
    return courses.map(course => <Course key={course.id} course={course} />)
}

export default Courses