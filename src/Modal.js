import React from 'react'

function Modal(props) {
    const showHideClassName = props.show ? "modal display-block" : "modal display-none";
    let name, desc, highLvl, page, range, ritual, duration, concentration, castTime, level
    if(props.data){
        name = props.data.name
        desc = props.data.desc.join("\n\n")
        highLvl = props.data.higher_level
        page = props.data.page
        range = props.data.range
        ritual = props.data.ritual
        duration = props.data.duration
        concentration = props.data.concentration
        castTime = props.data.casting_time
        level = props.data.level
    }
    console.log(desc)
    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <table>
                    <tbody>
                        <tr><td>Name</td><td><b>{name}</b></td></tr>
                        <tr><td>Description</td><td>{desc}</td></tr>
                        <tr><td>Higher Level</td><td>{highLvl}</td></tr>
                        <tr><td>Page</td><td>{page}</td></tr>
                        <tr><td>Range</td><td>{range}</td></tr>
                        <tr><td>Ritual</td><td>{ritual}</td></tr>
                        <tr><td>Duration</td><td>{duration}</td></tr>
                        <tr><td>Concentration</td><td>{concentration}</td></tr>
                        <tr><td>Casting Time</td><td>{castTime}</td></tr>
                        <tr><td>Level</td><td>{level}</td></tr>
                    </tbody>
                </table>
                <button onClick={props.handleClose}>close</button>
            </section>
        </div>
    )
}

export default Modal