import './navFlat.css';

function NavFlat({ items }: { items: unknown[] }) {
  return (
    <>
      <div id="NavCore">
        <label htmlFor="flatNavList">
          This list will be generated from fetched data.
        </label>
        <ol id="flatNavList">
          {items?.map((item: any) => (
            <li><a href="#">{item.year}</a></li>
          ))}
        </ol>
      </div>
    </>
  )
}

export default NavFlat;
