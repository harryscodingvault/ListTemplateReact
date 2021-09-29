import { useGlobalContext } from "../context"

import Loading from "./Loading"

const RescipeList = () => {
    const {recipes, loading} = useGlobalContext()

    if(loading){
        return <Loading/>
    }

    if(recipes.lenght < 1){
        return <h2>No meals found</h2>
    }

    return (
        <section>
            RescipeList
        </section>
    )
}

export default RescipeList