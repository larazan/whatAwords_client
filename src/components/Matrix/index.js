import React, { useState, useEffect } from 'react'

const Matrix = ({ pos, updatePosition, showing }) => {
    const [rows, setRows] = useState(5)
    const [cols, setCols] = useState(12)

    const clickHandler = (cell, e) => {
        var pos = {x: cell[0], y: cell[1]};
        updatePosition(pos);
    }
    
    let newPos = pos.join('-')
  return (
    <>
        <div className={`flex justify-end z-10 pb-2 ${showing === false ? 'hidden' : ''} `}>
                <table className="" id="matrix">
                  <tbody>
                  {rows.map(function(r) {
                return (
                    <tr key={r}>
                    {cols.map(function(c) {
                        var cell = c + '-' + r;
                        return (
                            <td 
                                key={c} 
                                className={cell === pos ? 'active' : ''}
                                onClick={clickHandler(c, r)}
                            />
                        );
                    })}
                    </tr>
                );
            })}
                    {/* <tr >
                      <td></td>
                      <td className="active"></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr >
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr >
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr >
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr >
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr> */}
                  </tbody>
                </table>
              </div>
    </>
  )
}

export default Matrix