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

export const singleSavedRecipes = async(id) => {
    return getdata(`/api/recipes/save/data/${id}`)
}

export const reportRecipe = async(v) => {
  return mutation(v, '/api/recipes/report', 'POST')
}

export const addRecipes = async(v) => {
    return mutation(v,`/api/recipes`,`POST`)
}

export const updateRecipe = async(v,id) => {
    return mutation(v,`/api/recipes/edit/${id}`,'PATCH')
}

export const saveRecipeData = async(v) => {
    return mutation(v,`/api/recipes/save`,'POST')
}

export const deleteRecipeButton = async(id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/recipes/delete/${id}`,{
        method: "DELETE"
    })
    const data = await res.json()
    return data
}

export const deleteSaveButton = async(id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/recipes/save/delete/${id}`,{
        method: "DELETE"
    })
    const data = await res.json()
    return data
}

export const getReportStatus = async (recipeId, userId) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/recipes/report/status/${recipeId}/${userId}`
  );
  return res.json();
};