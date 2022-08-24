import React from 'react'

export default function Footer() {
  return (
    <footer class="text-center text-white" style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}>
      <div class="container p-4 pb-0">
        <section class="mb-4">
          <a
            class="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#3b5998" }}
            href="#!"
            role="button"
          ><i class="fab fa-facebook-f"></i
          ></a>
          <a
            class="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#55acee" }}
            href="#!"
            role="button"
          ><i class="fab fa-twitter"></i
          ></a>
          <a
            class="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#dd4b39" }}
            href="#!"
            role="button"
          ><i class="fab fa-google"></i
          ></a>
          <a
            class="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#ac2bac" }}
            href="#!"
            role="button"
          ><i class="fab fa-instagram"></i
          ></a>
          <a
            class="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#0082ca" }}
            href="#!"
            role="button"
          ><i class="fab fa-linkedin-in"></i
          ></a>
          <a
            class="btn btn-primary btn-floating m-1"
            style={{ backgroundColor: "#333333" }}
            href="#!"
            role="button"
          ><i class="fab fa-github"></i
          ></a>
        </section>
      </div>
      <div class="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        © 2020 Copyright:
        <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
      </div>
    </footer>
  )
}
