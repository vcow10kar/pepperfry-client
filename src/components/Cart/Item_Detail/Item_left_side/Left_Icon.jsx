import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import styles from './left_icon.module.css';
import { deleteItem } from "../../../../Redux/Cart/actions";
import ConfirmationModal from '../ConfimationModal';
import { useDispatch } from "react-redux";
import { useState } from 'react';

export const Left_Icon = ({ data }) => {
    let dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleDelete = () => {
        dispatch(deleteItem(null, data));
        handleClose();
    }
    return (
        <div>
            <div className={styles.dustbin}>
                {/* <svg className={styles.icon} onClick={handleDelete}>
                <path d="M5.11754 12.873V5.1073C5.11754 4.86542 4.93981 4.66963 4.72081 4.66963C4.50182 4.66963 4.32408 4.86542 4.32408 5.1073V12.873C4.32408 13.1149 4.50182 13.3107 4.72081 13.3107C4.93981 13.3107 5.11754 13.1149 5.11754 12.873ZM7.67671 12.873V5.1073C7.67671 4.86542 7.49897 4.66963 7.27998 4.66963C7.06099 4.66963 6.88325 4.86542 6.88325 5.1073V12.873C6.88325 13.1149 7.06099 13.3107 7.27998 13.3107C7.49897 13.3107 7.67671 13.1149 7.67671 12.873ZM10.3567 4.66963C10.1378 4.66963 9.96002 4.86542 9.96002 5.1073V14.4862C9.96002 14.8381 9.70109 15.1247 9.38238 15.1247H2.61894C2.29997 15.1247 2.04025 14.8384 2.04025 14.4862V5.1073C2.04025 4.86542 1.86251 4.66963 1.64352 4.66963C1.42452 4.66963 1.24679 4.86542 1.24679 5.1073V14.4862C1.24679 15.3207 1.86225 16 2.61894 16H9.38238C10.1383 16 10.7535 15.321 10.7535 14.4862V5.1073C10.7535 4.86542 10.5757 4.66963 10.3567 4.66963ZM11.6033 2.73951H8.89626V0.437669C8.89626 0.195784 8.71852 0 8.49953 0H3.5018C3.2828 0 3.10507 0.195784 3.10507 0.437669V2.73951H0.396729C0.177735 2.73951 0 2.9353 0 3.17718C0 3.41907 0.177735 3.61485 0.396729 3.61485H11.6033C11.8223 3.61485 12 3.41907 12 3.17718C12 2.9353 11.8223 2.73951 11.6033 2.73951ZM8.1028 2.73951H3.89853V0.875337H8.1028V2.73951Z" />
            </svg> */}

                <DeleteOutlineIcon className={styles.icon} onClick={handleOpen} />
                <div className={styles.whishlist}>
                    <FavoriteBorderOutlinedIcon />
                </div>
            </div>
            <ConfirmationModal data = {data} open={open} handleClose={handleClose} handleOpen={handleOpen} handleDelete = {handleDelete}/>
        </div>

    )
}