
class updateData extends HTMLFormElement{

  constructor() {
    super();
    this.term = "";
    this.definition = "";
    this.context = "";
  }

    static get properties() {
		return {
			term: {type: String},
			definition: {type: String},
			context: {type: String}
        }
    }


}

const form = document.querySelector("#add-term")
form.addEventListener("submit", () => {

  const term = document.querySelector("#term").value;
  const definition = document.querySelector("#definition").value;
  const context = document.querySelector("#context").value;
  const url = new URL('https://term-glossary.vercel.app/api/addterm.js')
  url.searchParams.set('term',term)
  url.searchParams.set('definition', definition)
  url.searchParams.set('context', context)

  fetch(`/api/addTerm`).then(res => res.json()).then((data) => {
   document.querySelector("#term").value = JSON.stringify(data, null, 2);
  });

}
)