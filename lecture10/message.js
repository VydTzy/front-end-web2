const message = () => {
  const question1 = "Nama";
  const respon1 = "Tjia, David ";
  const question2 = "Age";
  const respon2 = "19 ";
  const question3 = "Status";
  const respon3 = "Taken ";
  const question4 = "Major";
  const respon4 = "Informatics ";
  const question5 = "Faculty";
  const respon5 = "Computer science ";
  const question6 = "Address";
  const respon6 = "Student hill ";
  const question7 = "Interests";
  const respon7 = "Web development";

  //gunakan backticks (`)
  return `
    <h2 style="color; blue ; text-align: center;">Personal Information</h2>
    <hr style= " border: 1px solid black;" />
    <ul style="list-style-type: none: padding: 0 center;">
       <li><strong style="forn-size:18px;">${question1}: </strong>${respon1}</li>
       <li><strong>${question2}; </strong>${respon2}</li>
       <li><strong>${question3}: </strong>${respon3}</li>
       <li><strong>${question4}; </strong>${respon4}</li>
       <li><strong>${question5}: </strong>${respon5}</li>
       <li><strong>${question6}; </strong>${respon6}</li>
       <li><strong>${question7}: </strong>${respon7}</li>
    </ul>
  `;
};

export default message;
