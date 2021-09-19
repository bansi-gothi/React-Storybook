import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from '@mui/material';

interface NextClick {
    onNextClick: Function,
};

const NextArrow = ({ onNextClick }: NextClick) => {
    return (
        <IconButton
            onClick={onNextClick()} >
            <ArrowForwardIosIcon />
        </IconButton>
    );
};
export default NextArrow;