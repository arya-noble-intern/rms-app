@extends('layouts.app')

@section('additional-head')
<link rel="stylesheet" href="{{asset('css/signin.css')}}">
@endsection

@section('content')
<div class="signin-body">
  <main class="form-signin">
    <form method="POST" action="{{ route('login') }}">
      @csrf

      <img class="mb-4" src="{{asset('logo.png')}}" alt="aryanoble logo" width="100">
      <h1 class="h5 mb-3 fw-normal mt-2">Recruitment Management System</h1>
      <div class="form-outline">
        <input id="email" type="email"
          class="form-control form-control-lg bg-white @error('email') is-invalid @enderror" name="email"
          placeholder="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

        <label for="email" class="form-label">Email address</label>
        @error('email')
        <span class="invalid-feedback" role="alert">
          <strong>{{ $message }}</strong>
        </span>
        @enderror
      </div>

      <div class="form-outline mt-3">
        <input id="password" type="password"
          class="form-control form-control-lg bg-white @error('password') is-invalid @enderror" name="password"
          placeholder="password" required autocomplete="current-password">
        <label for="password" class="form-label">Password</label>

        @error('password')
        <span class="invalid-feedback" role="alert">
          <strong>{{ $message }}</strong>
        </span>
        @enderror
      </div>

      <button class="w-100 btn btn-lg btn-primary mt-4" type="submit">Sign in</button>
      @if (Route::has('password.request'))
      <a class="btn btn-link mt-2" href="{{ route('password.request') }}">
        {{ __('Forgot Your Password?') }}
      </a>
      @endif
      <p class="mt-5 mb-3 text-muted">&copy; 2021 Arya Noble</p>
    </form>
  </main>
</div>
@endsection