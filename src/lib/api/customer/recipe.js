import { getdata, mutation } from "../mutation"

export const myRecipes = async(id) => {
    return getdata(`/api/recipes/${id}`)
}

export const allRecipes = async() => {
    return getdata(`/api/recipes`)
}

export const singleRecipes = async(id) => {
    return getdata(`/api/recipes/single/${id}`)
}

export const addRecipes = async(v) => {
    return mutation(v,`/api/recipes`,`POST`)
}