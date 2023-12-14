import React ,{useState,useEffect}from 'react'
import "./Table.css"
import Moment from "react-moment";
function Table() {
  const [data, setdata] = useState([]);
  useEffect(() => getarticle(), []);
  const getarticle = () => {
    fetch(`${process.env.REACT_APP_API_URL}/alllist`)
      .then((data) => data.json())
      .then((list) => setdata(list.reverse()));
  };
  const deletearticle = (id) => {
    fetch(`${process.env.REACT_APP_API_URL}/delete/${id}`, {
      method: "DELETE",
    }).then(() => getarticle());
  };
  return <>
  <div id='table' className='Table-container'>
  <table class="table table-striped">
  <thead>
    <tr>

      <th scope="col">Day</th>
      <th scope="col">Date</th>
      <th scope="col">Start time</th>
      <th scope="col">End time</th>
      <th scope="col">Unavailable time(ranges)</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
  {data.map((user, i) => {
                                  return (
                                    <>
                                    <tr>
      <th scope="row"><Moment format="dddd" withTitle>{user.date}</Moment></th>
      <td><Moment format="D MMM YYYY" withTitle>
                                    {user.date}
                                  </Moment></td>
      <td><Moment date={user.start} format="hh:mm" durationFromNow>{user.start}</Moment></td>
      <td>{user.end}</td>
    {!user.from1?<td>{user.from}-{user.to} </td>:
    <td>{user.from}-{user.to} && {user.from1}-{user.to1}</td>  }  


    <td><button onClick={() => deletearticle(user._id)} className='red'>Delete</button></td>
    </tr>
 
    </>
                                  )}
  )}
  </tbody>
</table>

  </div>
  </>
}

export default Table