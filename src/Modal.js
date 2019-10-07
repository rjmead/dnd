import React from 'react'

function Modal(props) {
    const showHideClassName = props.show ? "modal display-block" : "modal display-none";
    let tableRows = []

    if(props.data){
        // create array of table rows agnostic of spells/equipment
        for(let propName in props.data){
            if(!props.data.hasOwnProperty(propName)) continue
            let key = propName
            //escape keys we dont need
            if("_id index school subclasses url".indexOf(key) !== -1) continue
            let val = props.data[key]
            // massaging data
            switch(key){
                case "desc":
                    val = val.join(" ")
                    let find = "â€™";
                    let re = new RegExp(find, "g");

                    val = val.replace(re, "'");
                    break
                case "higher_level":
                    val = val.join(" ")
                    break
                case "components":
                    val = val.join("/")
                    break
                default:
                    if(typeof val !== "string") val = <pre>{JSON.stringify(val, undefined, 2)}</pre>
                    break
            }
            tableRows.push(<tr key={key}><td>{key}</td><td>{val}</td></tr>)
        }
    }

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <table>
                    <tbody>
                        {tableRows}
                    </tbody>
                </table>
                <button onClick={props.handleClose}>close</button>
            </section>
        </div>
    )
}

export default Modal