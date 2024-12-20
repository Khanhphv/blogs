export interface ILoginParams {
  email?: string
  password?: string
  provider?: string
  token?: string
}

export interface IToken {
  access: string
  refresh: string
}
