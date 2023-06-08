export class Book {
  id: number;
  title: string;
  author: string;
  image_source: string;
  text_source: string;

  constructor(id: number, title: string, author: string, image_source: string, text_source: string) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.image_source = image_source;
    this.text_source = text_source;
  }
}
