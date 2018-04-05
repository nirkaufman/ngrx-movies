import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- Begin Header -->
    <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div class="container">
          <a class="navbar-brand" href="#">My Movie Collection</a>

          <!-- Begin Search -->
          <form class="form-inline">
            <input class="form-control" placeholder="Search...">
          </form>

        </div>
      </nav>
    </header>

    <!-- Begin page content -->
    <main class="container">


      <!-- Begin Movie Gallery -->
      <div class="row">
        <div class="col-sm-3" style="padding: 20px; box-sizing: border-box">
          <div class="card">
            <img class="card-img-top" src="assets/1.jpg">
          </div>
        </div>

        <div class="col-sm-3" style="padding: 20px; box-sizing: border-box">
          <div class="card">
            <img class="card-img-top" src="assets/1.jpg">
          </div>
        </div>

        <div class="col-sm-3" style="padding: 20px; box-sizing: border-box">
          <div class="card">
            <img class="card-img-top" src="assets/1.jpg">
          </div>
        </div>

        <div class="col-sm-3" style="padding: 20px; box-sizing: border-box">
          <div class="card">
            <img class="card-img-top" src="assets/1.jpg">
          </div>
        </div>

        <div class="col-sm-3" style="padding: 20px; box-sizing: border-box">
          <div class="card">
            <img class="card-img-top" src="assets/1.jpg">
          </div>
        </div>

        <div class="col-sm-3" style="padding: 20px; box-sizing: border-box">
          <div class="card">
            <img class="card-img-top" src="assets/1.jpg">
          </div>
        </div>

        <div class="col-sm-3" style="padding: 20px; box-sizing: border-box">
          <div class="card">
            <img class="card-img-top" src="assets/1.jpg">
          </div>
        </div>

        <div class="col-sm-3" style="padding: 20px; box-sizing: border-box">
          <div class="card">
            <img class="card-img-top" src="assets/1.jpg">
          </div>
        </div>

      </div>

      <!-- Begin Movie Detalis -->
      <div class="row">
        <div class="col-sm-4 offset-4">
        <div class="card">
        <img class="card-img-top" src="assets/1.jpg">
          <div class="card-body">
            <h5 class="card-title">The Matrix</h5>
            <h6 class="card-subtitle mb-2 text-muted">Released: 31 Mar 1999</h6>
            <p class="card-text">
              A computer hacker learns from mysterious rebels about the true nature of his reality and
              his role in the war against its controllers.
            </p>
            <p class="card-text">
              <small class="text-muted">
                <strong>Runtime:</strong> 136 min | <strong>Language</strong>: English
            </small>
            </p>
            <a href="#" class="btn btn-primary">Add</a>
          </div>
        </div>
        </div>
      </div>

      <!-- Begin Sign-in Form -->
      <div class="row">
        <div class="text-center">
        <div class="sign-in-container">
          <form class="form-signin">
            <img class="mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
            <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me"> Remember me
              </label>
            </div>
            <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
          </form>
        </div>
      </div>
      </div>

      <!-- Begin Loader -->
      <div class="loader">Loading...</div>

      <!-- Begin Notification -->
      <div id="snackbar" class="show">Some text some message..</div>

    </main>

    <!-- Begin Footer -->
    <footer class="footer">
      <div class="container">
        <span class="text-muted">nirkaufman@gmail.com</span>
      </div>
    </footer>
  `,
})
export class AppComponent {}
