export class Products {
  id;
  name;
  about;
  img1;
  description1;
  img2;
  description2;
  img3;
  description3;
  img4;
  description4;
  img5;
  description5;
  img6;
  img7;

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
    this.id = id;
    this.name = name;
    this.about = about;
    this.img1 = img1;
    this.description1 = description1;
    this.img2 = img2;
    this.description2 = description2;
    this.img3 = img3;
    this.description3 = description3;
    this.img4 = img4;
    this.description4 = description4;
    this.img5 = img5;
    this.description5 = description5;
    this.img6 = img6;
    this.img6 = img7;
  }

  showProducts() {
    // TODOS LOS TRABAJOS
    return `
        <article class="Card" id="${this.id}" data-aos="fade-up" >
          <div>
            <p>Diseño UX/ UI</p>
            <h3>${this.name}</h3>
          </div>
          <figure>
            <img src="${this.img1}" alt="hero image">
          </figure>     
        </article>
      </a>
  
  `;
  }
}
