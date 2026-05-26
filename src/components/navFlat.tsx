import './navFlat.css';

function NavFlat({ items }: { items: unknown[] }) {
  return (
    <>
      <label htmlFor="flatNavList">
        This list will be generated from fetched data.
      </label>
      <ol id="flatNavList">
        {items.map((item: any) => (
          <li><a href="#">{item.year}</a></li>
        ))}
      </ol>
    </>
  )
}

export default NavFlat;