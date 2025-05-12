import { IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

function TopBar() {
  return (
    <>
        <div className='fixed top-10'>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                className='ml-8'
            >
                <MenuIcon />
            </IconButton>
        </div>
    </>
  )
}

export default TopBar