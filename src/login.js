import "./login.css";

export default function Login() {
    return (
        <div className="body">
            <div className="container">
                <div className="header">
                    <p>LOGIN</p>
                </div>
                <div>
                    <form className="form-container">
                        <div className="form-item">
                            <input type="text" name="username" value="email" />
                        </div>
                        <div className="form-item">
                            <input
                                type="text"
                                name="pasword"
                                value="password"
                            />
                        </div>
                        <div className="form-item fg">
                            <button>google</button>
                            <button>facebook</button>
                        </div>
                        <div className="form-item">
                            <button>LOGIN</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
