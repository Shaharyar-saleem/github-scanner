import React from "react";

export default function UserName() {
    let inputForm = {
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: '30px'
    }
  return (
    <div class="input-group" style={inputForm}>
      <div class="form-outline">
        <input type="search" class="form-control" placeholder="Enter User Name" />
      </div>
      <button type="button" class="btn btn-primary">
        Search
      </button>
    </div>
  );
}
