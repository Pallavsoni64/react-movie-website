import React from 'react'
import { useGlobalContaxt } from './context'

const Search = () => {
  const {query,setQuery,Iserror}= useGlobalContaxt();

  return (
  <section className="search-section">
    <h2>Search your favourite movie</h2>
    <form action="#" onSubmit={(e)=>e.preventDefault}>
      <div>
        <input type="text" placeholder='search here' value={query}
        onChange={(e)=>{setQuery(e.target.value)}}/>
      </div>
    </form>
    <div className="card-error">
      <p>{Iserror.show && Iserror.msg}</p>
    </div>
  </section>
  )
}

export default Search
