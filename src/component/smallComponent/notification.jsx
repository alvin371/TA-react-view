import * as React from 'react';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { gql, useMutation, useSubscription } from "@apollo/client";
import { useSelector, useDispatch } from "react-redux";
// const offline=gql`subscription MySubscription($_eq: Int = 10) {
//     booking_offline_classes(where: {user_id: {_eq: $_eq}}) {
//       user_id
//       time
//       name_class
//       location
//       id
//       days
//       date
//       class_id
//     }
//   }`
export default function LeadingClickAway() {
  const [open, setOpen] = React.useState(false);
  const currentUserState = useSelector((state) => state.Auth);
  const user = currentUserState.currentUser
  //   const { data:datajumlah } = useSubscription(jumlah, {
  //     variables: { _eq: localStorage.getItem("user") },
  //   });
  // const { data: dataoffline } = useSubscription(offline, { variables: { _eq: user.id } })
  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };
  // console.log(dataoffline?.data)
  const styles = {
    position: 'absolute',
    width: 400,
    top: 30,
    right: 0,
    left: 0,
    zIndex: 1,
    border: '1px solid',
    p: 1,
    bgcolor: 'background.paper',
  };

  return (
    <ClickAwayListener
      mouseEvent="onMouseDown"
      touchEvent="onTouchStart"
      onClickAway={handleClickAway}
    >
      <Box sx={{ position: 'relative' }}>
        {/* <button type="button" onClick={handleClick}> */}
        <NotificationsActiveIcon onClick={handleClick} />
        {/* </button> */}
        {open ? (
          <Box sx={styles}>

            <h5>

            </h5>
          </Box>
        ) : null}
      </Box>
    </ClickAwayListener>
  );
}