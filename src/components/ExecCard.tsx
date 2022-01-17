
import './Exec.css'


function projectCard(props: { position: string[], name: string, pronouns: string, description: string }) {
    return (
        <li>
            <div className="ch-item">
                <div className="ch-info">
                    <div className={"ch-info-front exec-" + props.position[0]}></div>
                    <div className="ch-info-back">
                        <h2>{props.name}</h2>
                        {props.position.map((e) => {
                            return (
                                <h3>{e}</h3>
                            );
                        })}
                        <h3>{props.pronouns}</h3>
                        {props.description}
                    </div>
                </div>
            </div>
        </li>

    )
}
export default projectCard;