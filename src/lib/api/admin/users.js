const BaseUrl = process.env.NEXT_PUBLIC_SERVER_URL

export const countUsers = async () => {
    const res = await fetch(`${BaseUrl}/api/admin/users`)
    return res.json()
}

export const countRecepies = async () => {
    const res = await fetch(`${BaseUrl}/api/admin/recipes`)
    return res.json()
}