export const topLike = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/recipe/like/top`)
    return res.json()
}