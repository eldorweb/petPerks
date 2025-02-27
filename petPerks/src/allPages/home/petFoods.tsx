import { FoodMocdata } from "../../mocData/FoodMocdata"

const PetFoods = () => {
    return (
        <div>
            {
                FoodMocdata.map(value => {
                    return <img src={value.menu.photo} alt="" className="" />
                })
            }
        </div>
    )
}

export default PetFoods