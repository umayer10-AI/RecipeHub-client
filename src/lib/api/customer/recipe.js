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

export const updateRecipe = async(v,id) => {
    return mutation(v,`/api/recipes/edit/${id}`,'PATCH')
}

export const deleteRecipeButton = async(id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/recipes/delete/${id}`,{
        method: "DELETE"
    })
    const data = await res.json()
    return data
}