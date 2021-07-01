
export default function Item ({
  name = '',
  image = '',
  phone = '',
  onClick
}) {

  return (
    <div
      className="item_wrapper"
      onClick={onClick}
    >
      <div
        className="avatar"
      >
        {name[0]}
      </div>
      <div>
        <h4>{name}</h4>
        <p
          className="item_desc"
        >
          {phone}
        </p>
      </div>
    </div>
  )
}