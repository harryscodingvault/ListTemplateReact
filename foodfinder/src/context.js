import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'
import axios from 'axios'

const URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?i='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('orange')
    const [recipes, setRecipes] = useState([])

    const fetchMeals = async() => {
        setLoading(true)
        const {data} = await axios.get(`${URL}${searchTerm}`)
        const {meals} = data
        if(meals){
            const newMeals = meals.map((item)=> {
                const {idMeal, strMeal, strMealThumb} = item
                return (
                    {id: idMeal, name: strMeal, image: strMealThumb}
                )
            })
            setRecipes(newMeals)
        }else{
            setRecipes([])
        }
        setLoading(false)
        console.log(data)
    }

    useEffect(()=>{
        fetchMeals()
    }, [searchTerm])

    return (
    <AppContext.Provider value={{loading, searchTerm, recipes, setSearchTerm}}>
        {children}
    </AppContext.Provider>
)}


export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }