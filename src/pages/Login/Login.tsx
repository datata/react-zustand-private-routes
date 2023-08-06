import { useState } from "react";
import { useAuthStore } from "../../store/useAuthStore";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate()

	const setToken = useAuthStore(state => state.setToken)
	const setProfile = useAuthStore(state => state.setProfile)

	const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value);
	};

	const login = () => {
		fetch("https://dummyjson.com/auth/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				username: email,
				password: password,
			}),
		})
			.then((res) => {
				if(!res.ok) throw new Error('Login error')
				
				return res.json()
			})
			.then((res) => {
					setToken(res.token)
					setProfile({
						id: res.id,
						username: res.username,
						email: res.email,
						image: res.image,
						iat: res.iat,
						exp: res.exp
				})

				navigate('/profile')
				// return res
			})
			.catch((error: unknown) => console.log(error))
	};

	return (
		<>
			<input type="email" name="email" onChange={emailHandler} />
			<input type="password" name="password" onChange={passwordHandler} />
			<button onClick={login}>Login</button>
		</>
	);
};

export default Login;
