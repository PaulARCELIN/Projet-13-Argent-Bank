import './SignInForm.css'

export function SignInForm() {
    return <main className="main bg-dark">
        <section className='sign-in-content'>
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form>
                <div className="input-wrapper">
                    <label for="username">Username</label>
                    <input id="username" type="texte"></input>
                </div>
                <div className="input-wrapper">
                    <label for="password">Password</label>
                    <input id="password" type="texte"></input>
                </div>
                <div className="input-remember">
                    <input id="remember-me" type="checkbox"></input>
                    <label for="remember-me">Remember me</label>
                </div>
                <button class="sign-in-button">Sign In</button> 
            </form>
        </section>
    </main>
}