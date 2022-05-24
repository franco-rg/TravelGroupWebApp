import React from "react";

const datetime = ({ fecha, hora, color = '#FFFFFF' }) => {

    var time = new Date();

    var showdate = new Date();
    var displaytodaysdate = showdate.getDate() + '/' + (showdate.getMonth() + 1) + '/' + showdate.getFullYear();
    return (
        <div>
            {fecha && <p className="poppins text-white text-base" style={{ color: color }}>{displaytodaysdate}</p>}
            {hora && <p className="poppins text-white text-base" style={{ color: color }}>{time.toLocaleString('en-US', { hour: 'numeric', minute: "numeric", hour12: true })}</p>}
        </div>
    )
}

export default datetime;