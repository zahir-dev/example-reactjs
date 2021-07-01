import axios from 'axios';
import { useEffect, useState } from 'react';
import Item from './Item';
import './style.css';

export default function Contact({
  token,
  slug,
  onSelect
}) {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')


  const getContacts = async () => {
    try {
      const res = await axios.get('/api/v2/contacts?per_page=100&isort[name]=1&includes[emails,phones,other_fields,addresses,contact_persons]=true', {
        headers: {
          authorization: `Bearer ` + token,
          slug: slug
        }
      })
      setData(res.data.results)
    } catch (error) {

    }
  }

  useEffect(() => {
    if(slug && token) {
      getContacts()
    }
  }, [slug, token]);

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const items = data.map((item) => {
    let phone = '-';
    if(item?.phones[0]?.value) {
      phone = item.phones[0].value
    }

    return {
      ...item,
      phone
    }
  }).filter(item => {
    let value = true
    if(search !== '') {
      value = item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    }
    return value
  })

  return (
    <div>
      <div>
        <h1
          className="title"
        >
          Contacts
        </h1>
      </div>
      <div
        className="search"
      >
        <input
          placeholder="Search name here..."
          onChange={handleSearch}
        />
      </div>
      <div
        className="contact_wrapper"
      >
        <h3>My Contacts</h3>
      </div>
      <div
        style={{
          position: 'relative'
        }}
      >
        <div
          style={{
            maxHeight: window.innerHeight - 230,
            overflow: 'auto',
            position: 'relative'
          }}
        >
          {items.map(item => (
            <Item
              name={item.name}
              phone={item.phone}
              onClick={() => onSelect(item)}
            />
          ))}
        </div>
        {/* <div
          className="add_button"
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 15.1667H15.1667V21C15.1667 21.6417 14.6417 22.1667 14 22.1667C13.3583 22.1667 12.8333 21.6417 12.8333 21V15.1667H7.00001C6.35834 15.1667 5.83334 14.6417 5.83334 14C5.83334 13.3583 6.35834 12.8333 7.00001 12.8333H12.8333V7.00001C12.8333 6.35834 13.3583 5.83334 14 5.83334C14.6417 5.83334 15.1667 6.35834 15.1667 7.00001V12.8333H21C21.6417 12.8333 22.1667 13.3583 22.1667 14C22.1667 14.6417 21.6417 15.1667 21 15.1667Z" fill="#EBEDF7" />
          </svg>
        </div> */}
      </div>


    </div>
  )
}