const addBtn = document.querySelector("#add-btn");
const main = document.querySelector("#main");

const saveNotes = () => {

  const noteItems = {
    notes: document.querySelectorAll(".note textarea"),
    notesTitle: document.querySelectorAll(".note .tool .title"),
  };

  const data = [];
  noteItems.notes.forEach((note) => {

    data.push({ note: note.value });
  });

  noteItems.notesTitle.forEach((noteTitle) => {
    data.push({ noteTitle: noteTitle });
  });
};

addBtn.addEventListener("click", (e) => {
  addNote();
});

const addNote = () => {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
  <div class="note">
    <div class="tool">
    <input type="text" placeholder="enter title here..." class="title" />
    <button><i class="save fa-solid fa-floppy-disk tool-btn"></i></button>
    <button><i class="trash fa-solid fa-trash tool-btn"></i></button>
    </div>
      <textarea></textarea>
    </div>
  `;

  const removeNote = note.querySelector(".trash");
  removeNote.addEventListener("click", () => {
    note.remove();
  });

  const svNotes = note.querySelector(".save");
  svNotes.addEventListener("click", () => {
    saveNotes();
  });

  main.appendChild(note);
};
