import { useState } from "react"
import fal_placeholder from "../../assets/img/weapon/placeholder/FNFALACOG_placeholder.png"
import spx_placeholder from "../../assets/img/weapon/placeholder/SPX464Centerfire_placeholder.png"

const Weapons = () => {
    const [Weapon, setWeapon] = useState("spx")
    const weaponimgs = {
        "spx" : spx_placeholder,
        "fal" : fal_placeholder
    }

    return (
        <div>
            <select onChange={(e) => setWeapon(e.target.value)}>
                <option value="spx">spx</option>
                <option value="fal">fal</option>
            </select>
            <img src={weaponimgs[Weapon]} style={{width: "200px", display: "block"}}></img>
        </div>
    )
}

export default Weapons