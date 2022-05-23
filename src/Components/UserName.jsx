import React, {useState} from "react";

export default function UserName(props) {
    let inputForm = {
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: '30px'
    }

    let [userName, setUserName] = useState("")

    let onChange = (e) => {
        setUserName(e.target.value)
    }

    let onSubmitForm = () => {
        props.setGitUserName(userName)
    }
  return (
    <div class="input-group" style={inputForm}>
      <div class="form-outline">
        <input type="search" class="form-control" placeholder="Enter User Name" onChange={onChange} />
      </div>
      <button type="button" class="btn btn-primary" onClick={onSubmitForm}>
        Search
      </button>
    </div>
  );
}
