import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { IconButton } from '@mui/material';

interface PreClick {
    onPreClick: Function,
}
const PreviousArrow = ({ onPreClick }: PreClick) => {
    return (
        <div className="slider-pre-arrow">
            <IconButton
                onClick={onPreClick()}>
                <ArrowBackIosNewIcon />
            </IconButton>
        </div>
    );
};
export default PreviousArrow;