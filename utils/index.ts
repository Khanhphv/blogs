export const delay = (ms: number = 5000) =>
  new Promise((res) => setTimeout(res, ms))
