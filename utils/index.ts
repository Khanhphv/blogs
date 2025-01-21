export const delay = (ms: number = 0) =>
  new Promise((res) => setTimeout(res, ms))

export async function getFinalURL(initialURL: string) {
  try {
    const response = await fetch(initialURL, {
      method: 'HEAD',
      redirect: 'follow',
    })
    return response.url // The final endpoint after redirection
  } catch (error) {
    console.error('Error fetching the URL:', error)
    return null
  }
}
