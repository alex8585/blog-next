import jwt from 'jsonwebtoken'

export const generateToken = (id: number) => {
  return jwt.sign({ id }, process.env.NEXT_PUBLIC_JWT_SECRET ?? '', {
    expiresIn: '30d',
  })
}

export const calcPages = (pageSize: number, totalCount: number) => {
  return totalCount < pageSize ? 1 : Math.ceil(totalCount / pageSize)
}

export const getUserFromLocalStorage = () => {
  const user = localStorage.getItem('user')
  if (!user) {
    return null
  }

  return JSON.parse(user)
}

export const getUserTokenFromLocalStorage = () => {
  const user = getUserFromLocalStorage()
  if (!user || !user.token) {
    return null
  }
  return user.token
}

export const deleteUserFromLocalStorage = () => {
  localStorage.removeItem('user')
}

export function getImgUrl(img = '') {
  img = img.replace(/^\/+/g, '')
  if (!img) {
    return ''
  }
  return process.env.NEXT_PUBLIC_UPLOADS_URL + '/' + img
}
