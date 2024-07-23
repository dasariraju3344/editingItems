import React, { useState } from 'react';

const Input = () => {

  const [list, setList] = useState([])

  const [data, setData]=useState({
    name:""
  })

  const [editingItem, setEditItem] = useState({
    isEditing : false,
    id : ""
  })

  const handleOnChange = (e) => {
    setData({
      ...data,
      name: e.target.value
    })
  }

  const handleOnClick = () => {
    let newList = {name:data.name,
       id: new Date().getTime().toString()}
    setList([...list,newList])
    setData({
      name:"",
      id:""
    });
  };

  const handleDelete = (id) => {
    const newData = list.filter((eachItem) => {
      return eachItem.id != id;
    })
    setList(newData)
  }

  const changeEditingState = (id) => {
    setEditItem({...editingItem,
      isEditing: true,
      id: id
    });
    let editableItem = list.find((eachone) => {
      return(eachone.id === id)
    })
    setData({...data,
      name: editableItem.name
    })
  }

  const handleMainEdit = () => {
    let newTodolist = list.map((everyitem) => {
      if (everyitem.id === editingItem.id) {
        return {
          name: data.name,
          id: editingItem.id
        }
      } else {
        return everyitem
      }
    });
    setList(newTodolist)
    setData({
      name:""
    })
    setEditItem({
      isEditing : false,
      id : ""
    })
  }

  return (
    <div>
      <h1>LIST ITEMS</h1>
      <input 
        type='text'
        name='message'
        id='data.id'
        placeholder='Enter some text' 
        value={data.name} 
        onChange={handleOnChange}>
      </input>
      {editingItem.isEditing ? <button 
        type="submit" 
        className="btn btn-primary button" 
        onClick={handleMainEdit}>
          Edit
      </button> : <button 
        type="submit" 
        className="btn btn-primary button" 
        onClick={handleOnClick}>
          ADD
      </button>}

      <div>
         {list.length === 0 && <h5>There is no item in the List</h5>}
        {list.map((eachItem) => {
          const {name,id} = eachItem
          return(
          <div key={id}>
            <span>
              {name}
            </span>
            <button type="button" 
            className="btn btn-primary button"
            onClick={() => changeEditingState(id)}>
              Edit
            </button>
            <button 
              type="button" 
              className="btn btn-primary button"
              onClick={() => handleDelete(id)}>
                Delete
            </button>
          </div>)
        })}
      </div>
      <hr></hr>
    </div>
  )
}

export default Input;