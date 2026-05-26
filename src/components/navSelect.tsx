function NavSelect({ items }: { items: unknown[] }) {
  return (
    <>      
      <label htmlFor="mobileNavSelect">
        Select from timeline:
      </label>
      <select id="mobileNavSelect">
        {items.map((item: any) =>(
          <option value="{item.year}">
            {item.year}
          </option>
        ))}
      </select>
    </>
  )
}

export default NavSelect;