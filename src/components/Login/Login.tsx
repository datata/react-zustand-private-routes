import { useState } from "react";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

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
			.then((res) => res.json())
			.then(console.log);
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
