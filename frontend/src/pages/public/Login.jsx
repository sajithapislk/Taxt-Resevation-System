const Login = () => {
  return (
    <div class="div-padding p-t-0 signin-div user-access-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 offset-lg-3 text-center">
            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 offset-lg-3">
            <div class="account-access sign-in">
              <ul class="nav nav-tabs" role="tablist">
                <li role="presentation" class="active">
                  <a
                    href="#rider"
                    class="active"
                    aria-controls="rider"
                    role="tab"
                    data-toggle="tab"
                  >
                    Rider
                  </a>
                </li>
                <li role="presentation">
                  <a
                    href="#driver"
                    aria-controls="driver"
                    role="tab"
                    data-toggle="tab"
                  >
                    Driver
                  </a>
                </li>
              </ul>
              <div class="tab-content">
                <div role="tabpanel" class="tab-pane active" id="rider">
                  <form class="mb-4">
                    <div class="form-floating">
                      <input
                        type="email"
                        class="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                      />
                      <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating">
                      <input
                        type="password"
                        class="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                      />
                      <label for="floatingPassword">Password</label>
                    </div>
                    <div class="checkbox mb-3">
                      <label>
                        <input type="checkbox" value="remember-me" /> Remember
                        me
                      </label>
                    </div>
                    <button class="w-100 btn btn-lg btn-dark" type="submit">
                      Sign in
                    </button>
                  </form>
                  <p class="acclink">
                    Don't have an account?
                    <a href="sign-up.html">
                      Sign up
                      <i class="icofont">double_right</i>
                    </a>
                  </p>
                  <div class="externel-signup">
                    <a href="#" class="btn-block facebook">
                      <i class="fab fa-facebook-f"></i>
                      Sign up with Facebook
                    </a>
                    <a href="#" class="btn-block google">
                      <i class="fab fa-google"></i>
                      Sign up with Google
                    </a>
                  </div>
                </div>
                <div role="tabpanel" class="tab-pane" id="driver">
                  <form class="mb-4">
                    <div class="form-floating">
                      <input
                        type="email"
                        class="form-control"
                        id="floatingInputEmail"
                        placeholder="name@example.com"
                      />
                      <label for="floatingInputEmail">Email address</label>
                    </div>
                    <div class="form-floating">
                      <input
                        type="password"
                        class="form-control"
                        id="floatingPass"
                        placeholder="Password"
                      />
                      <label for="floatingPass">Password</label>
                    </div>
                    <div class="checkbox mb-3">
                      <label>
                        <input type="checkbox" value="remember-me" /> Remember
                        me
                      </label>
                    </div>
                    <button class="w-100 btn btn-lg btn-dark" type="submit">
                      Sign in
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;