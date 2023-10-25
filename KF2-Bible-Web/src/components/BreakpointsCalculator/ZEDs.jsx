import { useState } from "react"
import FP_placeholder from "../../assets/img/ZED/placeholder/FP_placeholder.png"
import SC_placeholder from "../../assets/img/ZED/placeholder/SC_placeholder.png"

const ZEDs = () => {
    const [ZED, setZED] = useState("Fleshpound")
    const ZEDimgs = {
        "Fleshpound" : FP_placeholder,
        "Scrake" : SC_placeholder
    }

    return (
        <div>
            <select onChange={(e) => setZED(e.target.value)}>
                <option value="Fleshpound">Fleshpound</option>
                <option value="Scrake">Scrake</option>
            </select>
            <img src={ZEDimgs[ZED]} style={{width: "100px", display: "block"}}></img>
        </div>
    )
}

export default ZEDs