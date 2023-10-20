import React, { useContext } from "react";
import { AppContext } from "../context/AppProvider";

function ToursDash() {
  const { tours } = useContext(AppContext);

  return (
    <div>
      <table>
        <thead>
          <th>
            <td>No</td>
            <td>Title</td>
            <td>Action</td>
          </th>
        </thead>

        <tbody>
          {tours?.map((item) => {
            return (
              <tr key={item._id}>
                <td>1</td>
                <td>{item.Title}</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            );
          })}
          <tr>
            <td>1</td>
            <td>lorem</td>
            <td>lorem</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ToursDash;
