import { mutation } from "../mutation"

const BaseUrl = process.env.NEXT_PUBLIC_SERVER_URL

export const countUsers = async (token) => {
    const res = await fetch(`${BaseUrl}/api/admin/users`,{
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    return res.json()
}

export const countRecepies = async () => {
    const res = await fetch(`${BaseUrl}/api/admin/recipes`)
    return res.json()
}

export const countPremium = async () => {
    const res = await fetch(`${BaseUrl}/api/admin/premium`)
    return res.json()
}

export const reportsListings = async () => {
    const res = await fetch(`${BaseUrl}/api/recipes/report/list`)
    return res.json()
}

export const adminDeleteRecipeItem = async (id,token) => {
    const res = await fetch(`${BaseUrl}/api/admin/recipe/delete/${id}`,{
        method: "DELETE",
        headers: {
            authorization: `Bearer ${token?.token}`
        }
    })
    return res.json()
}

export const updatePremium = async (id,token) => {
    const res = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/users/block/${id}`,
            {
                method: "PATCH",
                headers: {
                    "Authorization": `Bearer ${token?.token}`
                }
            }
            );

        const data = await res.json();
        return data
}

export const addFeature = async (v,token) => {
    return mutation(v,`/api/admin/recipe/feature`, 'POST', token)
}

export const getFeature = async () => {
    const res = await fetch(`${BaseUrl}/api/admin/recipe/feature`)
    return res.json()
}

export const deleteReportButton = async(id) => {
    console.log(id)
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/recipes/report/list/delete/${id}`,{
        method: "DELETE"
    })
    const data = await res.json()
    return data
}

export const deleteReportRecipeButton = async(id) => {
    console.log(id)
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/recipes/report/recipe/list/delete/${id}`,{
        method: "DELETE"
    })
    const data = await res.json()
    return data
}