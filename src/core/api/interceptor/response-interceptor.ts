export const resInterceptor = (res: any) => {
  if (res.status === 200) {
    localStorage.setItem('isVerified', 'true')
  } else {
    localStorage.setItem('isVerified', 'false')
  }
  return res
}
