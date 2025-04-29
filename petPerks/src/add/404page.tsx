
import styled from 'styled-components'
import page from './404page.svg'
import { useEffect, useState } from 'react';
import Loader from '../components/loader';

const Page404 = () => {
    const [isLoading, setIsLoading] = useState(true);
        useEffect(()=>{
            window.scrollTo(0, 0); 
        },[])
    
        useEffect(() => {
            const fakeDataFetch = () => {
                setTimeout(() => {
                    setIsLoading(false);
                }, 1000);
            }
            fakeDataFetch();
        }, [])
        return (
        isLoading ? <Loader /> :
        <Page404STyle>
            <img src={page} alt="page404" />
        </Page404STyle>
    )
}

export default Page404

const Page404STyle = styled.div`
    width: 100%;
    padding-top: 30px;
    padding-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    img{
        width: 735px;

    }
`