
import './ExecCard.css'
import {

    Element, Link,

} from "react-scroll";

function projectCard(props: { position: string[], names: string[], pronouns: string[], description: string, id: string[] }) {
    var namesTitle = ""
    props.names.forEach(function (name: string) {
        namesTitle += name + " & "
        // perform logic here by the use of value of array
    });
    namesTitle = namesTitle.slice(0, -3);

    var positionTitle = ""
    props.position.forEach(function (pos: string) {
        positionTitle += pos + " and "
        // perform logic here by the use of value of array
    });
    positionTitle = positionTitle.slice(0, -5);

    var pronounsTitle = ""
    props.pronouns.forEach(function (name: string) {
        pronounsTitle += name + " & "
        // perform logic here by the use of value of array
    });
    pronounsTitle = pronounsTitle.slice(0, -3);

    const photos: Array<JSX.Element> = []

    props.id.forEach(function (i: string) {
        let source = process.env.PUBLIC_URL + 'images/' + i + '.png'
        console.log(source)
        photos.push(
            <>
                < img src={source} className={'exec-card-photo'}></img >
            </>
        )
    });

    return (

        <div className='exec-card'>
            <h2>{namesTitle}</h2>
            <h3>{"(" + pronounsTitle + ")"}</h3>
            {photos}
            <h3><span className='position-title'>{positionTitle}</span></h3>
            <p>{props.description}</p>
        </div>


    )
}
export default projectCard;