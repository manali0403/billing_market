import React from 'react'

function CEODashboard() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-info">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">CEO-DashBoard</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/ceo/register">Registe Employee</a>
        <a class="nav-link" href="/ceo/update">UpdateEmployee</a>
        <a class="nav-link" href="/ceo/retrive">Retrive Employee</a>
        <a class="nav-link" href="/ceo/remove">Remove Employee</a>
        <a class="nav-link" href="/ceo/password"> Employee Reset password</a>
        
        
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default CEODashboard