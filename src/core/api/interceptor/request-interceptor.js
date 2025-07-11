export const reqInterceptor = (req) => {
	
	const token = localStorage.getItem("lasepa_admin_token");

	if (!req.url.startsWith("https://api.cloudinary.com/v1_1/") && token)
		req.headers.Authorization = `Bearer ${token}`;
	req.headers["version"] = "2.1";
	return req;
};
