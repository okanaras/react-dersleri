import { Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function MUIButton() {
    return (
        <div>
            <div style={{ marginBottom: '50px' }}>
                <Button variant='text'>KAYDOL</Button>
                <Button variant='contained'>KAYDOL</Button>
                <Button variant='outlined'>KAYDOL</Button>
            </div>

            <div style={{ marginBottom: '50px' }}>
                <Button variant='contained' color='primary'>KAYDOL</Button>
                <Button variant='contained' color='error'>KAYDOL</Button>
                <Button variant='contained' color='info'>KAYDOL</Button>
                <Button variant='contained' color='secondary'>KAYDOL</Button>
                <Button variant='contained' color='success'>KAYDOL</Button>
                <Button variant='contained' color='warning'>KAYDOL</Button>
            </div>

            <div style={{ marginBottom: '50px' }}>
                <Button variant='contained' color='info' size='small'>GERI DON</Button>
                <Button variant='contained' color='warning' size='medium'>GERI DON</Button>
                <Button variant='contained' color='success' size='large'>GERI DON</Button>
            </div>

            <div style={{ marginBottom: '50px' }}>
                <Button variant='contained' color='warning' size='small' startIcon={<AddCircleIcon />} endIcon={<AddCircleIcon />}>Geri Don</Button>
            </div>
        </div>
    )
}

export default MUIButton