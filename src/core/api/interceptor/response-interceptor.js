export const resInterceptor = (req) => {
  if(req.status === 200){
    localStorage.setItem('isVerified', true)
  }else{
    localStorage.setItem('isVerified', false)
  }
  return req;
};
