import baseAxios from '../../core/api/axios/baseAxios'

class AuthService {
  static async Login(data: { email: string; password: string }) {
    try {
      // Set login mode if not already set
      if (!localStorage.getItem("login_mode")) {
        localStorage.setItem("login_mode", "user_admin")
      }

      // Make API request
      const res = await baseAxios.post(`v2/admin/supervisor/login`, {
        email: data.email,
        password: data.password,
      })

      // Store the response in localStorage
      localStorage.setItem("current_user", JSON.stringify(res.data))

      // Return response data
      return res.data
    } catch (error: any) {
      // Optional: Add error logging or toast here
      console.error("Login failed:", error)
      throw error
    }
  }
}

export default AuthService
