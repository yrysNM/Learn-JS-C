import { Author } from "./2.1Author";
import { Book } from "./2.1Book";

function main() {
  const authorTeck = new Author("Tan Ah Teck", "ahteck@nowwhere.com", "m");

  console.log(authorTeck.toString());
  authorTeck.setEmail("paulTan@nowherecom");
  console.log("name is: " + authorTeck.getName());
  console.log("eamil is: " + authorTeck.getEmail());
  console.log("gender is: " + authorTeck.getGender());

  const dummyBook = new Book("Java for dummy", authorTeck, 19.95, 99);
  dummyBook.setPrice(29.95);
  dummyBook.setQty(28);
  console.log("name is: " + dummyBook.getName());
  console.log("price is: " + dummyBook.getPrice());
  console.log("qty is: " + dummyBook.getQty());
  console.log("Author is: " + dummyBook.getAuthor()); // Author's toString()
  console.log("Author's name is: " + dummyBook.getAuthor().getName());
  console.log("Author's email is: " + dummyBook.getAuthor().getEmail());
}

main();
