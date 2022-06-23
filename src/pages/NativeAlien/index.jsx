import React, { useState } from 'react';
import Video from '../../assets/nativebackground.mp4'
import Logo from '../../assets/nativealiens.png';
import Instagram from '../../assets/insta.png';
import Nave from '../../assets/nave.png';
import ButtonDescer from '../../components/ButtonDown';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import MetaMask from '../../assets/metamask.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, ImgLogo, ContentHeader, LogoInstagram, 
ContentButtonWallet, ButtonWallet, VideoBackground, ContainerModal, 
ButtonModal, ImgMetamask, ButtonMint, ContentFooter, GifAlien,
 GlassFooter, MintYourNFT, MINT } from './styled';
import GifAlienPre from '../../assets/alien.gif'


export default function NativeAlien() {
    const [isConnected, setIsConnected] = useState(false)
    const [wallet, setWallet] = useState('')
    const [anchorEl, setAnchorEl] = useState(null);

    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                const address = await window.ethereum.request({
                    method: 'eth_requestAccounts'
                });

                const object = {
                    connectedStatus: true,
                    status: 'conectado com sucesso',
                    address
                }

                return object
            } catch (err) {
                return {
                    connectedStatus: false,
                    status: 'Erro ao conectar a carteira'
                }

            }
        } else {
            toast.error("Metamask is not installed on browser")
        }

    }

    const pressedConnectWallet = async () => {
        console.log(wallet)
        if (isConnected) return toast.info("Wallet already connected " + wallet[0].slice(0, 25));

        const walletResponse = await connectWallet();
        setIsConnected(walletResponse.connectedStatus);
        setWallet(walletResponse.address)
        toast.success(`Connected ${walletResponse.address[0].slice(0, 25)}`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            progress: undefined,
        });
        handleClose();

    }

    async function startPayment() {

    }




    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <Container>
                <div>
                    <ImgLogo src={Logo} alt="logo" />
                </div>
                <ContentHeader>
                    <a target="_blank" rel="noreferrer" href='https://www.instagram.com/nativealiensofficial/?r=nametag' style={{ display: 'flex', alignItems: 'center' }}>
                        <LogoInstagram src={Instagram} alt="logo" /></a>
                </ContentHeader>
                <ContentButtonWallet>
                    <ButtonWallet onClick={handleClick} wallet={wallet}>
                        {wallet ? wallet[0].slice(0, 15) : "CONNECT WALLET"}
                    </ButtonWallet>
                </ContentButtonWallet>
            </Container>
            <VideoBackground loop autoPlay muted>
                <source src={Video} type='video/mp4'></source>
            </VideoBackground>
            <div>
                <ButtonDescer />
            </div>

            <div style={{ background: `url(${Nave}) no-repeat`, backgroundSize: 'cover', position: 'absolute', width: '100%', top: '100%', objectFit: 'cover', zIndex: '-1', height: '100%' }}>
                <ContentFooter>
                    <GifAlien src={GifAlienPre} alt="Gif Alien" />
                    <GlassFooter>
                        <MintYourNFT variant="h4" gutterBottom component="h4"><b style={{ color: 'white' }}>MINT YOUR NFT</b></MintYourNFT>
                        <ButtonMint onClick={event => startPayment()}><MINT component="h4" variant="h4" ><b>MINT</b></MINT></ButtonMint>
                    </GlassFooter>
                </ContentFooter>
            </div>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <ContainerModal>
                    <Typography sx={{ color: 'white', marginTop: '30px' }} >Connect Your Wallet</Typography>
                    <ButtonModal onClick={event => pressedConnectWallet()} >
                        <ImgMetamask src={MetaMask} />
                        <Typography>METAMASK</Typography>
                    </ButtonModal>
                </ContainerModal>
            </Popover>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover

            />
        </>

    )
}




