import { getdata, mutation } from "../mutation"

export const myRecipes = async(id) => {
    return getdata(`/api/recipes/${id}`)
}

export const addRecipes = async(v) => {
    return mutation(v,`/api/recipes`,`POST`)
}