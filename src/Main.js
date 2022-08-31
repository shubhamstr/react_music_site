import React from 'react'
import { Link } from "react-router-dom";

export default function Main(props) {
  return (
    <main>
      <h1 class="visually-hidden">Features examples</h1>

      <div class="container px-4 py-5" id="featured-3">
        <h2 class="pb-2 border-bottom">Columns with icons</h2>
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div class="feature col">
            <div class="feature-icon bg-primary bg-gradient">
            </div>
            <h2>{props.title1}</h2>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            <Link to="#" class="icon-link" onClick={props.getData}>
              Update Title
            </Link>
          </div>
          <div class="feature col">
            <div class="feature-icon bg-primary bg-gradient">
            </div>
            <h2>Featured title</h2>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            <Link to="#" class="icon-link">
              Call to action
            </Link>
          </div>
          <div class="feature col">
            <div class="feature-icon bg-primary bg-gradient">
            </div>
            <h2>Featured title</h2>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            <Link to="#" class="icon-link">
              Call to action
            </Link>
          </div>
        </div>
      </div>

      <div class="b-example-divider"></div>

      <div class="container px-4 py-5" id="hanging-icons">
        <h2 class="pb-2 border-bottom">Hanging icons</h2>
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div class="col d-flex align-items-start">
            <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
            </div>
            <div>
              <h2>Featured title</h2>
              <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
              <Link to="#" class="btn btn-primary">
                Primary button
              </Link>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
            </div>
            <div>
              <h2>Featured title</h2>
              <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
              <Link to="#" class="btn btn-primary">
                Primary button
              </Link>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div class="icon-square bg-light text-dark flex-shrink-0 me-3">
            </div>
            <div>
              <h2>Featured title</h2>
              <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
              <Link to="#" class="btn btn-primary">
                Primary button
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div class="b-example-divider"></div>

      <div class="container px-4 py-5" id="custom-cards">
        <h2 class="pb-2 border-bottom">Custom cards</h2>

        <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div class="col">
            <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{backgroundImage: "url('unsplash-photo-1.jpg')"}}>
              <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h2>
                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white" />
                  </li>
                  <li class="d-flex align-items-center me-3">
                    <small>Earth</small>
                  </li>
                  <li class="d-flex align-items-center">
                    <small>3d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{backgroundImage: "url('unsplash-photo-2.jpg')"}}>
              <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Much longer title that wraps to multiple lines</h2>
                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white" />
                  </li>
                  <li class="d-flex align-items-center me-3">
                    <small>Pakistan</small>
                  </li>
                  <li class="d-flex align-items-center">
                    <small>4d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{backgroundImage: "url('unsplash-photo-3.jpg')"}}>
              <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Another longer title belongs here</h2>
                <ul class="d-flex list-unstyled mt-auto">
                  <li class="me-auto">
                    <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white" />
                  </li>
                  <li class="d-flex align-items-center me-3">
                    <small>California</small>
                  </li>
                  <li class="d-flex align-items-center">
                    <small>5d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="b-example-divider"></div>

      <div class="container px-4 py-5" id="icon-grid">
        <h2 class="pb-2 border-bottom">Icon grid</h2>

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
          <div class="col d-flex align-items-start">
            <div>
              <h4 class="fw-bold mb-0">Featured title</h4>
              <p>Paragraph of text beneath the heading to explain the heading.</p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div>
              <h4 class="fw-bold mb-0">Featured title</h4>
              <p>Paragraph of text beneath the heading to explain the heading.</p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div>
              <h4 class="fw-bold mb-0">Featured title</h4>
              <p>Paragraph of text beneath the heading to explain the heading.</p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div>
              <h4 class="fw-bold mb-0">Featured title</h4>
              <p>Paragraph of text beneath the heading to explain the heading.</p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div>
              <h4 class="fw-bold mb-0">Featured title</h4>
              <p>Paragraph of text beneath the heading to explain the heading.</p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div>
              <h4 class="fw-bold mb-0">Featured title</h4>
              <p>Paragraph of text beneath the heading to explain the heading.</p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div>
              <h4 class="fw-bold mb-0">Featured title</h4>
              <p>Paragraph of text beneath the heading to explain the heading.</p>
            </div>
          </div>
          <div class="col d-flex align-items-start">
            <div>
              <h4 class="fw-bold mb-0">Featured title</h4>
              <p>Paragraph of text beneath the heading to explain the heading.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
