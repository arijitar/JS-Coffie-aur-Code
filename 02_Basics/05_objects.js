//De-Structureing

const course = {
    coursename: "Java Script",
    price: "999",
    courseInstructor: "Hritesh",
}

// course.courseInstructor

const {courseInstructor:instructor} = course /*Object destructuring*/

console.log(instructor);

/* In react instead of writing {props.company} we can easily destructure the 
object as {company} like shown below*/ 

// const navbar = ({company}) => {

// }

// navbar(comapany = "arijit")

/* How JSON looks like*/
// {
//     "name": "arijit",
//     "coursename": "js in hindi",
//     "price": "free"
// }

/* JSON exactly looks like objects beacause JSON is JS object notation but here keys are also define as string */

