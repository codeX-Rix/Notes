const addBtn = document.querySelector("#add-btn");
const main = document.querySelector("#main");

addBtn.addEventListener("click", (e) => {
  addNote();
});

const addNote = () => {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
  <div class="note">
    <div class="tool">
    <input type="text" placeholder="enter title here..." autofocus />
    <button><i class="save fa-solid fa-floppy-disk tool-btn"></i></button>
    <button><i class="trash fa-solid fa-trash tool-btn"></i></button>
    </div>
      <textarea></textarea>
    </div>
  `;

  const removeNote = note.querySelector('.trash')
  removeNote.addEventListener('click',() => {
    note.remove()
  })
  main.appendChild(note);
};
