export const EditorPage = () => {
  /**
   *
   * @param {Event} event
   */
  function handleIdSubmit(event) {
    event.preventDefault();
    let form = event.target;
    let id = form.vid.value;
    console.log(id);
  }

  return (
    <>
      <form onSubmit={handleIdSubmit}>
        <input name="vid" placeholder="Youtube video id" />
        <button>Submit</button>
      </form>
    </>
  );
};
