

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/bansalkanav84')
    return response.json()
}
export default githubInfoLoader