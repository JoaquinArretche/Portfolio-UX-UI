import { Products } from "./Products copy.js";

export class work extends Products {
  constructor(
    id,
    name,
    about,
    img1,
    description1,
    img2,
    description2,
    img3,
    description3,
    img4,
    description4,
    img5,
    description5,
    img6,
    img7,
  ) {
    super(
      id,
      name,
      about,
      img1,
      description1,
      img2,
      description2,
      img3,
      description3,
      img4,
      description4,
      img5,
      description5,
      img6,
      img7,
    );

  }

  showProductDetails() {
    return `
    <div class="work-container" id="${this.id} >
      <div class="title">
        <div>
          <h1>${this.name}</h1>
          <p>${this.about}</p>
        </div>

      <article>
        <figure>
          <img src="${this.img1}" alt="">
        </figure>
        <p>
        ${this.description1}
        </p>
      </article>

      <article>
        <figure>
          <img src="${this.img3}" alt="">
        </figure>
        <p>
        ${this.description2}
        </p>
      </article>

      
      <article>
        <figure>
          <img src="${this.img4}" alt="">
        </figure>
        <p>
        ${this.description3}
        </p>
      </article>

      
      <article>
        <figure>
          <img src="${this.img5}" alt="">
        </figure>
        <p>
        ${this.description4}
        </p>
      </article>

        <article>
        <figure>
          <img src="${this.img6}" alt="">
        </figure>
        <p>
        ${this.description5}
        </p>
      </article>


      

          <i class="fa-solid fa-xmark" id="Close"></i>

      </div>

    `;
  }
}
