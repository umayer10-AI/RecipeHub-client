export const getUserPayment = async(id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/payments/${id}`)
    const data = await res.json()
    return data
}

export const getAllPayments = async(token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/user/payments/admin/data`,{
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    const data = await res.json()
    return data
}