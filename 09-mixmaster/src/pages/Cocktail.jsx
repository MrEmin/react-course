import { Link, useLoaderData } from 'react-router-dom'
import axios from 'axios'
import Wrapper from '../assets/wrappers/CocktailPage'

const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

export const loader = async ({ params }) => {
  const { id } = params
  const { data } = await axios.get(`${singleCocktailUrl}${id}`)
  return { id, data }
}

const Cocktail = () => {
  const { id, data } = useLoaderData()
  return <h1>Cocktail</h1>
}
export default Cocktail
