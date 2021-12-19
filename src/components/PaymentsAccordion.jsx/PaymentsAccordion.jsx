import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CardHolder } from '../Cart/CardHolder/CardHolder';
import LeftItemParent from '../Cart/Item_Detail/Item_left_side/LeftItemParent';
import { useSelector } from 'react-redux';
import { Form } from '../DeliveryPage/Form/Form';
import { PaymentsCard } from '../PaymentsPage/PaymentCard/PaymentsCard';
import { BillingCard } from '../PaymentsPage/BillingCard/BillingCard';

const styles = {
    backgroundColor: 'white',
    boxShadow: 0,
    width: '735px',
    justifyContent: 'center',
    padding: '0px'
}

const PaymentsAccordion = ({ data, paymentDisplay, handleDisplay, addressDisplay, setAddressDisplay }) => {
    const { cart, address } = useSelector(state => state.cart);
    return (
        <div>
            <Accordion sx={styles}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ backgroundColor: '#F9F9F9' }}
                >
                    <Typography>ORDER SUMMARY</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ padding: '0px' }}>
                    <div>
                        {cart.length > 0 ?

                            cart.map(item => {
                                return <LeftItemParent data={item} />
                            })
                            :

                            <h2>Cart is empty!</h2>
                        }

                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={styles}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    sx={{ backgroundColor: '#F9F9F9' }}
                    onClick={() => { setAddressDisplay(false) }}
                >
                    {address ? 
                        <div>
                            <BillingCard/>
                        </div> 
                    : <Typography>SHIPPING & BILLING DETAILS</Typography>}

                </AccordionSummary>
                <AccordionDetails>
                    <Form handleDisplay={handleDisplay} handleAddressDisplay={() => setAddressDisplay(!addressDisplay)} />
                </AccordionDetails>
            </Accordion>
            <Accordion disabled={paymentDisplay ? false : true} sx={styles}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                    sx={{ backgroundColor: '#F9F9F9' }}
                >
                    <Typography>PAYMENTS</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ paddingLeft: '10px' }}>
                    <PaymentsCard data={data} />
                </AccordionDetails>
            </Accordion>
        </div>
    );
}


export default PaymentsAccordion;