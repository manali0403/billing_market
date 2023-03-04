import React from 'react'

function AccountantDashBoard() {
  return (
    <>
         <nav class="navbar navbar-expand-lg navbar-light bg-info">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Account</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Consultncy Services</a>
        <a class="nav-link" href="#">Finance</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled" href="#" >Disabled</a>
      </div>
    </div>
  </div>
</nav>
    
    </>
  )
}

export default AccountantDashBoard