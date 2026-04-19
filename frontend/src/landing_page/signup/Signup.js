import { useState } from "react";
import "./Signup.css";

function Signup() {
  const [isLogin, setIsLogin] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const API = process.env.REACT_APP_API_URL;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // SIGNUP
  const handleSignup = async () => {
    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.phone.trim() ||
      !form.password.trim()
    ) {
      alert("Please fill all fields");
      return;
    }

    if (!API) {
      alert("API not configured");
      return;
    }

    try {
      const res = await fetch(`${API}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      let data = {};
      try {
        data = await res.json();
      } catch {}

      if (!res.ok) {
        alert(data.message || "Signup failed");
        return;
      }

      if (data.message === "User already exists") {
        alert("User already exists, please login");
        setIsLogin(true);
        return;
      }

      if (data.message === "Signup successful") {
        // AUTO LOGIN
        const loginRes = await fetch(`${API}/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: form.email,
            password: form.password,
          }),
        });

        let loginData = {};
        try {
          loginData = await loginRes.json();
        } catch {}

        if (loginData.token) {

          window.location.replace(
            `https://zerodha-project-dashboard.vercel.app/?token=${loginData.token}`
          );
        }
      }
    } catch (err) {
      console.log(err);
      alert("Signup error");
    }
  };

  // LOGIN
  const handleLogin = async () => {
    if (!form.email.trim() || !form.password.trim()) {
      alert("Enter email and password");
      return;
    }

    if (!API) {
      alert("API not configured");
      return;
    }

    try {
      const res = await fetch(`${API}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      });

      let data = {};
      try {
        data = await res.json();
      } catch {}

      if (!res.ok || !data.token) {
        alert(data.message || "Login failed");
        return;
      }

      window.location.replace(
        `https://zerodha-project-dashboard.vercel.app/?token=${data.token}`
      );
    } catch (err) {
      console.log(err);
      alert("Login error");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isLogin ? "Login" : "Signup"}</h2>

        {!isLogin && (
          <>
            <input name="name" placeholder="Name" onChange={handleChange} />
            <input name="phone" placeholder="Phone" onChange={handleChange} />
          </>
        )}

        <input name="email" placeholder="Email" onChange={handleChange} />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button onClick={isLogin ? handleLogin : handleSignup}>
          {isLogin ? "Login" : "Signup"}
        </button>

        <p onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "New user? Signup" : "Already registered? Login"}
        </p>
      </div>
    </div>
  );
}

export default Signup;