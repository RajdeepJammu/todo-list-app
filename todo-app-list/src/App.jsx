export default function App() {
  return (
    <>
      <form clasName="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input type="text" id="item"></input>
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 ckassName="header">Todo List</h1>
      <ul className="list">
        <li>
          <label>
            <input type="checkbox" />
            Item 1
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Item 2
          </label>
        </li>
      </ul>
    </>
  );
}
