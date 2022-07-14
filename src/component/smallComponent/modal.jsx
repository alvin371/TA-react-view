import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
// import { gql, useMutation } from "@apollo/client";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import useForm from "./utils/useForm";
import axios from "axios";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};


// function ChildModal({ but_style, post }) {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <React.Fragment>
      
//       <Modal
//         hideBackdrop
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="child-modal-title"
//         aria-describedby="child-modal-description"
//       >
//         <Box sx={{ ...style, width: 300 }} className="space-y-4">
//           <h2
//             id="child-modal-title"
//             className="text-center font-bold text-red-dark"
//           >
//             CONFIRMATION
//           </h2>
//           <h5 id="child-modal-description" className="font-medium">
//             Make a meeting agreement
//           </h5>
//           <div className="space-x-2">
//             <h5 id="child-modal-description" className="font-medium inline">
//               Class Name
//             </h5>
//             <h5 className="font-medium inline">:</h5>
//             <h5 className="font-medium inline"></h5>
//           </div>
//           <div className="space-x-2">
//             <h5 id="child-modal-description" className="font-medium inline">
//               On
//             </h5>
//             <h5 className="font-medium inline">:</h5>
//             <h5 className="font-medium inline"></h5>
//           </div>

//           <Button onClick={handleClose} className={but_style}>Agree</Button>
//           <Button onClick={handleClose}>DISAgree</Button>
//         </Box>
//       </Modal>
//     </React.Fragment>
//   );
// }
// const offlineCreate = gql`
// mutation MyMutation($class_id: Int = 10, $date: String = "", $days: String = "", $location: String = "", $name_class: String = "", $time: String = "", $user_id: Int = 10) {
//   insert_booking_offline_classes_one(object: {class_id: $class_id, date: $date, days: $days, location: $location, name_class: $name_class, time: $time, user_id: $user_id}) {
//     class_id
//     date
//     days
//     id
//     location
//     name_class
//     time
//     user_id
//   }
// }
// `;
export default function NestedModal({ but_style, post }) {
  const currentUserState = useSelector((state) => state.Auth);
  const user=currentUserState.currentUser
  

  const [classId, setClassId] = useState('');
  const [userId, setUserId] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [session, setSession] = useState('');
  const [bookingClass, setBookingClass] = useForm({
    'class_id': '',
    'user_id': '',
    'phone': '',
    'email': '',
    'date': '',
    'session': '',
  } )
  const handleSubmit = (e) => {
    console.log(user, 'ini user')
    console.log(bookingClass, 'ini value booking class')
    e.preventDefault()
    // const fd = new FormData()
    // fd.append('class_id', user)
    // fd.append('user_id', idClass)
    // fd.append('phone', phone)
    // fd.append('email', email)
    axios.post('localhost:8005', {

    })
  }


  const [open, setOpen] = React.useState(false);
  // const [mutate, { data: dataMutation }] = useMutation(offlineCreate);
  const handleOpen = () => {
    setOpen(true);
    console.log(post);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = () => {
    // console.log(post)
    // mutate({
    //   variables:{
    //     user_id:user.id,
    //     name_class:post.name,
    //     time:post.time,
    //     location:post.location,
    //     days:post.day,
    //     date:post.date,
    //     class_id:post.id
    //   }
    // })
    // alert("done")
  };


  return (
    <div>
      <Button
        variant="contained"
        size="small"
        onClick={handleOpen}
        className={but_style}
      >
        Booking
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{ ...style, width: 400 }}
          className="space-y-4 border-0 rounded-xl"
        >
          <h2
            id="parent-modal-title"
            className="text-xl font-bold text-center text-red"
          >
            Confirmation Status
          </h2>
          
          <p id="parent-modal-description" className="font-semibold py-4 text-gray-dark">
            Hi, here are the results of the class to be booked with the following details and please choose your schedule
          </p>
          <p className="text-base font-medium">Class Name</p>
          <p className="text-sm font-normal">{post.name}</p>
          <form action="" onSubmit={handleSubmit}>
            <input type="hidden" defaultValue={post.id} onSubmit={e => { setBookingClass('class_id', e.target.value) }} name="class_id" />
            <input type="hidden" defaultValue={user.id} onSubmit={e => { setBookingClass('user_id', e.target.value) }} name="user_id" />
          <div className="font-semibold grid grid-cols-3 mb-4 gap-2">
              <label htmlFor="email">Session</label>
              <input className="col-span-2 border border-gray-300 rounded-md pl-3 p-1" type="text" placeholder="Session" name="session" onChange={e => { setBookingClass('session', e.target.value) }} />
              <label htmlFor="email">Date</label>
              <input className="col-span-2 border border-gray-300 rounded-md pl-3 p-1" type="text" placeholder="Date" name="date" onChange={e => { setBookingClass('date', e.target.value) }} />
              <label htmlFor="email">Email</label>
              <input className="col-span-2 border border-gray-300 rounded-md pl-3 p-1" type="text" placeholder="Email" name="email" onChange={e => { setBookingClass('email', e.target.value) }} />
              <label htmlFor="phone">Phone</label>
              <input className="col-span-2 border border-gray-300 rounded-md pl-3 p-1" type="text" placeholder="Phone" name="phone" onChange={e => { setBookingClass('phone', e.target.value) }} />
            </div>
          {/* <Box sx={{ minWidth: 120 }}>
            <DatePicker/>
          </Box> */}
          <Button
        variant="contained"
        size="medium"
        onClick={handleClick}
        className={but_style}
      >
        BOOKING
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
