import fullData from "../data/data.js";
import Card from "./card.js";

export default function cardgroud() {
    
    return (

        fullData.map(item => (
            <Card data={ item } key={item.id} />
        )
    )
)
};